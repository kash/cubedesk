import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './objects/TopAverageUpdateManyMutationInput.schema';
import { TopAverageWhereInputObjectSchema as TopAverageWhereInputObjectSchema } from './objects/TopAverageWhereInput.schema';

export const TopAverageUpdateManySchema: z.ZodType<Prisma.TopAverageUpdateManyArgs> = z.object({ data: TopAverageUpdateManyMutationInputObjectSchema, where: TopAverageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopAverageUpdateManyArgs>;

export const TopAverageUpdateManyZodSchema = z.object({ data: TopAverageUpdateManyMutationInputObjectSchema, where: TopAverageWhereInputObjectSchema.optional() }).strict();