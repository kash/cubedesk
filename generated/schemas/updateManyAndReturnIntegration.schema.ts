import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './objects/IntegrationSelect.schema';
import { IntegrationUpdateManyMutationInputObjectSchema as IntegrationUpdateManyMutationInputObjectSchema } from './objects/IntegrationUpdateManyMutationInput.schema';
import { IntegrationWhereInputObjectSchema as IntegrationWhereInputObjectSchema } from './objects/IntegrationWhereInput.schema';

export const IntegrationUpdateManyAndReturnSchema: z.ZodType<Prisma.IntegrationUpdateManyAndReturnArgs> = z.object({ select: IntegrationSelectObjectSchema.optional(), data: IntegrationUpdateManyMutationInputObjectSchema, where: IntegrationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IntegrationUpdateManyAndReturnArgs>;

export const IntegrationUpdateManyAndReturnZodSchema = z.object({ select: IntegrationSelectObjectSchema.optional(), data: IntegrationUpdateManyMutationInputObjectSchema, where: IntegrationWhereInputObjectSchema.optional() }).strict();