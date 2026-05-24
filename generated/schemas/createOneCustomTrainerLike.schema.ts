import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './objects/CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './objects/CustomTrainerLikeInclude.schema';
import { CustomTrainerLikeCreateInputObjectSchema as CustomTrainerLikeCreateInputObjectSchema } from './objects/CustomTrainerLikeCreateInput.schema';
import { CustomTrainerLikeUncheckedCreateInputObjectSchema as CustomTrainerLikeUncheckedCreateInputObjectSchema } from './objects/CustomTrainerLikeUncheckedCreateInput.schema';

export const CustomTrainerLikeCreateOneSchema: z.ZodType<Prisma.CustomTrainerLikeCreateArgs> = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), data: z.union([CustomTrainerLikeCreateInputObjectSchema, CustomTrainerLikeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateArgs>;

export const CustomTrainerLikeCreateOneZodSchema = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), data: z.union([CustomTrainerLikeCreateInputObjectSchema, CustomTrainerLikeUncheckedCreateInputObjectSchema]) }).strict();