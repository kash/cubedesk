import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordSelectObjectSchema as ForgotPasswordSelectObjectSchema } from './objects/ForgotPasswordSelect.schema';
import { ForgotPasswordUpdateManyMutationInputObjectSchema as ForgotPasswordUpdateManyMutationInputObjectSchema } from './objects/ForgotPasswordUpdateManyMutationInput.schema';
import { ForgotPasswordWhereInputObjectSchema as ForgotPasswordWhereInputObjectSchema } from './objects/ForgotPasswordWhereInput.schema';

export const ForgotPasswordUpdateManyAndReturnSchema: z.ZodType<Prisma.ForgotPasswordUpdateManyAndReturnArgs> = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), data: ForgotPasswordUpdateManyMutationInputObjectSchema, where: ForgotPasswordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordUpdateManyAndReturnArgs>;

export const ForgotPasswordUpdateManyAndReturnZodSchema = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), data: ForgotPasswordUpdateManyMutationInputObjectSchema, where: ForgotPasswordWhereInputObjectSchema.optional() }).strict();