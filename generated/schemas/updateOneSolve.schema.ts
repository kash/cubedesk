import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveSelectObjectSchema as SolveSelectObjectSchema } from './objects/SolveSelect.schema';
import { SolveIncludeObjectSchema as SolveIncludeObjectSchema } from './objects/SolveInclude.schema';
import { SolveUpdateInputObjectSchema as SolveUpdateInputObjectSchema } from './objects/SolveUpdateInput.schema';
import { SolveUncheckedUpdateInputObjectSchema as SolveUncheckedUpdateInputObjectSchema } from './objects/SolveUncheckedUpdateInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './objects/SolveWhereUniqueInput.schema';

export const SolveUpdateOneSchema: z.ZodType<Prisma.SolveUpdateArgs> = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), data: z.union([SolveUpdateInputObjectSchema, SolveUncheckedUpdateInputObjectSchema]), where: SolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SolveUpdateArgs>;

export const SolveUpdateOneZodSchema = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), data: z.union([SolveUpdateInputObjectSchema, SolveUncheckedUpdateInputObjectSchema]), where: SolveWhereUniqueInputObjectSchema }).strict();