import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageWhereInputObjectSchema as TopAverageWhereInputObjectSchema } from './objects/TopAverageWhereInput.schema';

export const TopAverageDeleteManySchema: z.ZodType<Prisma.TopAverageDeleteManyArgs> = z.object({ where: TopAverageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopAverageDeleteManyArgs>;

export const TopAverageDeleteManyZodSchema = z.object({ where: TopAverageWhereInputObjectSchema.optional() }).strict();