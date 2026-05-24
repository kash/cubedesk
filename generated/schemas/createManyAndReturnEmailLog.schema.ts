import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogSelectObjectSchema as EmailLogSelectObjectSchema } from './objects/EmailLogSelect.schema';
import { EmailLogCreateManyInputObjectSchema as EmailLogCreateManyInputObjectSchema } from './objects/EmailLogCreateManyInput.schema';

export const EmailLogCreateManyAndReturnSchema: z.ZodType<Prisma.EmailLogCreateManyAndReturnArgs> = z.object({ select: EmailLogSelectObjectSchema.optional(), data: z.union([ EmailLogCreateManyInputObjectSchema, z.array(EmailLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogCreateManyAndReturnArgs>;

export const EmailLogCreateManyAndReturnZodSchema = z.object({ select: EmailLogSelectObjectSchema.optional(), data: z.union([ EmailLogCreateManyInputObjectSchema, z.array(EmailLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();