import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import './UploadCover.scss';
import block from '../../../styles/bem';
import {toastError} from '../../../util/toast';

const b = block('common-upload-cover');

interface Props {
	allowGif?: boolean;
	upload: (variables: {file: any}) => Promise<{storagePath: string}>;
}

export default function UploadCover(props: Props) {
	const {allowGif, upload} = props;
	const [loading, setLoading] = useState(false);

	async function onDrop(files) {
		if (loading) {
			return;
		}

		if (!files.length) {
			toastError('Invalid file. Must be a PNG or JPEG');
			return;
		}

		setLoading(true);

		const file = files[0];
		await upload({
			file,
		});

		setLoading(false);
	}

	let coverIcon = <i className="ph-cloud-arrow-up-bold" />;

	if (loading) {
		coverIcon = <i className="ph-circle-notch-bold ph-spin" />;
	}

	return (
		<div className={b({loading})}>
			<Dropzone maxFiles={1} accept={['.png', '.jpeg', '.jpg'].concat(allowGif ? ['.gif'] : [])} onDrop={onDrop}>
				{({getRootProps, getInputProps}) => (
					<div {...getRootProps()} className={b('body')}>
						<input {...getInputProps()} />
						<div>{coverIcon}</div>
					</div>
				)}
			</Dropzone>
		</div>
	);
}
