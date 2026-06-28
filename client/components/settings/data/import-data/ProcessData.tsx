import React, {useContext} from 'react';
import classNames from 'classnames';
import {useDropzone} from 'react-dropzone';
import {ImportDataContext} from '@/components/settings/data/import-data/ImportData';
import {toastError} from '@/util/toast';
import ImportSection from '@/components/settings/data/import-data/ImportSection';

export default function ProcessData() {
	const context = useContext(ImportDataContext);
	const timerImportData = context.timerImportData;

	const {getRootProps, getInputProps, isDragActive} = useDropzone({
		onDrop,
		accept: timerImportData.acceptedFileTypes,
		maxFiles: 1,
		disabled: context.importing,
	});

	if (timerImportData.preImportCheck && !timerImportData.preImportCheck(context)) {
		return null;
	}

	function onDrop(files: File[]) {
		if (!files || !files.length) {
			toastError('Invalid file. Please try again.');
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
			<hr className="my-[30px] h-[3px] w-full border-0 bg-button p-0" />
			<ImportSection title="Select file to import" />

			<div
				className={classNames(
					'my-5 mb-2.5 box-border flex cursor-pointer items-center justify-center rounded-[7px] border-[3px] border-dashed bg-module py-[30px]',
					isDragActive ? 'border-primary' : 'border-button'
				)}
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				<p className="m-0 text-text">Drag and drop your file here, or click to select</p>
			</div>
		</div>
	);
}
