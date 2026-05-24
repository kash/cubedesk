import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordUpdateManyMutationInputObjectSchema as ForgotPasswordUpdateManyMutationInputObjectSchema } from './objects/ForgotPasswordUpdateManyMutationInput.schema';
import { ForgotPasswordWhereInputObjectSchema as ForgotPasswordWhereInputObjectSchema } from './objects/ForgotPasswordWhereInput.schema';

export const ForgotPasswordUpdateManySchema: z.ZodType<Prisma.ForgotPasswordUpdateManyArgs> = z.object({ data: ForgotPasswordUpdateManyMutationInputObjectSchema, where: ForgotPasswordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordUpdateManyArgs>;

export const ForgotPasswordUpdateManyZodSchema = z.object({ data: ForgotPasswordUpdateManyMutationInputObjectSchema, where: ForgotPasswordWhereInputObjectSchema.optional() }).strict();