import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSelectObjectSchema as MatchSelectObjectSchema } from './objects/MatchSelect.schema';
import { MatchIncludeObjectSchema as MatchIncludeObjectSchema } from './objects/MatchInclude.schema';
import { MatchUpdateInputObjectSchema as MatchUpdateInputObjectSchema } from './objects/MatchUpdateInput.schema';
import { MatchUncheckedUpdateInputObjectSchema as MatchUncheckedUpdateInputObjectSchema } from './objects/MatchUncheckedUpdateInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';

export const MatchUpdateOneSchema: z.ZodType<Prisma.MatchUpdateArgs> = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), data: z.union([MatchUpdateInputObjectSchema, MatchUncheckedUpdateInputObjectSchema]), where: MatchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchUpdateArgs>;

export const MatchUpdateOneZodSchema = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), data: z.union([MatchUpdateInputObjectSchema, MatchUncheckedUpdateInputObjectSchema]), where: MatchWhereUniqueInputObjectSchema }).strict();