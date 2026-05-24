import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordSelectObjectSchema as ForgotPasswordSelectObjectSchema } from './objects/ForgotPasswordSelect.schema';
import { ForgotPasswordIncludeObjectSchema as ForgotPasswordIncludeObjectSchema } from './objects/ForgotPasswordInclude.schema';
import { ForgotPasswordCreateInputObjectSchema as ForgotPasswordCreateInputObjectSchema } from './objects/ForgotPasswordCreateInput.schema';
import { ForgotPasswordUncheckedCreateInputObjectSchema as ForgotPasswordUncheckedCreateInputObjectSchema } from './objects/ForgotPasswordUncheckedCreateInput.schema';

export const ForgotPasswordCreateOneSchema: z.ZodType<Prisma.ForgotPasswordCreateArgs> = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), data: z.union([ForgotPasswordCreateInputObjectSchema, ForgotPasswordUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordCreateArgs>;

export const ForgotPasswordCreateOneZodSchema = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), data: z.union([ForgotPasswordCreateInputObjectSchema, ForgotPasswordUncheckedCreateInputObjectSchema]) }).strict();