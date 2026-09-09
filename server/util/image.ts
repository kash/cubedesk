import {BufferListStream} from 'bl';
import {ReadStream} from 'fs';
import {Jimp, JimpMime} from 'jimp';

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
	const fileType = fileName.split('.').pop()?.toLowerCase() ?? '';

	let mimeType: typeof JimpMime.png | typeof JimpMime.gif | typeof JimpMime.jpeg = JimpMime.png;
	if (fileType === 'gif') {
		mimeType = JimpMime.gif;
	} else if (fileType === 'jpeg' || fileType === 'jpg') {
		mimeType = JimpMime.jpeg;
	}

	const readStream = fileStream();
	const bufferStream = await getFileStreamAsBufferStream(readStream);

	const img = await Jimp.read(bufferStream);
	img.scaleToFit({w: options.width, h: options.height});
	if (mimeType === JimpMime.jpeg) {
		return await img.getBuffer(mimeType, {quality: options.quality || 80});
	}
	return await img.getBuffer(mimeType);
}

async function getFileStreamAsBufferStream(readStream: ReadStream): Promise<Buffer> {
	return new Promise((resolve, reject) => {
		const bufferStream = BufferListStream((err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});

		// bl's types don't declare the Node stream interface BufferListStream implements at runtime
		readStream.pipe(bufferStream as unknown as NodeJS.WritableStream);
	});
}
