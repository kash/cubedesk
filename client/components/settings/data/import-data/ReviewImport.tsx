import React, {ReactNode, useContext} from 'react';
import {X} from 'phosphor-react';
import {ImportDataContext} from '@/components/settings/data/import-data/ImportData';
import Button from '@/components/common/button/Button';
import {gql} from '@apollo/client/core';
import {gqlMutate} from '@/components/api';
import {toastError} from '@/util/toast';
import {SessionInput, SolveInput} from '@/@types/generated/graphql';
import ImportSection from '@/components/settings/data/import-data/ImportSection';
import {clearOfflineData} from '@/components/layout/offline';
import CubePicker from '@/components/common/cube_picker/CubePicker';
import Input from '@/components/common/inputs/input/Input';
import InputLegend from '@/components/common/inputs/input/input_legend/InputLegend';

async function bulkImportSessions(sessions: SessionInput[]) {
	const query = gql`
		mutation Mutate($sessions: [SessionInput]) {
			bulkCreateSessions(sessions: $sessions)
		}
	`;

	await gqlMutate(query, {
		sessions,
	});
}

async function bulkImportSolves(solves: SolveInput[]) {
	const query = gql`
		mutation Mutate($solves: [SolveInput]) {
			bulkCreateSolves(solves: $solves)
		}
	`;

	await gqlMutate(query, {
		solves,
	});
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
		} catch (e) {
			console.error(e);
			context.setImporting(false);
			toastError((e as Error).message);
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
						<Input value={session.name || ''} onChange={(e) => updateSessionName(sessionId, e.target.value)} />
					</div>
					<div className="flex w-1/3 flex-row justify-end">
						<CubePicker onChange={(ct) => updateSessionCubeType(sessionId, ct.id)} value={cubeType || ''} />
					</div>
					<div className="flex w-1/3 flex-row justify-end">
						<Button icon={<X />} onClick={() => removeSession(sessionId)} transparent />
					</div>
				</div>
			);
		});

		sessionMapper.splice(
			0,
			0,
			<div
				className="mb-2 mt-[15px] flex flex-row items-center justify-between border-t-2 border-tmo-module/15 pt-[15px]"
				key="session-header-row"
			>
				<div className="flex w-1/3 flex-row">
					<InputLegend large text="Session Name" />
				</div>
				<div className="flex w-1/3 flex-row justify-end">
					<InputLegend large text="Cube Type" />
				</div>
				<div className="flex w-1/3 flex-row justify-end">
					<InputLegend large text="Remove" />
				</div>
			</div>
		);
	}

	return (
		<div>
			<hr className="my-[30px] h-[3px] w-full border-0 bg-button p-0" />
			<ImportSection
				title="Review & import"
				description="Please make sure that the number below look correct. Then click Import data!"
			>
				<div className="my-5">
					<h4 className="mb-2.5 text-[1.1rem] font-bold text-text">
						Solves: <span className="text-secondary">{data.solves.length.toLocaleString()}</span>
					</h4>
					<h4 className="mb-2.5 text-[1.1rem] font-bold text-text">
						Sessions: <span className="text-secondary">{data.sessions.length.toLocaleString()}</span>
					</h4>
					{sessionMapper}
				</div>
				<Button
					loading={context.importing}
					text="Import data"
					primary
					large
					glow
					disabled={context.importing}
					onClick={importData}
				/>
			</ImportSection>
		</div>
	);
}
