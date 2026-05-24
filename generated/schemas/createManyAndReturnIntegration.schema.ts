import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './objects/IntegrationSelect.schema';
import { IntegrationCreateManyInputObjectSchema as IntegrationCreateManyInputObjectSchema } from './objects/IntegrationCreateManyInput.schema';

export const IntegrationCreateManyAndReturnSchema: z.ZodType<Prisma.IntegrationCreateManyAndReturnArgs> = z.object({ select: IntegrationSelectObjectSchema.optional(), data: z.union([ IntegrationCreateManyInputObjectSchema, z.array(IntegrationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.IntegrationCreateManyAndReturnArgs>;

export const IntegrationCreateManyAndReturnZodSchema = z.object({ select: IntegrationSelectObjectSchema.optional(), data: z.union([ IntegrationCreateManyInputObjectSchema, z.array(IntegrationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();