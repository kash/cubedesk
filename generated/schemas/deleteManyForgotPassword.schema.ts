import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordWhereInputObjectSchema as ForgotPasswordWhereInputObjectSchema } from './objects/ForgotPasswordWhereInput.schema';

export const ForgotPasswordDeleteManySchema: z.ZodType<Prisma.ForgotPasswordDeleteManyArgs> = z.object({ where: ForgotPasswordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordDeleteManyArgs>;

export const ForgotPasswordDeleteManyZodSchema = z.object({ where: ForgotPasswordWhereInputObjectSchema.optional() }).strict();