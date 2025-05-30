import React, {ReactNode, useContext} from 'react';
import './ReviewImport.scss';
import block from '@/styles/bem';
import {X} from '@phosphor-icons/react/dist/ssr';
import {ImportDataContext} from '../ImportData';
import {Button} from '@/components/ui/button';
import {toastError} from '@/lib/util/toast';
import {SessionInput, SolveInput} from '@/generated/zod';
import ImportSection from '../import_section/ImportSection';
import {clearOfflineData} from '@/components/layout/offline';
import CubePicker from '@/components/common/cube_picker/CubePicker';
import Input from '@/components/common/inputs/input/Input';
import InputLegend from '@/components/common/inputs/input/input_legend/InputLegend';
import {api} from '@/trpc/react';

const b = block('review-import');

async function bulkImportSessions(sessions: SessionInput[]) {
	// TODO: Migrate to tRPC - need bulk session import endpoint
	return;
}

async function bulkImportSolves(solves: SolveInput[]) {
	// TODO: Migrate to tRPC - need bulk solve import endpoint
	return;
}

export default function ReviewImport() {
	const context = useContext(ImportDataContext);

	const data = context.importableData;
	if (!data) {
		return null;
	}

	async function importData() {
		context.setImporting(true);
		try {
			await bulkImportSessions(data.sessions);
			await bulkImportSolves(data.solves);
			await clearOfflineData();
			window.location.href = '/sessions';
		} catch (e: unknown) {
			console.error(e);
			context.setImporting(false);
			toastError(e.message);
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

		const newSolves = [];
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
			const cubeType = data.sessionIdCubeTypeMap[session.id];
			return (
				<div className={b('session')} key={session.id}>
					<div>
						<Input
							value={session.name}
							onChange={(e) => updateSessionName(session.id, e.target.value)}
						/>
					</div>
					<div>
						<CubePicker
							onChange={(ct) => updateSessionCubeType(session.id, ct.id)}
							value={cubeType}
						/>
					</div>
					<div>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => removeSession(session.id)}
						>
							<X weight="bold" />
						</Button>
					</div>
				</div>
			);
		});

		sessionMapper.splice(
			0,
			0,
			<div className={b('session-header')} key="session-header-row">
				<InputLegend large text="Session Name" />
				<InputLegend large text="Cube Type" />
				<InputLegend large text="Remove" />
			</div>,
		);
	}

	return (
		<div className={b()}>
			<hr />
			<ImportSection
				title="Review & import"
				description="Please make sure that the number below look correct. Then click Import data!"
			>
				<div className={b('stats')}>
					<h4>
						Solves: <span>{data.solves.length.toLocaleString()}</span>
					</h4>
					<h4>
						Sessions: <span>{data.sessions.length.toLocaleString()}</span>
					</h4>
					{sessionMapper}
				</div>
				<Button
					loading={context.importing}
					size="lg"
					disabled={context.importing}
					onClick={importData}
				>
					Import data
				</Button>
			</ImportSection>
		</div>
	);
}
