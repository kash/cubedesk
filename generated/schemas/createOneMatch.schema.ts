import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSelectObjectSchema as MatchSelectObjectSchema } from './objects/MatchSelect.schema';
import { MatchIncludeObjectSchema as MatchIncludeObjectSchema } from './objects/MatchInclude.schema';
import { MatchCreateInputObjectSchema as MatchCreateInputObjectSchema } from './objects/MatchCreateInput.schema';
import { MatchUncheckedCreateInputObjectSchema as MatchUncheckedCreateInputObjectSchema } from './objects/MatchUncheckedCreateInput.schema';

export const MatchCreateOneSchema: z.ZodType<Prisma.MatchCreateArgs> = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), data: z.union([MatchCreateInputObjectSchema, MatchUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MatchCreateArgs>;

export const MatchCreateOneZodSchema = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), data: z.union([MatchCreateInputObjectSchema, MatchUncheckedCreateInputObjectSchema]) }).strict();