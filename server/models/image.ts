import {getPrisma} from '@/server/database';
import {logger} from '@/server/services/logger';
import {deleteObject, uploadObject} from '@/server/services/storage';
import {getImageBufferFromFileStream, ImageFileToBuffer} from '@/server/util/image';
import {generateRandomCode} from '@/shared/code';

export async function deleteImage(image) {
	try {
		await deleteObject(image.storage_path);

		return getPrisma().image.delete({
			where: {
				id: image.id,
			},
		});
	} catch (e) {
		logger.warn('Could not find image to delete.', {
			image,
			error: e,
		});
	}
}

export async function uploadImageWithFile(user, fileName, fileStream, options: ImageFileToBuffer) {
	const fileType = fileName.split('.').pop().toLowerCase();
	const name = `${generateRandomCode(10)}.${fileType}`;
	const path = `images/${name}`;

	const uploadBuffer = await getImageBufferFromFileStream(fileName, fileStream, options);
	await uploadObject(uploadBuffer, path);

	return getPrisma().image.create({
		data: {
			storage_path: path,
			user_id: user.id,
		},
	});
}
