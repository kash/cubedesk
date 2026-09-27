import {useTranslation} from 'react-i18next';
import {ImportDataContext} from '@/components/settings/data/import-data/ImportData';
import ImportSection from '@/components/settings/data/import-data/ImportSection';
import {Separator} from '@/components/ui/separator';
import {toastError} from '@/util/toast';
import classNames from 'classnames';
import React, {useContext} from 'react';
import {useDropzone} from 'react-dropzone';

export default function ProcessData() {
	const {t} = useTranslation();
	const context = useContext(ImportDataContext);
	const timerImportData = context.timerImportData;

	const {getRootProps, getInputProps, isDragActive} = useDropzone({
		onDrop,
		accept: timerImportData.acceptedFileTypes,
		maxFiles: 1,
		disabled: context.importing || context.importLocked,
	});

	if (timerImportData.preImportCheck && !timerImportData.preImportCheck(context)) {
		return null;
	}

	function onDrop(files: File[]) {
		if (!files || !files.length) {
			toastError(t('settings.import.invalidFile'));
			return;
		}

		const file = files[0];
		context.setFile(file);

		const reader = new FileReader();
		reader.addEventListener('loadend', (event) => {
			const txt = String(event.target?.result);
			parseData(txt);
		});
		reader.readAsText(file);
	}

	function parseData(txt: string) {
		try {
			const importData = timerImportData.getImportableData(txt, context);
			context.setImportableData(importData);
		} catch (e) {
			toastError((e as Error).message);
		}
	}

	return (
		<div>
			<Separator className="my-6" />
			<ImportSection title={t('settings.import.selectFile')} />

			<div
				className={classNames(
					'bg-module my-5 mb-2.5 box-border flex cursor-pointer items-center justify-center rounded-[7px] border-[3px] border-dashed py-[30px]',
					isDragActive ? 'border-primary' : 'border-button',
				)}
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				<p className="text-text m-0">{t('settings.import.dropzonePrompt')}</p>
			</div>
		</div>
	);
}
