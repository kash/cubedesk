import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutTop_solvesInputObjectSchema as UserAccountCreateNestedOneWithoutTop_solvesInputObjectSchema } from './UserAccountCreateNestedOneWithoutTop_solvesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  time: z.number(),
  cube_type: z.string(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutTop_solvesInputObjectSchema)
}).strict();
export const TopSolveCreateWithoutSolveInputObjectSchema: z.ZodType<Prisma.TopSolveCreateWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateWithoutSolveInput>;
export const TopSolveCreateWithoutSolveInputObjectZodSchema = makeSchema();
