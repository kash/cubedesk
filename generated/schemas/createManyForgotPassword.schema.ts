import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordCreateManyInputObjectSchema as ForgotPasswordCreateManyInputObjectSchema } from './objects/ForgotPasswordCreateManyInput.schema';

export const ForgotPasswordCreateManySchema: z.ZodType<Prisma.ForgotPasswordCreateManyArgs> = z.object({ data: z.union([ ForgotPasswordCreateManyInputObjectSchema, z.array(ForgotPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordCreateManyArgs>;

export const ForgotPasswordCreateManyZodSchema = z.object({ data: z.union([ ForgotPasswordCreateManyInputObjectSchema, z.array(ForgotPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();