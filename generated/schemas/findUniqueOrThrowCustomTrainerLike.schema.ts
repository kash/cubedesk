import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './objects/CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './objects/CustomTrainerLikeInclude.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './objects/CustomTrainerLikeWhereUniqueInput.schema';

export const CustomTrainerLikeFindUniqueOrThrowSchema: z.ZodType<Prisma.CustomTrainerLikeFindUniqueOrThrowArgs> = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), where: CustomTrainerLikeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeFindUniqueOrThrowArgs>;

export const CustomTrainerLikeFindUniqueOrThrowZodSchema = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), where: CustomTrainerLikeWhereUniqueInputObjectSchema }).strict();