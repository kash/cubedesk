import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {getPrismaClient} from '@/server/services/database';

export const wcaRouter = createTRPCRouter({
	me: userProcedure
		.query(async ({ctx}) => {
			const prisma = getPrismaClient();
			
			// Find WCA integration for the user
			const wcaIntegration = await prisma.integration.findFirst({
				where: {
					user_id: ctx.me.id,
					service_name: 'wca',
				},
			});

			if (!wcaIntegration) {
				return null;
			}

			// Return WCA data
			return {
				id: wcaIntegration.id,
				url: `https://www.worldcubeassociation.org/persons/${wcaIntegration.username}`,
				country_iso2: wcaIntegration.country || '',
				wca_id: wcaIntegration.username,
				created_at: wcaIntegration.created_at,
			};
		}),
});