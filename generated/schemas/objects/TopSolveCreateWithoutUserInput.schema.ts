import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedOneWithoutTop_solveInputObjectSchema as SolveCreateNestedOneWithoutTop_solveInputObjectSchema } from './SolveCreateNestedOneWithoutTop_solveInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  time: z.number(),
  cube_type: z.string(),
  created_at: z.coerce.date().optional(),
  solve: z.lazy(() => SolveCreateNestedOneWithoutTop_solveInputObjectSchema)
}).strict();
export const TopSolveCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TopSolveCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateWithoutUserInput>;
export const TopSolveCreateWithoutUserInputObjectZodSchema = makeSchema();
