import React, {createContext, ReactNode, useState} from 'react';
import './ImportData.scss';
import {reactState} from '../../../../@types/react';
import {SessionInput, SolveInput} from '../../../../@types/generated/graphql';
import ProcessData from './process/ProcessData';
import CsTimerInstructions from './instructions/CsTimerInstructions';
import {parseCubeDeskData} from './parse_data/cubedesk';
import CubeDeskInstructions from './instructions/CubeDeskInstructions';
import ModalHeader from '../../../common/modal/modal_header/ModalHeader';
import block from '../../../../styles/bem';
import ReviewImport from './review_import/ReviewImport';
import {parseCsTimerData} from './parse_data/cstimer';

const b = block('import-data');

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

export const ImportDataContext = createContext<IImportDataContext>(null);

interface Props {
	importType: ImportDataType;
}

export default function ImportData(props: Props) {
	const {importType} = props;

	const [file, setFile] = useState<File>(null);
	const [importableData, setImportableData] = useState<ImportableData>(null);
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
			<div className={b()}>
				<ModalHeader
					title={
						<>
							Import data from <span>{timerImportData.name}</span>
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
