import LoadingIcon from '@/components/common/LoadingIcon';
import {cn} from '@/util/cn';
import {toastError} from '@/util/toast';
import {CloudArrowUp} from 'phosphor-react';
import React, {useState} from 'react';
import Dropzone from 'react-dropzone';

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
		<div
			className={cn(
				'absolute left-0 top-0 z-[100] flex h-full w-full cursor-pointer items-center justify-center bg-black/80 opacity-0 transition-all duration-100 ease-in-out hover:opacity-100',
				loading && 'opacity-100 transition-none'
			)}
		>
			<Dropzone maxFiles={1} accept={['.png', '.jpeg', '.jpg'].concat(allowGif ? ['.gif'] : [])} onDrop={onDrop}>
				{({getRootProps, getInputProps}) => (
					<div {...getRootProps()} className="h-full w-full">
						<input {...getInputProps()} />
						<div className="flex h-full w-full items-center justify-center">{coverIcon}</div>
					</div>
				)}
			</Dropzone>
		</div>
	);
}
