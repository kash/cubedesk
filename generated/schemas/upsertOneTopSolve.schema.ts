import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './objects/TopSolveSelect.schema';
import { TopSolveIncludeObjectSchema as TopSolveIncludeObjectSchema } from './objects/TopSolveInclude.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './objects/TopSolveWhereUniqueInput.schema';
import { TopSolveCreateInputObjectSchema as TopSolveCreateInputObjectSchema } from './objects/TopSolveCreateInput.schema';
import { TopSolveUncheckedCreateInputObjectSchema as TopSolveUncheckedCreateInputObjectSchema } from './objects/TopSolveUncheckedCreateInput.schema';
import { TopSolveUpdateInputObjectSchema as TopSolveUpdateInputObjectSchema } from './objects/TopSolveUpdateInput.schema';
import { TopSolveUncheckedUpdateInputObjectSchema as TopSolveUncheckedUpdateInputObjectSchema } from './objects/TopSolveUncheckedUpdateInput.schema';

export const TopSolveUpsertOneSchema: z.ZodType<Prisma.TopSolveUpsertArgs> = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), where: TopSolveWhereUniqueInputObjectSchema, create: z.union([ TopSolveCreateInputObjectSchema, TopSolveUncheckedCreateInputObjectSchema ]), update: z.union([ TopSolveUpdateInputObjectSchema, TopSolveUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TopSolveUpsertArgs>;

export const TopSolveUpsertOneZodSchema = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), where: TopSolveWhereUniqueInputObjectSchema, create: z.union([ TopSolveCreateInputObjectSchema, TopSolveUncheckedCreateInputObjectSchema ]), update: z.union([ TopSolveUpdateInputObjectSchema, TopSolveUncheckedUpdateInputObjectSchema ]) }).strict();