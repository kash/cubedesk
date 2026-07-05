import {DeleteObjectCommand, PutObjectCommand, PutObjectCommandInput, S3Client} from '@aws-sdk/client-s3';
import {logger} from '@/server/services/logger';

const BUCKET_NAME = 'cubedesk';

const isDev = process.env.ENV === 'development';
const s3 = isDev ? undefined : new S3Client({region: 'us-west-2'});

export async function uploadObject(fileBuffer: Buffer, path: string, options: Partial<PutObjectCommandInput> = {}) {
	if (!s3) {
		logger.warn('S3 is not available in development environment - Upload Object command is ignored');
		return Promise.resolve();
	}
	const params: PutObjectCommandInput = {
		Bucket: BUCKET_NAME,
		Key: path,
		Body: fileBuffer,
		...options
	};

	const command = new PutObjectCommand(params);
	return s3.send(command);
}

export async function deleteObject(path: string) {
	if (!s3) {
		logger.warn('S3 is not available in development environment - Delete Object command is ignored');
		return Promise.resolve();
	}
	const params = {
		Bucket: BUCKET_NAME,
		Key: path
	};

	const command = new DeleteObjectCommand(params);
	return s3.send(command);
}
