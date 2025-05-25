import {Client, Guild, Intents, Role} from 'discord.js';
import {logger} from './logger';

// Create a new client instance

const discordServerId = process.env.DISCORD_SERVER_ID;
const discordSecret = process.env.DISCORD_BOT_SECRET;

let client: Client;
let guild: Guild;

type DiscordRole = 'Pro' | 'Admin';

export default class Discord {
	static async init() {
		if (!process.env.DISCORD_SERVER_ID) {
			logger.warn('Discord client is not initialized: DISCORD_SERVER_ID is not set');
			return;
		}
		client = new Client({
			intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
		});

		// Login to Discord with your client's token
		await client.login(discordSecret);
		guild = await client.guilds.fetch(discordServerId);

		logger.debug('Discord client successfully initialized.');
	}

	static async getMemberInGuild(discordUserId: string) {
		try {
			const member = await guild.members.cache.get(discordUserId);
			if (!member) {
				return guild.members.fetch(discordUserId);
			}
			return member;
		} catch (e) {
			logger.warn(`Could not get Discord member from Guild.`, {
				discordUserId,
				error: e,
			});
			return null;
		}
	}

	static async getUserInGuild(discordUserId: string) {
		const member = await Discord.getMemberInGuild(discordUserId);
		if (member) {
			return member.user;
		}

		return null;
	}

	static getRoleByName(name: string): Role {
		return guild.roles.cache.find((role) => role.name === name);
	}

	static async getUserRoles(discordUserId: string): Promise<Role[]> {
		const member = await Discord.getMemberInGuild(discordUserId);
		if (member) {
			return member.roles.cache.map((role) => role);
		}

		return [];
	}

	static async userHasRole(discordUserId: string, role: DiscordRole) {
		const roles = await Discord.getUserRoles(discordUserId);
		return roles.some((r) => r.name === role);
	}

	static async addRoleToUser(discordUserId: string, roleName: DiscordRole) {
		const member = await Discord.getMemberInGuild(discordUserId);
		if (!member) {
			return;
		}

		const hasRole = await Discord.userHasRole(discordUserId, roleName);
		if (hasRole) {
			return;
		}

		const role = await Discord.getRoleByName(roleName);
		await member.roles.add(role);
	}

	static async removeRoleFromUser(discordUserId: string, roleName: DiscordRole) {
		const member = await Discord.getMemberInGuild(discordUserId);
		if (!member) {
			return;
		}

		const hasRole = await Discord.userHasRole(discordUserId, roleName);
		if (!hasRole) {
			return;
		}

		const role = await Discord.getRoleByName(roleName);
		await member.roles.remove(role);
	}
}
