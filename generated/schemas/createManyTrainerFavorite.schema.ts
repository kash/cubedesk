import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteCreateManyInputObjectSchema as TrainerFavoriteCreateManyInputObjectSchema } from './objects/TrainerFavoriteCreateManyInput.schema';

export const TrainerFavoriteCreateManySchema: z.ZodType<Prisma.TrainerFavoriteCreateManyArgs> = z.object({ data: z.union([ TrainerFavoriteCreateManyInputObjectSchema, z.array(TrainerFavoriteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateManyArgs>;

export const TrainerFavoriteCreateManyZodSchema = z.object({ data: z.union([ TrainerFavoriteCreateManyInputObjectSchema, z.array(TrainerFavoriteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();