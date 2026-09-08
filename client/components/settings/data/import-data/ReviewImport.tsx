import CubePicker from '@/components/common/CubePicker';
import InputLegend from '@/components/common/inputs/input/InputLegend';
import {clearOfflineData} from '@/components/layout/offline';
import {ImportDataContext, ImportDataType} from '@/components/settings/data/import-data/ImportData';
import ImportSection from '@/components/settings/data/import-data/ImportSection';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Separator} from '@/components/ui/separator';
import {Spinner} from '@/components/ui/spinner';
import {SolveInput} from '@/types/solve';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import {TRPCClientError} from '@trpc/client';
import {X} from 'phosphor-react';
import React, {ReactNode, useContext, useRef} from 'react';
import {v4 as uuid} from 'uuid';

export default function ReviewImport() {
	const context = useContext(ImportDataContext);
	const attempt = useRef<string | null>(null);
	const submitted = useRef<Parameters<typeof trpc.imports.run.mutate>[0] | null>(null);
	const running = useRef(false);

	const data = context.importableData;
	if (!data) {
		return null;
	}

	async function importData() {
		if (running.current) return;
		running.current = true;
		context.setImporting(true);
		context.setImportLocked(true);
		try {
			if (!attempt.current) {
				attempt.current = uuid();
				// Freeze the payload for retries, even if the review controls later change.
				submitted.current = JSON.parse(
					JSON.stringify({
						attemptId: attempt.current,
						source:
							context.importType === ImportDataType.CS_TIMER ? 'cstimer' : 'cubedesk',
						sessions: data.sessions,
						solves: data.solves,
					}),
				);
			}
			const result = await trpc.imports.run.mutate(submitted.current!);
			if (result.status === 'failed') {
				attempt.current = null;
				submitted.current = null;
				context.setImportLocked(false);
				throw new Error(
					'Import failed. No data was saved. Please review your file and try again.',
				);
			}
			if (result.status === 'pending') {
				throw new Error(
					'This import has not reported a result yet. Check its status again shortly.',
				);
			}
			await clearOfflineData();
			window.location.href = '/sessions';
		} catch (e) {
			if (e instanceof TRPCClientError && e.data?.code === 'BAD_REQUEST') {
				// Validation rejected the request before an attempt was accepted.
				attempt.current = null;
				submitted.current = null;
				context.setImportLocked(false);
			}
			console.error(e);
			context.setImporting(false);
			toastError((e as Error).message);
		} finally {
			running.current = false;
		}
	}

	function updateSessionName(sessionId: string, sessionName: string) {
		const sessions = data.sessions;
		for (const session of sessions) {
			if (session.id === sessionId) {
				session.name = sessionName;
				break;
			}
		}

		context.setImportableData({
			...data,
			sessions,
		});
	}

	function removeSession(sessionId: string) {
		const sessions = [...data.sessions];
		for (let i = 0; i < sessions.length; i += 1) {
			const session = sessions[i];
			if (session.id === sessionId) {
				sessions.splice(i, 1);
				break;
			}
		}

		const newSolves: SolveInput[] = [];
		for (const solve of data.solves) {
			if (solve.session_id !== sessionId) {
				newSolves.push(solve);
			}
		}

		context.setImportableData({
			...data,
			sessions,
			solves: newSolves,
		});
	}

	function updateSessionCubeType(sessionId: string, cubeType: string) {
		const newSessionId = {
			...data.sessionIdCubeTypeMap,
			[sessionId]: cubeType,
		};

		const solves = [...data.solves];
		for (const solve of solves) {
			if (solve.session_id === sessionId) {
				solve.cube_type = cubeType;
			}
		}

		context.setImportableData({
			...data,
			sessionIdCubeTypeMap: newSessionId,
			solves,
		});
	}

	let sessionMapper: ReactNode[] = [];
	if (data.sessionIdCubeTypeMap) {
		sessionMapper = data.sessions.map((session) => {
			const sessionId = session.id as string;
			const cubeType = data.sessionIdCubeTypeMap?.[sessionId];
			return (
				<div className="flex flex-row items-center justify-between" key={sessionId}>
					<div className="flex w-1/3 flex-row">
						<Input
							value={session.name || ''}
							onChange={(e) => updateSessionName(sessionId, e.target.value)}
							aria-label={'Session name'}
							className="mb-2"
						/>
					</div>
					<div className="flex w-1/3 flex-row justify-end">
						<CubePicker
							onChange={(ct) => updateSessionCubeType(sessionId, ct.id)}
							value={cubeType || ''}
						/>
					</div>
					<div className="flex w-1/3 flex-row justify-end">
						<Button
							variant="ghost"
							onClick={() => removeSession(sessionId)}
							size="icon"
							aria-label="Review Import"
						>
							<X />
						</Button>
					</div>
				</div>
			);
		});

		sessionMapper.splice(
			0,
			0,
			<div
				className="border-tmo-module/15 mt-[15px] mb-2 flex flex-row items-center justify-between border-t-2 pt-[15px]"
				key="session-header-row"
			>
				<div className="flex w-1/3 flex-row">
					<InputLegend text="Session Name" />
				</div>
				<div className="flex w-1/3 flex-row justify-end">
					<InputLegend text="Cube Type" />
				</div>
				<div className="flex w-1/3 flex-row justify-end">
					<InputLegend text="Remove" />
				</div>
			</div>,
		);
	}

	return (
		<div>
			<Separator className="my-6" />
			<ImportSection
				title="Review & import"
				description="Please make sure that the number below look correct. Then click Import data!"
			>
				<div className="my-5">
					<h4 className="text-text mb-2.5 text-[1.1rem] font-bold">
						Solves:{' '}
						<span className="text-secondary">
							{data.solves.length.toLocaleString()}
						</span>
					</h4>
					<h4 className="text-text mb-2.5 text-[1.1rem] font-bold">
						Sessions:{' '}
						<span className="text-secondary">
							{data.sessions.length.toLocaleString()}
						</span>
					</h4>
					<div inert={context.importLocked}>{sessionMapper}</div>
				</div>
				<Button
					variant="default"
					onClick={importData}
					size="lg"
					disabled={context.importing}
					aria-busy={context.importing}
				>
					{context.importing
						? 'Importing…'
						: context.importLocked
							? 'Check import status'
							: 'Import data'}
					{context.importing ? <Spinner aria-hidden="true" /> : null}
				</Button>
			</ImportSection>
		</div>
	);
}
