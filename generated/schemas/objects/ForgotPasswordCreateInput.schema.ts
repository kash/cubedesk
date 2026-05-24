import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutForgot_passwordInputObjectSchema as UserAccountCreateNestedOneWithoutForgot_passwordInputObjectSchema } from './UserAccountCreateNestedOneWithoutForgot_passwordInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  claimed: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutForgot_passwordInputObjectSchema)
}).strict();
export const ForgotPasswordCreateInputObjectSchema: z.ZodType<Prisma.ForgotPasswordCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordCreateInput>;
export const ForgotPasswordCreateInputObjectZodSchema = makeSchema();
