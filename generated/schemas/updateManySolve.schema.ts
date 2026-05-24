import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './objects/SolveUpdateManyMutationInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './objects/SolveWhereInput.schema';

export const SolveUpdateManySchema: z.ZodType<Prisma.SolveUpdateManyArgs> = z.object({ data: SolveUpdateManyMutationInputObjectSchema, where: SolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveUpdateManyArgs>;

export const SolveUpdateManyZodSchema = z.object({ data: SolveUpdateManyMutationInputObjectSchema, where: SolveWhereInputObjectSchema.optional() }).strict();