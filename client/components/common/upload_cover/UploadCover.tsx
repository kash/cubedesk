import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import './UploadCover.scss';
import {CloudArrowUp} from 'phosphor-react';
import block from '../../../styles/bem';
import {toastError} from '../../../util/toast';
import LoadingIcon from '../LoadingIcon';

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

	let coverIcon = <CloudArrowUp weight="bold" />;

	if (loading) {
		coverIcon = <LoadingIcon />;
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
