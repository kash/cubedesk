import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageSelectObjectSchema as TopAverageSelectObjectSchema } from './objects/TopAverageSelect.schema';
import { TopAverageCreateManyInputObjectSchema as TopAverageCreateManyInputObjectSchema } from './objects/TopAverageCreateManyInput.schema';

export const TopAverageCreateManyAndReturnSchema: z.ZodType<Prisma.TopAverageCreateManyAndReturnArgs> = z.object({ select: TopAverageSelectObjectSchema.optional(), data: z.union([ TopAverageCreateManyInputObjectSchema, z.array(TopAverageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TopAverageCreateManyAndReturnArgs>;

export const TopAverageCreateManyAndReturnZodSchema = z.object({ select: TopAverageSelectObjectSchema.optional(), data: z.union([ TopAverageCreateManyInputObjectSchema, z.array(TopAverageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();