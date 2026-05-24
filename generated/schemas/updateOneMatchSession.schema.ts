import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionSelectObjectSchema as MatchSessionSelectObjectSchema } from './objects/MatchSessionSelect.schema';
import { MatchSessionIncludeObjectSchema as MatchSessionIncludeObjectSchema } from './objects/MatchSessionInclude.schema';
import { MatchSessionUpdateInputObjectSchema as MatchSessionUpdateInputObjectSchema } from './objects/MatchSessionUpdateInput.schema';
import { MatchSessionUncheckedUpdateInputObjectSchema as MatchSessionUncheckedUpdateInputObjectSchema } from './objects/MatchSessionUncheckedUpdateInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './objects/MatchSessionWhereUniqueInput.schema';

export const MatchSessionUpdateOneSchema: z.ZodType<Prisma.MatchSessionUpdateArgs> = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), data: z.union([MatchSessionUpdateInputObjectSchema, MatchSessionUncheckedUpdateInputObjectSchema]), where: MatchSessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchSessionUpdateArgs>;

export const MatchSessionUpdateOneZodSchema = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), data: z.union([MatchSessionUpdateInputObjectSchema, MatchSessionUncheckedUpdateInputObjectSchema]), where: MatchSessionWhereUniqueInputObjectSchema }).strict();