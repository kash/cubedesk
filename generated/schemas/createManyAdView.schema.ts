import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewCreateManyInputObjectSchema as AdViewCreateManyInputObjectSchema } from './objects/AdViewCreateManyInput.schema';

export const AdViewCreateManySchema: z.ZodType<Prisma.AdViewCreateManyArgs> = z.object({ data: z.union([ AdViewCreateManyInputObjectSchema, z.array(AdViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AdViewCreateManyArgs>;

export const AdViewCreateManyZodSchema = z.object({ data: z.union([ AdViewCreateManyInputObjectSchema, z.array(AdViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();