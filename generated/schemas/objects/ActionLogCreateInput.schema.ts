import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutAction_logInputObjectSchema as UserAccountCreateNestedOneWithoutAction_logInputObjectSchema } from './UserAccountCreateNestedOneWithoutAction_logInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  action_type: z.string(),
  action_details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutAction_logInputObjectSchema).optional()
}).strict();
export const ActionLogCreateInputObjectSchema: z.ZodType<Prisma.ActionLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogCreateInput>;
export const ActionLogCreateInputObjectZodSchema = makeSchema();
