import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSelectObjectSchema as MatchSelectObjectSchema } from './objects/MatchSelect.schema';
import { MatchIncludeObjectSchema as MatchIncludeObjectSchema } from './objects/MatchInclude.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';

export const MatchFindUniqueSchema: z.ZodType<Prisma.MatchFindUniqueArgs> = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), where: MatchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchFindUniqueArgs>;

export const MatchFindUniqueZodSchema = z.object({ select: MatchSelectObjectSchema.optional(), include: MatchIncludeObjectSchema.optional(), where: MatchWhereUniqueInputObjectSchema }).strict();