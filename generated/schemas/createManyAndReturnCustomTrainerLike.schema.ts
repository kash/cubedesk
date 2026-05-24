import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './objects/CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeCreateManyInputObjectSchema as CustomTrainerLikeCreateManyInputObjectSchema } from './objects/CustomTrainerLikeCreateManyInput.schema';

export const CustomTrainerLikeCreateManyAndReturnSchema: z.ZodType<Prisma.CustomTrainerLikeCreateManyAndReturnArgs> = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), data: z.union([ CustomTrainerLikeCreateManyInputObjectSchema, z.array(CustomTrainerLikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateManyAndReturnArgs>;

export const CustomTrainerLikeCreateManyAndReturnZodSchema = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), data: z.union([ CustomTrainerLikeCreateManyInputObjectSchema, z.array(CustomTrainerLikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();