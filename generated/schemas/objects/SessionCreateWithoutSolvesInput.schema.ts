import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutSessionsInputObjectSchema as UserAccountCreateNestedOneWithoutSessionsInputObjectSchema } from './UserAccountCreateNestedOneWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  order: z.number().int().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict();
export const SessionCreateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateWithoutSolvesInput>;
export const SessionCreateWithoutSolvesInputObjectZodSchema = makeSchema();
