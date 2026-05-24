import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordSelectObjectSchema as ForgotPasswordSelectObjectSchema } from './objects/ForgotPasswordSelect.schema';
import { ForgotPasswordIncludeObjectSchema as ForgotPasswordIncludeObjectSchema } from './objects/ForgotPasswordInclude.schema';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './objects/ForgotPasswordWhereUniqueInput.schema';

export const ForgotPasswordDeleteOneSchema: z.ZodType<Prisma.ForgotPasswordDeleteArgs> = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), where: ForgotPasswordWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordDeleteArgs>;

export const ForgotPasswordDeleteOneZodSchema = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), where: ForgotPasswordWhereUniqueInputObjectSchema }).strict();