import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationUpdateManyMutationInputObjectSchema as IntegrationUpdateManyMutationInputObjectSchema } from './objects/IntegrationUpdateManyMutationInput.schema';
import { IntegrationWhereInputObjectSchema as IntegrationWhereInputObjectSchema } from './objects/IntegrationWhereInput.schema';

export const IntegrationUpdateManySchema: z.ZodType<Prisma.IntegrationUpdateManyArgs> = z.object({ data: IntegrationUpdateManyMutationInputObjectSchema, where: IntegrationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IntegrationUpdateManyArgs>;

export const IntegrationUpdateManyZodSchema = z.object({ data: IntegrationUpdateManyMutationInputObjectSchema, where: IntegrationWhereInputObjectSchema.optional() }).strict();