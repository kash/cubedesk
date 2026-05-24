import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './objects/CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './objects/CustomTrainerLikeInclude.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './objects/CustomTrainerLikeWhereUniqueInput.schema';

export const CustomTrainerLikeFindUniqueSchema: z.ZodType<Prisma.CustomTrainerLikeFindUniqueArgs> = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), where: CustomTrainerLikeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeFindUniqueArgs>;

export const CustomTrainerLikeFindUniqueZodSchema = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), where: CustomTrainerLikeWhereUniqueInputObjectSchema }).strict();