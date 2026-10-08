#!/usr/bin/env bash
# Sets up a working CubeDesk dev environment from scratch: Node, pnpm, Postgres, Redis, .env,
# migrations and seed data. Built for fresh Linux machines and cloud agent VMs, and safe to rerun
# anywhere.
#
#   scripts/dev-setup.sh install   Node, pnpm, system packages and node_modules (no services needed)
#   scripts/dev-setup.sh start     Start Postgres and Redis, apply migrations, seed dummy data
#   scripts/dev-setup.sh           Both
#
# Postgres and Redis already listening on their default ports are used as they are. Otherwise they
# are installed with apt and run natively, or started from docker-compose.yml when apt isn't
# available. Set DEV_SETUP_SERVICES=docker or DEV_SETUP_SERVICES=native to choose.
set -euo pipefail
cd "$(dirname "$0")/.."

PHASE="${1:-all}"
NODE_MAJOR=24
PNPM_VERSION="$(sed -n 's/.*"packageManager": "pnpm@\([^"]*\)".*/\1/p' package.json)"
SUDO=""
if [ "$(id -u)" -ne 0 ] && command -v sudo >/dev/null; then SUDO="sudo"; fi
export DEBIAN_FRONTEND=noninteractive COREPACK_ENABLE_DOWNLOAD_PROMPT=0

log() { printf '\033[1;35m[dev-setup]\033[0m %s\n' "$*"; }
fail() { printf '\033[1;31m[dev-setup]\033[0m %s\n' "$*" >&2; exit 1; }
port_open() { (exec 3<>"/dev/tcp/127.0.0.1/$1") 2>/dev/null; }
has() { command -v "$1" >/dev/null 2>&1; }

services_mode() {
	if [ -n "${DEV_SETUP_SERVICES:-}" ]; then echo "$DEV_SETUP_SERVICES"
	elif has apt-get; then echo native
	elif has docker && docker info >/dev/null 2>&1; then echo docker
	else echo none
	fi
}

redis_major() { redis-server --version | sed -n 's/.* v=\([0-9]*\).*/\1/p'; }

ensure_node() {
	if has node && [ "$(node -p 'process.versions.node.split(".")[0]')" = "$NODE_MAJOR" ]; then return; fi
	local nvm="${NVM_DIR:-$HOME/.nvm}/nvm.sh"
	if [ -s "$nvm" ]; then
		log "Installing Node $NODE_MAJOR with nvm"
		set +u; . "$nvm"; nvm install "$NODE_MAJOR"; nvm alias default "$NODE_MAJOR"; set -u
		return
	fi
	has apt-get || fail "Node $NODE_MAJOR is required. Install it, then rerun this script."
	log "Installing Node $NODE_MAJOR from NodeSource"
	curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | ${SUDO:+$SUDO -E} bash -
	$SUDO apt-get install -y nodejs
}

ensure_pnpm() {
	if has pnpm && [ "$(pnpm --version)" = "$PNPM_VERSION" ]; then return; fi
	log "Activating pnpm $PNPM_VERSION"
	if has corepack && { corepack enable pnpm >/dev/null 2>&1 || $SUDO corepack enable pnpm; }; then
		corepack prepare "pnpm@$PNPM_VERSION" --activate
	else
		$SUDO npm install -g "pnpm@$PNPM_VERSION"
	fi
}

install_native_services() {
	local packages=()
	has psql && has pg_isready || packages+=(postgresql postgresql-client)
	has redis-server || packages+=(redis-server)
	if [ ${#packages[@]} -gt 0 ]; then
		log "Installing ${packages[*]}"
		$SUDO apt-get update -qq
		$SUDO apt-get install -y -qq "${packages[@]}" >/dev/null
	fi
	# Socket.io's sharded Redis adapter uses SSUBSCRIBE, which needs Redis 7+ (Ubuntu 22.04 ships 6)
	if [ "$(redis_major)" -lt 7 ]; then
		log "Installing Redis 7+ from packages.redis.io"
		$SUDO apt-get install -y -qq curl gpg lsb-release >/dev/null
		curl -fsSL https://packages.redis.io/gpg | $SUDO gpg --dearmor --yes -o /usr/share/keyrings/redis-archive-keyring.gpg
		echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" |
			$SUDO tee /etc/apt/sources.list.d/redis.list >/dev/null
		$SUDO apt-get update -qq
		$SUDO apt-get install -y -qq redis >/dev/null
	fi
}

as_postgres() {
	if [ "$(id -u)" -eq 0 ]; then runuser -u postgres -- "$@"; else sudo -u postgres "$@"; fi
}

start_native_services() {
	if ! port_open 5432; then
		log "Starting Postgres"
		$SUDO service postgresql start >/dev/null
	fi
	if ! port_open 6379; then
		log "Starting Redis"
		# Run directly: the init script from packages.redis.io never returns in containers
		redis-server --daemonize yes --dir /tmp >/dev/null
	fi
}

# Matches DATABASE_URL in .default.env, for a Postgres managed by the OS (where a postgres user exists)
ensure_native_database() {
	id postgres >/dev/null 2>&1 || return 0
	wait_for_port 5432 Postgres
	until pg_isready -q -h 127.0.0.1; do sleep 1; done
	# Superuser so `prisma migrate dev` can create its shadow database.
	if [ "$(as_postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname = 'root'")" != 1 ]; then
		log "Creating Postgres role root"
		as_postgres psql -qc "CREATE ROLE root WITH LOGIN SUPERUSER PASSWORD 'root'"
	fi
	if [ "$(as_postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname = 'cubedesk'")" != 1 ]; then
		log "Creating database cubedesk"
		as_postgres createdb -O root cubedesk
	fi
}

start_docker_services() {
	log "Starting Postgres and Redis with docker compose"
	docker compose up -d postgres redis
	wait_for_port 5432 Postgres
	until docker compose exec -T postgres pg_isready -q -U root; do sleep 1; done
}

wait_for_port() {
	for _ in $(seq 60); do port_open "$1" && return; sleep 1; done
	fail "$2 did not start listening on port $1"
}

install() {
	ensure_node
	ensure_pnpm
	if [ "$(services_mode)" = native ] && ! { port_open 5432 && port_open 6379; }; then
		install_native_services
	fi
	if [ ! -f .env ]; then
		log "Creating .env from .default.env"
		cp .default.env .env
	fi
	log "Installing node_modules"
	pnpm install --frozen-lockfile
}

start() {
	if ! { port_open 5432 && port_open 6379; }; then
		case "$(services_mode)" in
			native) start_native_services ;;
			docker) start_docker_services ;;
			*) fail "Start Postgres on 5432 and Redis 7+ on 6379 (or install Docker), then rerun." ;;
		esac
	fi
	[ "$(services_mode)" = native ] && ensure_native_database
	wait_for_port 6379 Redis
	log "Applying migrations"
	pnpm exec prisma migrate deploy
	log "Seeding dummy data"
	pnpm seed:dev
	log "Ready. Run 'pnpm dev' and open http://localhost:3000 (test accounts: .agents/skills/dev-environment/SKILL.md)."
}

case "$PHASE" in
	install) install ;;
	start) start ;;
	all) install; start ;;
	*) fail "Usage: scripts/dev-setup.sh [install|start]" ;;
esac
