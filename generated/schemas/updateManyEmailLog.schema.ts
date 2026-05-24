import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogUpdateManyMutationInputObjectSchema as EmailLogUpdateManyMutationInputObjectSchema } from './objects/EmailLogUpdateManyMutationInput.schema';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './objects/EmailLogWhereInput.schema';

export const EmailLogUpdateManySchema: z.ZodType<Prisma.EmailLogUpdateManyArgs> = z.object({ data: EmailLogUpdateManyMutationInputObjectSchema, where: EmailLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogUpdateManyArgs>;

export const EmailLogUpdateManyZodSchema = z.object({ data: EmailLogUpdateManyMutationInputObjectSchema, where: EmailLogWhereInputObjectSchema.optional() }).strict();