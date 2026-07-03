import React, {createContext, ReactNode, useState} from 'react';
import {reactState} from '@/@types/react';
import {SolveInput} from '@/types/solve';
import {SessionInput} from '@/types/session';
import ProcessData from '@/components/settings/data/import-data/ProcessData';
import CsTimerInstructions from '@/components/settings/data/import-data/instructions/CsTimerInstructions';
import {parseCubeDeskData} from '@/components/settings/data/import-data/parse-data/cubedesk';
import CubeDeskInstructions from '@/components/settings/data/import-data/instructions/CubeDeskInstructions';
import ModalHeader from '@/components/common/modal/ModalHeader';
import ReviewImport from '@/components/settings/data/import-data/ReviewImport';
import {parseCsTimerData} from '@/components/settings/data/import-data/parse-data/cstimer';

export enum ImportDataType {
	CS_TIMER,
	CUBEDESK,
}

export interface ImportableData {
	solves: SolveInput[];
	sessions: SessionInput[];
	sessionIdCubeTypeMap?: Record<string, string>;
}

export interface IImportDataContext {
	// State
	file: File;
	setFile: reactState<File>;
	cubeType: string;
	setCubeType: reactState<string>;
	importableData: ImportableData;
	setImportableData: reactState<ImportableData>;
	importing: boolean;
	setImporting: reactState<boolean>;

	// More
	timerImportData: TimerImportData;
	importType: ImportDataType;
}

export interface TimerImportData {
	name: string;
	getImportableData: (txt: string, context: IImportDataContext) => ImportableData;
	acceptedFileTypes: string[];
	instructions: ReactNode;
	preImportCheck?: (context: IImportDataContext) => boolean;
}

export const ImportDataContext = createContext<IImportDataContext>(null as any);

interface Props {
	importType: ImportDataType;
}

export default function ImportData(props: Props) {
	const {importType} = props;

	const [file, setFile] = useState<File>(null as any);
	const [importableData, setImportableData] = useState<ImportableData>(null as any);
	const [cubeType, setCubeType] = useState<string>('');
	const [importing, setImporting] = useState<boolean>(false);

	let timerImportData: TimerImportData;
	switch (importType) {
		case ImportDataType.CS_TIMER:
			timerImportData = {
				name: 'csTimer',
				getImportableData: parseCsTimerData,
				acceptedFileTypes: ['.txt'],
				instructions: <CsTimerInstructions />,
			};
			break;
		case ImportDataType.CUBEDESK:
			timerImportData = {
				name: 'CubeDesk',
				getImportableData: parseCubeDeskData,
				acceptedFileTypes: ['.txt', '.json'],
				instructions: <CubeDeskInstructions />,
			};
			break;
	}

	const context: IImportDataContext = {
		file,
		setFile,
		cubeType,
		importableData,
		setImportableData,
		importing,
		setImporting,
		setCubeType,
		importType,
		timerImportData,
	};

	return (
		<ImportDataContext.Provider value={context}>
			<div>
				<ModalHeader
					title={
						<>
							Import data from{' '}
							<span className="text-secondary">{timerImportData.name}</span>
						</>
					}
				/>
				{timerImportData.instructions}
				<ProcessData />
				<ReviewImport />
			</div>
		</ImportDataContext.Provider>
	);
}
