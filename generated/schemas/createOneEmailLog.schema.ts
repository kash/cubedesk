import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogSelectObjectSchema as EmailLogSelectObjectSchema } from './objects/EmailLogSelect.schema';
import { EmailLogIncludeObjectSchema as EmailLogIncludeObjectSchema } from './objects/EmailLogInclude.schema';
import { EmailLogCreateInputObjectSchema as EmailLogCreateInputObjectSchema } from './objects/EmailLogCreateInput.schema';
import { EmailLogUncheckedCreateInputObjectSchema as EmailLogUncheckedCreateInputObjectSchema } from './objects/EmailLogUncheckedCreateInput.schema';

export const EmailLogCreateOneSchema: z.ZodType<Prisma.EmailLogCreateArgs> = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), data: z.union([EmailLogCreateInputObjectSchema, EmailLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EmailLogCreateArgs>;

export const EmailLogCreateOneZodSchema = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), data: z.union([EmailLogCreateInputObjectSchema, EmailLogUncheckedCreateInputObjectSchema]) }).strict();