import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationCreateManyInputObjectSchema as IntegrationCreateManyInputObjectSchema } from './objects/IntegrationCreateManyInput.schema';

export const IntegrationCreateManySchema: z.ZodType<Prisma.IntegrationCreateManyArgs> = z.object({ data: z.union([ IntegrationCreateManyInputObjectSchema, z.array(IntegrationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.IntegrationCreateManyArgs>;

export const IntegrationCreateManyZodSchema = z.object({ data: z.union([ IntegrationCreateManyInputObjectSchema, z.array(IntegrationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();