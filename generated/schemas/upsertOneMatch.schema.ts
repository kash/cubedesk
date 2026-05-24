import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSelectObjectSchema as MatchSelectObjectSchema } from './objects/MatchSelect.schema';
import { MatchIncludeObjectSchema as MatchIncludeObjectSchema } from './objects/MatchInclude.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';
import { MatchCreateInputObjectSchema as MatchCreateInputObjectSchema } from './objects/MatchCreateInput.schema';
import { MatchUncheckedCreateInputObjectSchema as MatchUncheckedCreateInputObjectSchema } from './objects/MatchUncheckedCreateInput.schema';
import { MatchUpdateInputObjectSchema as MatchUpdateInputObjectSchema } from './objects/MatchUpdateInput.schema';
import { MatchUncheckedUpdateInputObjectSchema as MatchUncheckedUpdateInputObjectSchema } from './objects/MatchUncheckedUpdateInput.schema';

export const MatchUpsertOneSchema: z.ZodType<Prisma.MatchUpsertArgs> = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), where: MatchWhereUniqueInputObjectSchema, create: z.union([ MatchCreateInputObjectSchema, MatchUncheckedCreateInputObjectSchema ]), update: z.union([ MatchUpdateInputObjectSchema, MatchUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MatchUpsertArgs>;

export const MatchUpsertOneZodSchema = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), where: MatchWhereUniqueInputObjectSchema, create: z.union([ MatchCreateInputObjectSchema, MatchUncheckedCreateInputObjectSchema ]), update: z.union([ MatchUpdateInputObjectSchema, MatchUncheckedUpdateInputObjectSchema ]) }).strict();