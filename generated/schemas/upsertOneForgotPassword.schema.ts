import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordSelectObjectSchema as ForgotPasswordSelectObjectSchema } from './objects/ForgotPasswordSelect.schema';
import { ForgotPasswordIncludeObjectSchema as ForgotPasswordIncludeObjectSchema } from './objects/ForgotPasswordInclude.schema';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './objects/ForgotPasswordWhereUniqueInput.schema';
import { ForgotPasswordCreateInputObjectSchema as ForgotPasswordCreateInputObjectSchema } from './objects/ForgotPasswordCreateInput.schema';
import { ForgotPasswordUncheckedCreateInputObjectSchema as ForgotPasswordUncheckedCreateInputObjectSchema } from './objects/ForgotPasswordUncheckedCreateInput.schema';
import { ForgotPasswordUpdateInputObjectSchema as ForgotPasswordUpdateInputObjectSchema } from './objects/ForgotPasswordUpdateInput.schema';
import { ForgotPasswordUncheckedUpdateInputObjectSchema as ForgotPasswordUncheckedUpdateInputObjectSchema } from './objects/ForgotPasswordUncheckedUpdateInput.schema';

export const ForgotPasswordUpsertOneSchema: z.ZodType<Prisma.ForgotPasswordUpsertArgs> = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), where: ForgotPasswordWhereUniqueInputObjectSchema, create: z.union([ ForgotPasswordCreateInputObjectSchema, ForgotPasswordUncheckedCreateInputObjectSchema ]), update: z.union([ ForgotPasswordUpdateInputObjectSchema, ForgotPasswordUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordUpsertArgs>;

export const ForgotPasswordUpsertOneZodSchema = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), include: ForgotPasswordIncludeObjectSchema.optional(), where: ForgotPasswordWhereUniqueInputObjectSchema, create: z.union([ ForgotPasswordCreateInputObjectSchema, ForgotPasswordUncheckedCreateInputObjectSchema ]), update: z.union([ ForgotPasswordUpdateInputObjectSchema, ForgotPasswordUncheckedUpdateInputObjectSchema ]) }).strict();