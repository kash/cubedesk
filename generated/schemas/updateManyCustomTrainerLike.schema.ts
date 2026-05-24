import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeUpdateManyMutationInputObjectSchema as CustomTrainerLikeUpdateManyMutationInputObjectSchema } from './objects/CustomTrainerLikeUpdateManyMutationInput.schema';
import { CustomTrainerLikeWhereInputObjectSchema as CustomTrainerLikeWhereInputObjectSchema } from './objects/CustomTrainerLikeWhereInput.schema';

export const CustomTrainerLikeUpdateManySchema: z.ZodType<Prisma.CustomTrainerLikeUpdateManyArgs> = z.object({ data: CustomTrainerLikeUpdateManyMutationInputObjectSchema, where: CustomTrainerLikeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateManyArgs>;

export const CustomTrainerLikeUpdateManyZodSchema = z.object({ data: CustomTrainerLikeUpdateManyMutationInputObjectSchema, where: CustomTrainerLikeWhereInputObjectSchema.optional() }).strict();