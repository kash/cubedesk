import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeCreateManyInputObjectSchema as CustomTrainerLikeCreateManyInputObjectSchema } from './objects/CustomTrainerLikeCreateManyInput.schema';

export const CustomTrainerLikeCreateManySchema: z.ZodType<Prisma.CustomTrainerLikeCreateManyArgs> = z.object({ data: z.union([ CustomTrainerLikeCreateManyInputObjectSchema, z.array(CustomTrainerLikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateManyArgs>;

export const CustomTrainerLikeCreateManyZodSchema = z.object({ data: z.union([ CustomTrainerLikeCreateManyInputObjectSchema, z.array(CustomTrainerLikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();