import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './objects/TrainerFavoriteSelect.schema';
import { TrainerFavoriteCreateManyInputObjectSchema as TrainerFavoriteCreateManyInputObjectSchema } from './objects/TrainerFavoriteCreateManyInput.schema';

export const TrainerFavoriteCreateManyAndReturnSchema: z.ZodType<Prisma.TrainerFavoriteCreateManyAndReturnArgs> = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), data: z.union([ TrainerFavoriteCreateManyInputObjectSchema, z.array(TrainerFavoriteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateManyAndReturnArgs>;

export const TrainerFavoriteCreateManyAndReturnZodSchema = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), data: z.union([ TrainerFavoriteCreateManyInputObjectSchema, z.array(TrainerFavoriteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();