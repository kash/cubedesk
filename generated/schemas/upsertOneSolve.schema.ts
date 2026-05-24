import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveSelectObjectSchema as SolveSelectObjectSchema } from './objects/SolveSelect.schema';
import { SolveIncludeObjectSchema as SolveIncludeObjectSchema } from './objects/SolveInclude.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './objects/SolveWhereUniqueInput.schema';
import { SolveCreateInputObjectSchema as SolveCreateInputObjectSchema } from './objects/SolveCreateInput.schema';
import { SolveUncheckedCreateInputObjectSchema as SolveUncheckedCreateInputObjectSchema } from './objects/SolveUncheckedCreateInput.schema';
import { SolveUpdateInputObjectSchema as SolveUpdateInputObjectSchema } from './objects/SolveUpdateInput.schema';
import { SolveUncheckedUpdateInputObjectSchema as SolveUncheckedUpdateInputObjectSchema } from './objects/SolveUncheckedUpdateInput.schema';

export const SolveUpsertOneSchema: z.ZodType<Prisma.SolveUpsertArgs> = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), where: SolveWhereUniqueInputObjectSchema, create: z.union([ SolveCreateInputObjectSchema, SolveUncheckedCreateInputObjectSchema ]), update: z.union([ SolveUpdateInputObjectSchema, SolveUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SolveUpsertArgs>;

export const SolveUpsertOneZodSchema = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), where: SolveWhereUniqueInputObjectSchema, create: z.union([ SolveCreateInputObjectSchema, SolveUncheckedCreateInputObjectSchema ]), update: z.union([ SolveUpdateInputObjectSchema, SolveUncheckedUpdateInputObjectSchema ]) }).strict();