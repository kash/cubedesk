import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogSelectObjectSchema as EmailLogSelectObjectSchema } from './objects/EmailLogSelect.schema';
import { EmailLogUpdateManyMutationInputObjectSchema as EmailLogUpdateManyMutationInputObjectSchema } from './objects/EmailLogUpdateManyMutationInput.schema';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './objects/EmailLogWhereInput.schema';

export const EmailLogUpdateManyAndReturnSchema: z.ZodType<Prisma.EmailLogUpdateManyAndReturnArgs> = z.object({ select: EmailLogSelectObjectSchema.optional(), data: EmailLogUpdateManyMutationInputObjectSchema, where: EmailLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogUpdateManyAndReturnArgs>;

export const EmailLogUpdateManyAndReturnZodSchema = z.object({ select: EmailLogSelectObjectSchema.optional(), data: EmailLogUpdateManyMutationInputObjectSchema, where: EmailLogWhereInputObjectSchema.optional() }).strict();