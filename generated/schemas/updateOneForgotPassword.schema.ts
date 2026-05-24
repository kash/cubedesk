import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordSelectObjectSchema as ForgotPasswordSelectObjectSchema } from './objects/ForgotPasswordSelect.schema';
import { ForgotPasswordIncludeObjectSchema as ForgotPasswordIncludeObjectSchema } from './objects/ForgotPasswordInclude.schema';
import { ForgotPasswordUpdateInputObjectSchema as ForgotPasswordUpdateInputObjectSchema } from './objects/ForgotPasswordUpdateInput.schema';
import { ForgotPasswordUncheckedUpdateInputObjectSchema as ForgotPasswordUncheckedUpdateInputObjectSchema } from './objects/ForgotPasswordUncheckedUpdateInput.schema';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './objects/ForgotPasswordWhereUniqueInput.schema';

export const ForgotPasswordUpdateOneSchema: z.ZodType<Prisma.ForgotPasswordUpdateArgs> = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), data: z.union([ForgotPasswordUpdateInputObjectSchema, ForgotPasswordUncheckedUpdateInputObjectSchema]), where: ForgotPasswordWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordUpdateArgs>;

export const ForgotPasswordUpdateOneZodSchema = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), data: z.union([ForgotPasswordUpdateInputObjectSchema, ForgotPasswordUncheckedUpdateInputObjectSchema]), where: ForgotPasswordWhereUniqueInputObjectSchema }).strict();