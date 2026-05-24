import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './objects/TopSolveSelect.schema';
import { TopSolveIncludeObjectSchema as TopSolveIncludeObjectSchema } from './objects/TopSolveInclude.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './objects/TopSolveWhereUniqueInput.schema';

export const TopSolveDeleteOneSchema: z.ZodType<Prisma.TopSolveDeleteArgs> = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), where: TopSolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopSolveDeleteArgs>;

export const TopSolveDeleteOneZodSchema = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), where: TopSolveWhereUniqueInputObjectSchema }).strict();