import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './objects/TopSolveSelect.schema';
import { TopSolveCreateManyInputObjectSchema as TopSolveCreateManyInputObjectSchema } from './objects/TopSolveCreateManyInput.schema';

export const TopSolveCreateManyAndReturnSchema: z.ZodType<Prisma.TopSolveCreateManyAndReturnArgs> = z.object({ select: TopSolveSelectObjectSchema.optional(), data: z.union([ TopSolveCreateManyInputObjectSchema, z.array(TopSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TopSolveCreateManyAndReturnArgs>;

export const TopSolveCreateManyAndReturnZodSchema = z.object({ select: TopSolveSelectObjectSchema.optional(), data: z.union([ TopSolveCreateManyInputObjectSchema, z.array(TopSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();