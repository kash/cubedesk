import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewSelectObjectSchema as SolveViewSelectObjectSchema } from './objects/SolveViewSelect.schema';
import { SolveViewCreateManyInputObjectSchema as SolveViewCreateManyInputObjectSchema } from './objects/SolveViewCreateManyInput.schema';

export const SolveViewCreateManyAndReturnSchema: z.ZodType<Prisma.SolveViewCreateManyAndReturnArgs> = z.object({ select: SolveViewSelectObjectSchema.optional(), data: z.union([ SolveViewCreateManyInputObjectSchema, z.array(SolveViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewCreateManyAndReturnArgs>;

export const SolveViewCreateManyAndReturnZodSchema = z.object({ select: SolveViewSelectObjectSchema.optional(), data: z.union([ SolveViewCreateManyInputObjectSchema, z.array(SolveViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();