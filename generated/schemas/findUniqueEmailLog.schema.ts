import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogSelectObjectSchema as EmailLogSelectObjectSchema } from './objects/EmailLogSelect.schema';
import { EmailLogIncludeObjectSchema as EmailLogIncludeObjectSchema } from './objects/EmailLogInclude.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './objects/EmailLogWhereUniqueInput.schema';

export const EmailLogFindUniqueSchema: z.ZodType<Prisma.EmailLogFindUniqueArgs> = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), where: EmailLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EmailLogFindUniqueArgs>;

export const EmailLogFindUniqueZodSchema = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), where: EmailLogWhereUniqueInputObjectSchema }).strict();