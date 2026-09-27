import {useTranslation} from 'react-i18next';
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
import {useMe} from '@/util/hooks/useMe';
import {removeTypename} from '@/util/object';
import {toastError, toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import fileDownload from 'js-file-download';
import {CaretDown} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

export default function DataSettings() {
	const {t} = useTranslation();
	const [importDataDialog, setImportDataDialog] = React.useState<React.ComponentProps<
		typeof ImportData
	> | null>(null);

	const [exportingData, setExportingData] = useState(false);
	const me = useMe();
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		if (me && params.get('import') === 'cstimer') {
			setImportDataDialog({importType: ImportDataType.CS_TIMER});
			params.delete('import');
			history.replace({...location, search: params.toString() ? `?${params}` : ''});
		}
	}, [me, location, history]);

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
		toastSuccess(t('settings.data.exportedSuccess'));
	}

	return (
		<>
			<>
				<SettingRow
					loggedInOnly
					title={t('settings.hardReload')}
					description={t('settings.sync.reloadHint')}
				>
					<Button variant="secondary" onClick={hardReload}>
						{t('settings.hardReload')}
					</Button>
				</SettingRow>
				<SettingRow
					loggedInOnly
					title={t('settings.exportSolveSessionData')}
					description={t('settings.export.backupHint')}
				>
					<Button
						variant="secondary"
						onClick={exportData}
						disabled={exportingData}
						aria-busy={exportingData}
					>
						{t('settings.data.export')}
						{exportingData ? <Spinner aria-hidden="true" /> : null}
					</Button>
				</SettingRow>
				<SettingRow
					loggedInOnly
					title={t('settings.importData')}
					description={t('timer.importDataFromCstimerOrCubedesk')}
				>
					<ActionMenu
						text={t('settings.importData')}
						icon={<CaretDown weight="bold" />}
						options={[
							{
								text: t('settings.importFromCsTimer'),
								onClick: () => openImportDialog(ImportDataType.CS_TIMER),
							},
							{
								text: t('settings.importFromCubeDesk'),
								onClick: () => openImportDialog(ImportDataType.CUBEDESK),
							},
						]}
					/>
				</SettingRow>
				<SettingRow
					loggedInOnly
					title={t('settings.resetSettings')}
					description={t('settings.reset.description')}
				>
					<ConfirmDialog
						labels={{
							cancel: t('common.cancel'),
							inputPrompt: t('common.confirmInputPrompt', {
								word: t('common.confirmWord'),
							}),
							confirmWord: t('common.confirmWord'),
							genericError: t('common.genericError'),
							defaultDescription: t('common.confirmDescription'),
						}}
						{...{
							description: t('settings.data.resetWarning'),
							title: t('settings.resetSettings'),
							buttonText: t('settings.resetSettings'),
							triggerAction: resetSettings,
						}}
					>
						<Button variant="destructive">{t('settings.resetSettings')}</Button>
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
					<DialogContent closeLabel={t('common.closeDialog')}>
						<ImportData {...importDataDialog} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
