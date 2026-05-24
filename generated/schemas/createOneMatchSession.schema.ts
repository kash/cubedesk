import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionSelectObjectSchema as MatchSessionSelectObjectSchema } from './objects/MatchSessionSelect.schema';
import { MatchSessionIncludeObjectSchema as MatchSessionIncludeObjectSchema } from './objects/MatchSessionInclude.schema';
import { MatchSessionCreateInputObjectSchema as MatchSessionCreateInputObjectSchema } from './objects/MatchSessionCreateInput.schema';
import { MatchSessionUncheckedCreateInputObjectSchema as MatchSessionUncheckedCreateInputObjectSchema } from './objects/MatchSessionUncheckedCreateInput.schema';

export const MatchSessionCreateOneSchema: z.ZodType<Prisma.MatchSessionCreateArgs> = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), data: z.union([MatchSessionCreateInputObjectSchema, MatchSessionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MatchSessionCreateArgs>;

export const MatchSessionCreateOneZodSchema = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), data: z.union([MatchSessionCreateInputObjectSchema, MatchSessionUncheckedCreateInputObjectSchema]) }).strict();