import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './objects/TopSolveSelect.schema';
import { TopSolveIncludeObjectSchema as TopSolveIncludeObjectSchema } from './objects/TopSolveInclude.schema';
import { TopSolveUpdateInputObjectSchema as TopSolveUpdateInputObjectSchema } from './objects/TopSolveUpdateInput.schema';
import { TopSolveUncheckedUpdateInputObjectSchema as TopSolveUncheckedUpdateInputObjectSchema } from './objects/TopSolveUncheckedUpdateInput.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './objects/TopSolveWhereUniqueInput.schema';

export const TopSolveUpdateOneSchema: z.ZodType<Prisma.TopSolveUpdateArgs> = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), data: z.union([TopSolveUpdateInputObjectSchema, TopSolveUncheckedUpdateInputObjectSchema]), where: TopSolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopSolveUpdateArgs>;

export const TopSolveUpdateOneZodSchema = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), data: z.union([TopSolveUpdateInputObjectSchema, TopSolveUncheckedUpdateInputObjectSchema]), where: TopSolveWhereUniqueInputObjectSchema }).strict();