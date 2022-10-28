import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {generateRandomCode} from '../../shared/code';
import {deleteObject, uploadObject} from '../services/storage';
import {getImageBufferFromFileStream} from '../util/image';

export function getTimerBackground(user) {
	return getPrisma().timerBackground.findUnique({
		where: {
			user_id: user.id,
		},
	});
}

export async function deleteTimerBackground(background) {
	await deleteObject(background.storage_path);

	return getPrisma().timerBackground.delete({
		where: {
			id: background.id,
		},
	});
}

export function uploadTimerBackgroundWithHex(user, hex) {
	return getPrisma().timerBackground.create({
		data: {
			id: uuid(),
			hex,
			user_id: user.id,
		},
	});
}

export async function uploadTimerBackgroundWithFile(user, fileName, fileStream) {
	const fileType = fileName.split('.').pop().toLowerCase();
	const name = `${generateRandomCode(10)}.${fileType}`;
	const path = `timer_backgrounds/${name}`;

	const uploadBuffer = await getImageBufferFromFileStream(fileName, fileStream, {
		height: 2000,
		width: 2000,
	});

	await uploadObject(uploadBuffer, path);

	return getPrisma().timerBackground.create({
		data: {
			id: uuid(),
			storage_path: path,
			user_id: user.id,
		},
	});
}
