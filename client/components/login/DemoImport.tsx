import {Button} from '@/components/ui/button';
import {Combobox} from '@/components/ui/combobox';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {getSolveDb} from '@/db/solves/init';
import {stripLokiJsMetadata} from '@/db/lokijs';
import {Solve} from '@/types/solve';
import {getCubeTypeName} from '@/util/cubes/util';
import {trpc} from '@/util/trpc';
import React, {createContext, useContext, useEffect, useRef, useState} from 'react';

type Completion = {mode: 'login' | 'signup'; redirect: string};
type Pending = Completion & {solves: Solve[]};
const Context = createContext<{
	complete: (completion: Completion) => void;
	pending: boolean;
} | null>(null);

export function useDemoImport() {
	const context = useContext(Context);
	if (!context) throw new Error('Demo import requires the app provider');
	return context;
}

export function DemoImportProvider({children}: {children: React.ReactNode}) {
	const [pending, setPending] = useState<Pending | null>(null);
	function complete(completion: Completion) {
		const solves = getSolveDb()
			.find({demo_mode: true})
			.map((solve) => stripLokiJsMetadata(solve) as Solve);
		if (!solves.length) {
			window.location.href = completion.redirect;
			return;
		}
		setPending({...completion, solves});
	}
	function finish() {
		if (!pending) return;
		// The unload handler checks the collection synchronously, before React effects run.
		getSolveDb().removeWhere({demo_mode: true});
		window.location.href = pending.redirect;
	}
	return (
		<Context.Provider value={{complete, pending: !!pending}}>
			{children}
			{pending && <DemoSolveImportDialog pending={pending} onComplete={finish} />}
		</Context.Provider>
	);
}

export function DemoSolveImportDialog({
	pending,
	onComplete,
}: {
	pending: Pending;
	onComplete: () => void;
}) {
	const counts = new Map<string, number>();
	for (const solve of pending.solves)
		counts.set(solve.cube_type, (counts.get(solve.cube_type) ?? 0) + 1);
	const puzzleName = (id: string) => getCubeTypeName(id) || id;
	const [name, setName] = useState(() =>
		counts.size === 1
			? `Demo ${puzzleName(pending.solves[0].cube_type)} Session`
			: 'Demo Session',
	);
	const [destination, setDestination] = useState('new');
	const [sessions, setSessions] = useState<{id: string; name: string}[]>([]);
	const [loading, setLoading] = useState(pending.mode === 'login');
	const [loadError, setLoadError] = useState(false);
	const [error, setError] = useState('');
	const [saving, setSaving] = useState(false);
	const inFlight = useRef(false);
	// Freeze the request after the first attempt: a lost response may already have committed it.
	const request = useRef<Parameters<typeof trpc.demoSolve.import.mutate>[0] | null>(null);
	const nameId = React.useId();

	async function loadSessions() {
		setLoading(true);
		setLoadError(false);
		try {
			setSessions(await trpc.session.list.query());
		} catch {
			setLoadError(true);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		if (pending.mode === 'login') void loadSessions();
	}, []);

	async function importSolves() {
		if (inFlight.current) return;
		inFlight.current = true;
		setSaving(true);
		setError('');
		request.current ??= {
			solves: pending.solves.map((solve) => ({
				id: solve.id,
				raw_time: solve.raw_time ?? 0,
				cube_type: solve.cube_type,
				scramble: solve.scramble,
				started_at: solve.started_at,
				ended_at: solve.ended_at,
				dnf: solve.dnf,
				plus_two: solve.plus_two,
				notes: solve.notes,
				inspection_time: solve.inspection_time,
				is_smart_cube: solve.is_smart_cube,
				smart_turns: solve.smart_turns,
				smart_turn_count: solve.smart_turn_count,
				smart_put_down_time: solve.smart_put_down_time,
			})),
			destination:
				pending.mode === 'signup'
					? {kind: 'new', name: 'New Session'}
					: destination === 'new'
						? {kind: 'new', name: name.trim()}
						: {kind: 'existing', sessionId: destination},
		};
		try {
			await trpc.demoSolve.import.mutate(request.current);
			onComplete();
		} catch (err) {
			// Known validation failures did not commit; allow a different destination.
			if (err && typeof err === 'object' && 'data' in err) {
				const code = (err.data as {code?: string} | undefined)?.code;
				if (code === 'NOT_FOUND' || code === 'BAD_REQUEST') request.current = null;
			}
			setError(
				'Could not import solves. Your demo solves are still here. Please retry or discard them.',
			);
			setSaving(false);
			inFlight.current = false;
		}
	}
	return (
		<Dialog open>
			<DialogContent width={440} hideCloseButton closeOnEscape={false}>
				<DialogHeader
					title="Import demo solves?"
					description={
						`${pending.solves.length} ${pending.solves.length === 1 ? 'solve' : 'solves'} · ` +
						Array.from(counts, ([id, count]) => `${count} × ${puzzleName(id)}`).join(
							', ',
						)
					}
				/>
				<div className="flex flex-col gap-4">
					{pending.mode === 'signup' ? (
						<p>Save these solves to your default session.</p>
					) : (
						<>
							<Combobox
								label="Import into session"
								value={destination}
								onValueChange={setDestination}
								disabled={saving || !!request.current || loading}
								options={[
									{value: 'new', text: 'Create a new session'},
									...sessions.map((session) => ({
										value: session.id,
										text: session.name,
									})),
								]}
							/>
							{destination === 'new' && (
								<div className="flex flex-col gap-2">
									<label htmlFor={nameId}>Session name</label>
									<Input
										id={nameId}
										value={name}
										maxLength={100}
										disabled={saving || !!request.current}
										onChange={(event) => setName(event.target.value)}
									/>
								</div>
							)}
							{loading && <p role="status">Loading sessions…</p>}
							{loadError && (
								<p role="alert">
									Could not load existing sessions.{' '}
									<Button
										variant="ghost"
										onClick={loadSessions}
										disabled={saving}
									>
										Retry
									</Button>
								</p>
							)}
						</>
					)}
					<p className="text-text/60 text-sm">Discarding removes these demo solves.</p>
					{error && (
						<p role="alert" className="text-sm">
							{error}
						</p>
					)}
					<div className="flex justify-end gap-2">
						<Button variant="outline" disabled={saving} onClick={onComplete}>
							Discard solves
						</Button>
						<Button
							disabled={
								saving ||
								loading ||
								(destination === 'new' && pending.mode === 'login' && !name.trim())
							}
							aria-busy={saving}
							onClick={importSolves}
						>
							{saving ? 'Importing…' : error ? 'Retry import' : 'Import solves'}
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
