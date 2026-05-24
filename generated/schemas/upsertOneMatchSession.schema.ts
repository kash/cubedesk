import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionSelectObjectSchema as MatchSessionSelectObjectSchema } from './objects/MatchSessionSelect.schema';
import { MatchSessionIncludeObjectSchema as MatchSessionIncludeObjectSchema } from './objects/MatchSessionInclude.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './objects/MatchSessionWhereUniqueInput.schema';
import { MatchSessionCreateInputObjectSchema as MatchSessionCreateInputObjectSchema } from './objects/MatchSessionCreateInput.schema';
import { MatchSessionUncheckedCreateInputObjectSchema as MatchSessionUncheckedCreateInputObjectSchema } from './objects/MatchSessionUncheckedCreateInput.schema';
import { MatchSessionUpdateInputObjectSchema as MatchSessionUpdateInputObjectSchema } from './objects/MatchSessionUpdateInput.schema';
import { MatchSessionUncheckedUpdateInputObjectSchema as MatchSessionUncheckedUpdateInputObjectSchema } from './objects/MatchSessionUncheckedUpdateInput.schema';

export const MatchSessionUpsertOneSchema: z.ZodType<Prisma.MatchSessionUpsertArgs> = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), where: MatchSessionWhereUniqueInputObjectSchema, create: z.union([ MatchSessionCreateInputObjectSchema, MatchSessionUncheckedCreateInputObjectSchema ]), update: z.union([ MatchSessionUpdateInputObjectSchema, MatchSessionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MatchSessionUpsertArgs>;

export const MatchSessionUpsertOneZodSchema = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), where: MatchSessionWhereUniqueInputObjectSchema, create: z.union([ MatchSessionCreateInputObjectSchema, MatchSessionUncheckedCreateInputObjectSchema ]), update: z.union([ MatchSessionUpdateInputObjectSchema, MatchSessionUncheckedUpdateInputObjectSchema ]) }).strict();