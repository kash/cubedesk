import ConfirmDialog from '@/components/common/ConfirmDialog';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import {clearOfflineData} from '@/components/layout/offline';
import SettingRow from '@/components/settings/common/SettingRow';
import ImportData, {ImportDataType} from '@/components/settings/data/import-data/ImportData';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Spinner} from '@/components/ui/spinner';
import {fetchSessions} from '@/db/sessions/query';
import {fetchSolves} from '@/db/solves/query';
import {removeTypename} from '@/util/object';
import {toastError, toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import fileDownload from 'js-file-download';
import {CaretDown} from 'phosphor-react';
import React, {useState} from 'react';

export default function DataSettings() {
	const [importDataDialog, setImportDataDialog] = React.useState<React.ComponentProps<
		typeof ImportData
	> | null>(null);

	const [exportingData, setExportingData] = useState(false);

	async function resetSettings() {
		try {
			await trpc.setting.reset.mutate();
			window.location.reload();
		} catch (e) {
			toastError((e as Error).message);
		}
	}

	function openImportDialog(importType: ImportDataType) {
		setImportDataDialog({importType: importType});
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
			<>
				<SettingRow
					loggedInOnly
					title="Hard reload"
					description="If your data or settings seem out of sync, you can do a hard reload to re-sync with the database."
				>
					<Button variant="secondary" onClick={hardReload}>
						{'Hard reload'}
					</Button>
				</SettingRow>
				<SettingRow
					loggedInOnly
					title="Export solve & session data"
					description="This data can act as a backup for your solve and sessions data, which can be imported later if needed."
				>
					<Button
						variant="secondary"
						onClick={exportData}
						disabled={exportingData}
						aria-busy={exportingData}
					>
						{'Export data'}
						{exportingData ? <Spinner aria-hidden="true" /> : null}
					</Button>
				</SettingRow>
				<SettingRow
					loggedInOnly
					title="Import data"
					description="Import data from csTimer or CubeDesk"
				>
					<ActionMenu
						text="Import data"
						icon={<CaretDown weight="bold" />}
						options={[
							{
								text: 'Import from csTimer',
								onClick: () => openImportDialog(ImportDataType.CS_TIMER),
							},
							{
								text: 'Import from CubeDesk',
								onClick: () => openImportDialog(ImportDataType.CUBEDESK),
							},
						]}
					/>
				</SettingRow>
				<SettingRow
					loggedInOnly
					title="Reset settings"
					description="Reset everything in the settings to default values (except for custom cube types)"
				>
					<ConfirmDialog
						{...{
							description:
								'Be careful here. You are about to reset your settings to the default values. Custom cube types will not be affected.',
							title: 'Reset settings',
							buttonText: 'Reset settings',
							triggerAction: resetSettings,
						}}
					>
						<Button variant="destructive">{'Reset settings'}</Button>
					</ConfirmDialog>
				</SettingRow>
			</>
			<Dialog
				open={importDataDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setImportDataDialog(null);
					}
				}}
			>
				{importDataDialog && (
					<DialogContent>
						<ImportData {...importDataDialog} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
