import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUncheckedCreateNestedManyWithoutSessionInputObjectSchema as SolveUncheckedCreateNestedManyWithoutSessionInputObjectSchema } from './SolveUncheckedCreateNestedManyWithoutSessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  order: z.number().int().optional(),
  solves: z.lazy(() => SolveUncheckedCreateNestedManyWithoutSessionInputObjectSchema).optional()
}).strict();
export const SessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput>;
export const SessionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
