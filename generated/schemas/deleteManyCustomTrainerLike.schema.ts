import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeWhereInputObjectSchema as CustomTrainerLikeWhereInputObjectSchema } from './objects/CustomTrainerLikeWhereInput.schema';

export const CustomTrainerLikeDeleteManySchema: z.ZodType<Prisma.CustomTrainerLikeDeleteManyArgs> = z.object({ where: CustomTrainerLikeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeDeleteManyArgs>;

export const CustomTrainerLikeDeleteManyZodSchema = z.object({ where: CustomTrainerLikeWhereInputObjectSchema.optional() }).strict();