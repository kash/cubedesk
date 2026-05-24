import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageCreateManyInputObjectSchema as TopAverageCreateManyInputObjectSchema } from './objects/TopAverageCreateManyInput.schema';

export const TopAverageCreateManySchema: z.ZodType<Prisma.TopAverageCreateManyArgs> = z.object({ data: z.union([ TopAverageCreateManyInputObjectSchema, z.array(TopAverageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TopAverageCreateManyArgs>;

export const TopAverageCreateManyZodSchema = z.object({ data: z.union([ TopAverageCreateManyInputObjectSchema, z.array(TopAverageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();