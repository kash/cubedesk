import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogCreateManyInputObjectSchema as EloLogCreateManyInputObjectSchema } from './objects/EloLogCreateManyInput.schema';

export const EloLogCreateManySchema: z.ZodType<Prisma.EloLogCreateManyArgs> = z.object({ data: z.union([ EloLogCreateManyInputObjectSchema, z.array(EloLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EloLogCreateManyArgs>;

export const EloLogCreateManyZodSchema = z.object({ data: z.union([ EloLogCreateManyInputObjectSchema, z.array(EloLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();