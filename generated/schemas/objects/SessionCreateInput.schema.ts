import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutSessionsInputObjectSchema as UserAccountCreateNestedOneWithoutSessionsInputObjectSchema } from './UserAccountCreateNestedOneWithoutSessionsInput.schema';
import { SolveCreateNestedManyWithoutSessionInputObjectSchema as SolveCreateNestedManyWithoutSessionInputObjectSchema } from './SolveCreateNestedManyWithoutSessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  order: z.number().int().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutSessionsInputObjectSchema),
  solves: z.lazy(() => SolveCreateNestedManyWithoutSessionInputObjectSchema).optional()
}).strict();
export const SessionCreateInputObjectSchema: z.ZodType<Prisma.SessionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateInput>;
export const SessionCreateInputObjectZodSchema = makeSchema();
