import React, {useState} from 'react';
import {CaretDown} from 'phosphor-react';
import {useDispatch} from 'react-redux';
import ImportData, {ImportDataType} from './import_data/ImportData';
import fileDownload from 'js-file-download';
import {gql} from '@apollo/client/core';
import {gqlMutate, removeTypename} from '../../api';
import {openModal} from '../../../actions/general';
import {fetchSessions} from '../../../db/sessions/query';
import {fetchSolves} from '../../../db/solves/query';
import {toastError, toastSuccess} from '../../../util/toast';
import SettingRow from '../setting/row/SettingRow';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import Button, {CommonType} from '../../common/button/Button';
import {clearOfflineData} from '../../layout/offline';

export default function DataSettings() {
	const dispatch = useDispatch();

	const [exportingData, setExportingData] = useState(false);

	async function resetSettings() {
		const query = gql`
			mutation Mutate {
				resetSettings {
					id
				}
			}
		`;

		try {
			await gqlMutate(query);
			window.location.reload();
		} catch (e) {
			toastError(e.message);
		}
	}

	function openImportModal(importType: ImportDataType) {
		dispatch(openModal(<ImportData importType={importType} />));
	}

	async function hardReload() {
		try {
			await clearOfflineData();
			window.location.reload();
		} catch (e) {
			console.error(e);
		}
	}

	async function exportData() {
		setExportingData(true);

		const sessions = fetchSessions().map((s) => removeTypename({...s}, true));
		const solves = fetchSolves({
			from_timer: true,
		}).map((s) => removeTypename({...s}, true));

		const data = JSON.stringify({
			sessions,
			solves,
		});

		const filename = `cubedesk_data_${new Date().toLocaleString().replace(/,\s|\s|\/|:|_/g, '_')}.txt`;

		fileDownload(data, filename);

		setExportingData(false);
		toastSuccess('Successfully download all solve and session data');
	}

	return (
		<>
			<SettingRow
				loggedInOnly
				title="Hard reload"
				description="If your data or settings seem out of sync, you can do a hard reload to re-sync with the database."
			>
				<Button theme={CommonType.GRAY} text="Hard reload" onClick={hardReload} />
			</SettingRow>
			<SettingRow
				loggedInOnly
				title="Export solve & session data"
				description="This data can act as a backup for your solve and sessions data, which can be imported later if needed."
			>
				<Button theme={CommonType.GRAY} loading={exportingData} text="Export data" onClick={exportData} />
			</SettingRow>
			<SettingRow loggedInOnly title="Import data" description="Import data from csTimer or CubeDesk">
				<Dropdown
					text="Import data"
					icon={<CaretDown weight="bold" />}
					options={[
						{text: 'Import from csTimer', onClick: () => openImportModal(ImportDataType.CS_TIMER)},
						{text: 'Import from CubeDesk', onClick: () => openImportModal(ImportDataType.CUBEDESK)},
					]}
				/>
			</SettingRow>
			<SettingRow
				loggedInOnly
				title="Reset settings"
				description="Reset everything in the settings to default values (except for custom cube types)"
			>
				<Button
					theme={CommonType.DANGER}
					text="Reset settings"
					confirmModalProps={{
						description:
							'Be careful here. You are about to reset your settings to the default values. Custom cube types will not be affected.',
						title: 'Reset settings',
						buttonText: 'Reset settings',
						triggerAction: resetSettings,
					}}
				/>
			</SettingRow>
		</>
	);
}
