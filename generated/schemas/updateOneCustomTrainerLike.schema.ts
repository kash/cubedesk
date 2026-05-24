import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './objects/CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './objects/CustomTrainerLikeInclude.schema';
import { CustomTrainerLikeUpdateInputObjectSchema as CustomTrainerLikeUpdateInputObjectSchema } from './objects/CustomTrainerLikeUpdateInput.schema';
import { CustomTrainerLikeUncheckedUpdateInputObjectSchema as CustomTrainerLikeUncheckedUpdateInputObjectSchema } from './objects/CustomTrainerLikeUncheckedUpdateInput.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './objects/CustomTrainerLikeWhereUniqueInput.schema';

export const CustomTrainerLikeUpdateOneSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateArgs> = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), data: z.union([CustomTrainerLikeUpdateInputObjectSchema, CustomTrainerLikeUncheckedUpdateInputObjectSchema]), where: CustomTrainerLikeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateArgs>;

export const CustomTrainerLikeUpdateOneZodSchema = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), data: z.union([CustomTrainerLikeUpdateInputObjectSchema, CustomTrainerLikeUncheckedUpdateInputObjectSchema]), where: CustomTrainerLikeWhereUniqueInputObjectSchema }).strict();