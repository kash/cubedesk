import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './objects/CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './objects/CustomTrainerLikeInclude.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './objects/CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeCreateInputObjectSchema as CustomTrainerLikeCreateInputObjectSchema } from './objects/CustomTrainerLikeCreateInput.schema';
import { CustomTrainerLikeUncheckedCreateInputObjectSchema as CustomTrainerLikeUncheckedCreateInputObjectSchema } from './objects/CustomTrainerLikeUncheckedCreateInput.schema';
import { CustomTrainerLikeUpdateInputObjectSchema as CustomTrainerLikeUpdateInputObjectSchema } from './objects/CustomTrainerLikeUpdateInput.schema';
import { CustomTrainerLikeUncheckedUpdateInputObjectSchema as CustomTrainerLikeUncheckedUpdateInputObjectSchema } from './objects/CustomTrainerLikeUncheckedUpdateInput.schema';

export const CustomTrainerLikeUpsertOneSchema: z.ZodType<Prisma.CustomTrainerLikeUpsertArgs> = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), where: CustomTrainerLikeWhereUniqueInputObjectSchema, create: z.union([ CustomTrainerLikeCreateInputObjectSchema, CustomTrainerLikeUncheckedCreateInputObjectSchema ]), update: z.union([ CustomTrainerLikeUpdateInputObjectSchema, CustomTrainerLikeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpsertArgs>;

export const CustomTrainerLikeUpsertOneZodSchema = z.object({ select: CustomTrainerLikeSelectObjectSchema.optional(), include: CustomTrainerLikeIncludeObjectSchema.optional(), where: CustomTrainerLikeWhereUniqueInputObjectSchema, create: z.union([ CustomTrainerLikeCreateInputObjectSchema, CustomTrainerLikeUncheckedCreateInputObjectSchema ]), update: z.union([ CustomTrainerLikeUpdateInputObjectSchema, CustomTrainerLikeUncheckedUpdateInputObjectSchema ]) }).strict();