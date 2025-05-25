import Jimp from 'jimp';
import {BufferListStream} from 'bl';
import {ReadStream} from 'fs';

export interface ImageFileToBuffer {
	width: number; // -1 for auto
	height: number; // -1 for auto
	quality?: number; // Default is 80
}

export async function getImageBufferFromFileStream(
	fileName: string,
	fileStream: () => ReadStream,
	options: ImageFileToBuffer
): Promise<Buffer> {
	const fileType = fileName.split('.').pop().toLowerCase();

	let mimeType: string = Jimp.MIME_PNG;
	if (fileType === 'gif') {
		mimeType = Jimp.MIME_GIF;
	} else if (fileType === 'jpeg' || fileType === 'jpg') {
		mimeType = Jimp.MIME_JPEG;
	}

	const readStream = fileStream();
	const bufferStream = await getFileStreamAsBufferStream(readStream);

	const img = await Jimp.read(bufferStream);
	return await img
		.scaleToFit(options.width, options.height)
		.quality(options.quality || 80)
		.getBufferAsync(mimeType);
}

async function getFileStreamAsBufferStream(readStream: ReadStream): Promise<Buffer> {
	return new Promise((resolve, reject) => {
		readStream.pipe(
			BufferListStream((err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			})
		);
	});
}
