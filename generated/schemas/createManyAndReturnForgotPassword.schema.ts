import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordSelectObjectSchema as ForgotPasswordSelectObjectSchema } from './objects/ForgotPasswordSelect.schema';
import { ForgotPasswordCreateManyInputObjectSchema as ForgotPasswordCreateManyInputObjectSchema } from './objects/ForgotPasswordCreateManyInput.schema';

export const ForgotPasswordCreateManyAndReturnSchema: z.ZodType<Prisma.ForgotPasswordCreateManyAndReturnArgs> = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), data: z.union([ ForgotPasswordCreateManyInputObjectSchema, z.array(ForgotPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordCreateManyAndReturnArgs>;

export const ForgotPasswordCreateManyAndReturnZodSchema = z.object({ select: ForgotPasswordSelectObjectSchema.optional(), data: z.union([ ForgotPasswordCreateManyInputObjectSchema, z.array(ForgotPasswordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();