import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './objects/EmailLogWhereInput.schema';

export const EmailLogDeleteManySchema: z.ZodType<Prisma.EmailLogDeleteManyArgs> = z.object({ where: EmailLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogDeleteManyArgs>;

export const EmailLogDeleteManyZodSchema = z.object({ where: EmailLogWhereInputObjectSchema.optional() }).strict();