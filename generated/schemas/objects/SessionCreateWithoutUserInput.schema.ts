import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedManyWithoutSessionInputObjectSchema as SolveCreateNestedManyWithoutSessionInputObjectSchema } from './SolveCreateNestedManyWithoutSessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  order: z.number().int().optional(),
  solves: z.lazy(() => SolveCreateNestedManyWithoutSessionInputObjectSchema).optional()
}).strict();
export const SessionCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateWithoutUserInput>;
export const SessionCreateWithoutUserInputObjectZodSchema = makeSchema();
