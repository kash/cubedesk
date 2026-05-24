import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveSelectObjectSchema as SolveSelectObjectSchema } from './objects/SolveSelect.schema';
import { SolveIncludeObjectSchema as SolveIncludeObjectSchema } from './objects/SolveInclude.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './objects/SolveWhereUniqueInput.schema';

export const SolveFindUniqueSchema: z.ZodType<Prisma.SolveFindUniqueArgs> = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), where: SolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SolveFindUniqueArgs>;

export const SolveFindUniqueZodSchema = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), where: SolveWhereUniqueInputObjectSchema }).strict();