import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationWhereInputObjectSchema as IntegrationWhereInputObjectSchema } from './objects/IntegrationWhereInput.schema';

export const IntegrationDeleteManySchema: z.ZodType<Prisma.IntegrationDeleteManyArgs> = z.object({ where: IntegrationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IntegrationDeleteManyArgs>;

export const IntegrationDeleteManyZodSchema = z.object({ where: IntegrationWhereInputObjectSchema.optional() }).strict();