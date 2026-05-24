import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveSelectObjectSchema as SolveSelectObjectSchema } from './objects/SolveSelect.schema';
import { SolveCreateManyInputObjectSchema as SolveCreateManyInputObjectSchema } from './objects/SolveCreateManyInput.schema';

export const SolveCreateManyAndReturnSchema: z.ZodType<Prisma.SolveCreateManyAndReturnArgs> = z.object({ select: SolveSelectObjectSchema.optional(), data: z.union([ SolveCreateManyInputObjectSchema, z.array(SolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SolveCreateManyAndReturnArgs>;

export const SolveCreateManyAndReturnZodSchema = z.object({ select: SolveSelectObjectSchema.optional(), data: z.union([ SolveCreateManyInputObjectSchema, z.array(SolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();