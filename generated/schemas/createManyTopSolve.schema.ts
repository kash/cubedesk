import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveCreateManyInputObjectSchema as TopSolveCreateManyInputObjectSchema } from './objects/TopSolveCreateManyInput.schema';

export const TopSolveCreateManySchema: z.ZodType<Prisma.TopSolveCreateManyArgs> = z.object({ data: z.union([ TopSolveCreateManyInputObjectSchema, z.array(TopSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TopSolveCreateManyArgs>;

export const TopSolveCreateManyZodSchema = z.object({ data: z.union([ TopSolveCreateManyInputObjectSchema, z.array(TopSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();