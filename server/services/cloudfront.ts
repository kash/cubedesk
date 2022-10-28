import {CloudFrontClient, CreateInvalidationCommand} from '@aws-sdk/client-cloudfront';
import {generateRandomCode} from '../../shared/code';

const CLOUDFRONT_DISTRIBUTION_ID = 'E1NXYT8MXGOG2X';
const cloudfront = new CloudFrontClient({region: 'us-west-2'});

export async function invalidateCloudFrontCache(paths: string[]) {
	const command = new CreateInvalidationCommand({
		DistributionId: CLOUDFRONT_DISTRIBUTION_ID,
		InvalidationBatch: {
			CallerReference: generateRandomCode(10),
			Paths: {
				Items: paths,
				Quantity: paths.length,
			},
		},
	});

	return cloudfront.send(command);
}
