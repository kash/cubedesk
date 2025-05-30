import React, {useCallback, useContext} from 'react';
import './ProcessData.scss';
import {useDropzone} from 'react-dropzone';
import {toastError} from '../../../../../lib/util/toast';
import block from '../../../../../styles/bem';
import ImportSection from '../import_section/ImportSection';
import {ImportDataContext} from '../ImportData';

const b = block('process-data');

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

	const parseData = useCallback((txt: string) => {
		try {
			const importData = timerImportData.getImportableData(txt, context);
			context.setImportableData(importData);
		} catch (e: unknown) {
			toastError(e.message);
		}
	}, [timerImportData, context]);

	const onDrop = useCallback((files: File[]) => {
		if (!files || !files.length) {
			toastError('Invalid file. Please try again.');
			return;
		}

		const file = files[0];
		context.setFile(file);

		const reader = new FileReader();
		reader.addEventListener('loadend', (event) => {
			const txt = String(event.target.result);
			parseData(txt);
		});
		reader.readAsText(file);
	}, [context, parseData]);

	return (
		<div className={b()}>
			<hr />
			<ImportSection title="Select file to import" />

			<div className={b('drop', {active: isDragActive})} {...getRootProps()}>
				<input {...getInputProps()} />
				<p>Drag and drop your file here, or click to select</p>
			</div>
		</div>
	);
}
