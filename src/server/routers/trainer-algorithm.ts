import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {z} from 'zod';
import {fetchTrainerAlgorithms} from '../models/trainer/fetch';

export const trainerAlgorithmRouter = createTRPCRouter({
	getAll: userProcedure
		.output(
			z.array(
				z.object({
					id: z.string(),
					name: z.string(),
					active: z.boolean(),
					scrambles: z.string(),
					solution: z.string(),
					pro_only: z.boolean(),
					img_link: z.string(),
					cube_type: z.string(),
					algo_type: z.string(),
					colors: z.string(),
					rotate: z.number(),
					group_name: z.string(),
				}),
			),
		)
		.query(async () => {
			return fetchTrainerAlgorithms();
		}),
});
