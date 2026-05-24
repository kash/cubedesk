import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogSelectObjectSchema as EloLogSelectObjectSchema } from './objects/EloLogSelect.schema';
import { EloLogCreateManyInputObjectSchema as EloLogCreateManyInputObjectSchema } from './objects/EloLogCreateManyInput.schema';

export const EloLogCreateManyAndReturnSchema: z.ZodType<Prisma.EloLogCreateManyAndReturnArgs> = z.object({ select: EloLogSelectObjectSchema.optional(), data: z.union([ EloLogCreateManyInputObjectSchema, z.array(EloLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EloLogCreateManyAndReturnArgs>;

export const EloLogCreateManyAndReturnZodSchema = z.object({ select: EloLogSelectObjectSchema.optional(), data: z.union([ EloLogCreateManyInputObjectSchema, z.array(EloLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();