import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveUpdateManyMutationInputObjectSchema as TopSolveUpdateManyMutationInputObjectSchema } from './objects/TopSolveUpdateManyMutationInput.schema';
import { TopSolveWhereInputObjectSchema as TopSolveWhereInputObjectSchema } from './objects/TopSolveWhereInput.schema';

export const TopSolveUpdateManySchema: z.ZodType<Prisma.TopSolveUpdateManyArgs> = z.object({ data: TopSolveUpdateManyMutationInputObjectSchema, where: TopSolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopSolveUpdateManyArgs>;

export const TopSolveUpdateManyZodSchema = z.object({ data: TopSolveUpdateManyMutationInputObjectSchema, where: TopSolveWhereInputObjectSchema.optional() }).strict();