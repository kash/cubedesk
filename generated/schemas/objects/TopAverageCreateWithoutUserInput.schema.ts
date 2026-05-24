import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedOneWithoutTop_average_1InputObjectSchema as SolveCreateNestedOneWithoutTop_average_1InputObjectSchema } from './SolveCreateNestedOneWithoutTop_average_1Input.schema';
import { SolveCreateNestedOneWithoutTop_average_2InputObjectSchema as SolveCreateNestedOneWithoutTop_average_2InputObjectSchema } from './SolveCreateNestedOneWithoutTop_average_2Input.schema';
import { SolveCreateNestedOneWithoutTop_average_3InputObjectSchema as SolveCreateNestedOneWithoutTop_average_3InputObjectSchema } from './SolveCreateNestedOneWithoutTop_average_3Input.schema';
import { SolveCreateNestedOneWithoutTop_average_4InputObjectSchema as SolveCreateNestedOneWithoutTop_average_4InputObjectSchema } from './SolveCreateNestedOneWithoutTop_average_4Input.schema';
import { SolveCreateNestedOneWithoutTop_average_5InputObjectSchema as SolveCreateNestedOneWithoutTop_average_5InputObjectSchema } from './SolveCreateNestedOneWithoutTop_average_5Input.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  time: z.number(),
  cube_type: z.string(),
  created_at: z.coerce.date().optional(),
  solve_1: z.lazy(() => SolveCreateNestedOneWithoutTop_average_1InputObjectSchema),
  solve_2: z.lazy(() => SolveCreateNestedOneWithoutTop_average_2InputObjectSchema),
  solve_3: z.lazy(() => SolveCreateNestedOneWithoutTop_average_3InputObjectSchema),
  solve_4: z.lazy(() => SolveCreateNestedOneWithoutTop_average_4InputObjectSchema),
  solve_5: z.lazy(() => SolveCreateNestedOneWithoutTop_average_5InputObjectSchema)
}).strict();
export const TopAverageCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TopAverageCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateWithoutUserInput>;
export const TopAverageCreateWithoutUserInputObjectZodSchema = makeSchema();
