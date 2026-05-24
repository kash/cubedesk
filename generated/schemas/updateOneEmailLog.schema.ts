import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogSelectObjectSchema as EmailLogSelectObjectSchema } from './objects/EmailLogSelect.schema';
import { EmailLogIncludeObjectSchema as EmailLogIncludeObjectSchema } from './objects/EmailLogInclude.schema';
import { EmailLogUpdateInputObjectSchema as EmailLogUpdateInputObjectSchema } from './objects/EmailLogUpdateInput.schema';
import { EmailLogUncheckedUpdateInputObjectSchema as EmailLogUncheckedUpdateInputObjectSchema } from './objects/EmailLogUncheckedUpdateInput.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './objects/EmailLogWhereUniqueInput.schema';

export const EmailLogUpdateOneSchema: z.ZodType<Prisma.EmailLogUpdateArgs> = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), data: z.union([EmailLogUpdateInputObjectSchema, EmailLogUncheckedUpdateInputObjectSchema]), where: EmailLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EmailLogUpdateArgs>;

export const EmailLogUpdateOneZodSchema = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), data: z.union([EmailLogUpdateInputObjectSchema, EmailLogUncheckedUpdateInputObjectSchema]), where: EmailLogWhereUniqueInputObjectSchema }).strict();