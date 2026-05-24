import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  claimed: z.boolean().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const ForgotPasswordCreateManyUserInputObjectSchema: z.ZodType<Prisma.ForgotPasswordCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordCreateManyUserInput>;
export const ForgotPasswordCreateManyUserInputObjectZodSchema = makeSchema();
