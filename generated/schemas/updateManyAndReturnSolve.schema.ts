import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveSelectObjectSchema as SolveSelectObjectSchema } from './objects/SolveSelect.schema';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './objects/SolveUpdateManyMutationInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './objects/SolveWhereInput.schema';

export const SolveUpdateManyAndReturnSchema: z.ZodType<Prisma.SolveUpdateManyAndReturnArgs> = z.object({ select: SolveSelectObjectSchema.optional(), data: SolveUpdateManyMutationInputObjectSchema, where: SolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveUpdateManyAndReturnArgs>;

export const SolveUpdateManyAndReturnZodSchema = z.object({ select: SolveSelectObjectSchema.optional(), data: SolveUpdateManyMutationInputObjectSchema, where: SolveWhereInputObjectSchema.optional() }).strict();