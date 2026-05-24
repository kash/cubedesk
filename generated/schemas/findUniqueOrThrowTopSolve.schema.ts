import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './objects/TopSolveSelect.schema';
import { TopSolveIncludeObjectSchema as TopSolveIncludeObjectSchema } from './objects/TopSolveInclude.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './objects/TopSolveWhereUniqueInput.schema';

export const TopSolveFindUniqueOrThrowSchema: z.ZodType<Prisma.TopSolveFindUniqueOrThrowArgs> = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), where: TopSolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopSolveFindUniqueOrThrowArgs>;

export const TopSolveFindUniqueOrThrowZodSchema = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), where: TopSolveWhereUniqueInputObjectSchema }).strict();