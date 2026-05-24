import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewCreateManyInputObjectSchema as AdViewCreateManyInputObjectSchema } from './objects/AdViewCreateManyInput.schema';

export const AdViewCreateManyAndReturnSchema: z.ZodType<Prisma.AdViewCreateManyAndReturnArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), data: z.union([ AdViewCreateManyInputObjectSchema, z.array(AdViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AdViewCreateManyAndReturnArgs>;

export const AdViewCreateManyAndReturnZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), data: z.union([ AdViewCreateManyInputObjectSchema, z.array(AdViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();