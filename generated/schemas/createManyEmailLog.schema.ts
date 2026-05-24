import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogCreateManyInputObjectSchema as EmailLogCreateManyInputObjectSchema } from './objects/EmailLogCreateManyInput.schema';

export const EmailLogCreateManySchema: z.ZodType<Prisma.EmailLogCreateManyArgs> = z.object({ data: z.union([ EmailLogCreateManyInputObjectSchema, z.array(EmailLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogCreateManyArgs>;

export const EmailLogCreateManyZodSchema = z.object({ data: z.union([ EmailLogCreateManyInputObjectSchema, z.array(EmailLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();