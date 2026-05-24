import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './objects/TopSolveSelect.schema';
import { TopSolveUpdateManyMutationInputObjectSchema as TopSolveUpdateManyMutationInputObjectSchema } from './objects/TopSolveUpdateManyMutationInput.schema';
import { TopSolveWhereInputObjectSchema as TopSolveWhereInputObjectSchema } from './objects/TopSolveWhereInput.schema';

export const TopSolveUpdateManyAndReturnSchema: z.ZodType<Prisma.TopSolveUpdateManyAndReturnArgs> = z.object({ select: TopSolveSelectObjectSchema.optional(), data: TopSolveUpdateManyMutationInputObjectSchema, where: TopSolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopSolveUpdateManyAndReturnArgs>;

export const TopSolveUpdateManyAndReturnZodSchema = z.object({ select: TopSolveSelectObjectSchema.optional(), data: TopSolveUpdateManyMutationInputObjectSchema, where: TopSolveWhereInputObjectSchema.optional() }).strict();