import {S3Client} from '@aws-sdk/client-s3-node/S3Client';
import {PutObjectCommand, PutObjectInput} from '@aws-sdk/client-s3-node/commands/PutObjectCommand';
import {DeleteObjectCommand} from '@aws-sdk/client-s3-node/commands/DeleteObjectCommand';

const BUCKET_NAME = 'cubedesk';

const s3 = new S3Client({region: 'us-west-2'});

export async function uploadObject(fileBuffer: Buffer, path: string, options: Partial<PutObjectInput> = {}) {
	const params: PutObjectInput = {
		Bucket: BUCKET_NAME,
		Key: path,
		Body: fileBuffer,
		...options,
	};

	const command = new PutObjectCommand(params);
	return s3.send(command);
}

export async function deleteObject(path: string) {
	const params = {
		Bucket: BUCKET_NAME,
		Key: path,
	};

	const command = new DeleteObjectCommand(params);
	return s3.send(command);
}
