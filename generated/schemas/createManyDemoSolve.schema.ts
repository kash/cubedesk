import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveCreateManyInputObjectSchema as DemoSolveCreateManyInputObjectSchema } from './objects/DemoSolveCreateManyInput.schema';

export const DemoSolveCreateManySchema: z.ZodType<Prisma.DemoSolveCreateManyArgs> = z.object({ data: z.union([ DemoSolveCreateManyInputObjectSchema, z.array(DemoSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DemoSolveCreateManyArgs>;

export const DemoSolveCreateManyZodSchema = z.object({ data: z.union([ DemoSolveCreateManyInputObjectSchema, z.array(DemoSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();