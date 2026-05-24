import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogSelectObjectSchema as EmailLogSelectObjectSchema } from './objects/EmailLogSelect.schema';
import { EmailLogIncludeObjectSchema as EmailLogIncludeObjectSchema } from './objects/EmailLogInclude.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './objects/EmailLogWhereUniqueInput.schema';
import { EmailLogCreateInputObjectSchema as EmailLogCreateInputObjectSchema } from './objects/EmailLogCreateInput.schema';
import { EmailLogUncheckedCreateInputObjectSchema as EmailLogUncheckedCreateInputObjectSchema } from './objects/EmailLogUncheckedCreateInput.schema';
import { EmailLogUpdateInputObjectSchema as EmailLogUpdateInputObjectSchema } from './objects/EmailLogUpdateInput.schema';
import { EmailLogUncheckedUpdateInputObjectSchema as EmailLogUncheckedUpdateInputObjectSchema } from './objects/EmailLogUncheckedUpdateInput.schema';

export const EmailLogUpsertOneSchema: z.ZodType<Prisma.EmailLogUpsertArgs> = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), where: EmailLogWhereUniqueInputObjectSchema, create: z.union([ EmailLogCreateInputObjectSchema, EmailLogUncheckedCreateInputObjectSchema ]), update: z.union([ EmailLogUpdateInputObjectSchema, EmailLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EmailLogUpsertArgs>;

export const EmailLogUpsertOneZodSchema = z.object({ select: EmailLogSelectObjectSchema.optional(), include: EmailLogIncludeObjectSchema.optional(), where: EmailLogWhereUniqueInputObjectSchema, create: z.union([ EmailLogCreateInputObjectSchema, EmailLogUncheckedCreateInputObjectSchema ]), update: z.union([ EmailLogUpdateInputObjectSchema, EmailLogUncheckedUpdateInputObjectSchema ]) }).strict();