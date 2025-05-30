'use client';

import React, {useState} from 'react';
import {CaretDown} from '@phosphor-icons/react/dist/ssr';
import {useDispatch} from 'react-redux';
import ImportData, {ImportDataType} from '@/components/settings/data/import_data/ImportData';
import fileDownload from 'js-file-download';
import {openModal} from '@/lib/actions/general';
import {fetchSessions} from '@/lib/db/sessions/query';
import {fetchSolves} from '@/lib/db/solves/query';
import {toastError, toastSuccess} from '@/lib/util/toast';
import SettingRow from '@/components/settings/setting/row/SettingRow';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import {Button} from '@/components/ui/button';
import ConfirmDialog from '@/components/common/ConfirmDialog';
import {clearOfflineData} from '@/components/layout/offline';
import {api} from '@/trpc/react';

function removeTypename(obj: any, deep = false): any {
	if (!obj) return obj;
	
	if (Array.isArray(obj)) {
		return obj.map(item => removeTypename(item, deep));
	}
	
	if (typeof obj === 'object') {
		const newObj = {};
		for (const key in obj) {
			if (key !== '__typename') {
				newObj[key] = deep ? removeTypename(obj[key], deep) : obj[key];
			}
		}
		return newObj;
	}
	
	return obj;
}

export default function DataSettingsPage() {
	const dispatch = useDispatch();

	const [exportingData, setExportingData] = useState(false);

	async function resetSettings() {
		// TODO: Migrate to tRPC - need setting.reset mutation
		// const resetSettingsMutation = api.setting.reset.useMutation();
		// try {
		// 	await resetSettingsMutation.mutateAsync();
		// 	window.location.reload();
		// } catch (e: unknown) {
		// 	toastError(e.message);
		// }

		toastError('Settings reset not yet migrated to tRPC');
	}

	function openImportModal(importType: ImportDataType) {
		dispatch(openModal(<ImportData importType={importType} />));
	}

	async function hardReload() {
		try {
			await clearOfflineData();
			window.location.reload();
		} catch (e: unknown) {
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
				<Button variant="secondary" onClick={hardReload}>Hard reload</Button>
			</SettingRow>
			<SettingRow
				loggedInOnly
				title="Export solve & session data"
				description="This data can act as a backup for your solve and sessions data, which can be imported later if needed."
			>
				<Button variant="secondary" loading={exportingData} onClick={exportData}>Export data</Button>
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
				<ConfirmDialog
					title="Reset settings"
					description="Be careful here. You are about to reset your settings to the default values. Custom cube types will not be affected."
					buttonText="Reset settings"
					triggerAction={resetSettings}
				>
					<Button variant="destructive">Reset settings</Button>
				</ConfirmDialog>
			</SettingRow>
		</>
	);
}