import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './objects/CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeUpdateManyMutationInputObjectSchema as CustomTrainerLikeUpdateManyMutationInputObjectSchema } from './objects/CustomTrainerLikeUpdateManyMutationInput.schema';
import { CustomTrainerLikeWhereInputObjectSchema as CustomTrainerLikeWhereInputObjectSchema } from './objects/CustomTrainerLikeWhereInput.schema';

export const CustomTrainerLikeUpdateManyAndReturnSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateManyAndReturnArgs> = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), data: CustomTrainerLikeUpdateManyMutationInputObjectSchema, where: CustomTrainerLikeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateManyAndReturnArgs>;

export const CustomTrainerLikeUpdateManyAndReturnZodSchema = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), data: CustomTrainerLikeUpdateManyMutationInputObjectSchema, where: CustomTrainerLikeWhereInputObjectSchema.optional() }).strict();