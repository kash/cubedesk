import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './objects/DemoSolveSelect.schema';
import { DemoSolveCreateManyInputObjectSchema as DemoSolveCreateManyInputObjectSchema } from './objects/DemoSolveCreateManyInput.schema';

export const DemoSolveCreateManyAndReturnSchema: z.ZodType<Prisma.DemoSolveCreateManyAndReturnArgs> = z.object({ select: DemoSolveSelectObjectSchema.optional(), data: z.union([ DemoSolveCreateManyInputObjectSchema, z.array(DemoSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DemoSolveCreateManyAndReturnArgs>;

export const DemoSolveCreateManyAndReturnZodSchema = z.object({ select: DemoSolveSelectObjectSchema.optional(), data: z.union([ DemoSolveCreateManyInputObjectSchema, z.array(DemoSolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();