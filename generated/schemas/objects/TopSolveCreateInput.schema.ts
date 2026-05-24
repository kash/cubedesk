import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedOneWithoutTop_solveInputObjectSchema as SolveCreateNestedOneWithoutTop_solveInputObjectSchema } from './SolveCreateNestedOneWithoutTop_solveInput.schema';
import { UserAccountCreateNestedOneWithoutTop_solvesInputObjectSchema as UserAccountCreateNestedOneWithoutTop_solvesInputObjectSchema } from './UserAccountCreateNestedOneWithoutTop_solvesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  time: z.number(),
  cube_type: z.string(),
  created_at: z.coerce.date().optional(),
  solve: z.lazy(() => SolveCreateNestedOneWithoutTop_solveInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutTop_solvesInputObjectSchema)
}).strict();
export const TopSolveCreateInputObjectSchema: z.ZodType<Prisma.TopSolveCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateInput>;
export const TopSolveCreateInputObjectZodSchema = makeSchema();
