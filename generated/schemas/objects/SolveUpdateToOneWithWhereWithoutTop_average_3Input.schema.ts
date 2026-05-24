import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutTop_average_3InputObjectSchema as SolveUpdateWithoutTop_average_3InputObjectSchema } from './SolveUpdateWithoutTop_average_3Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_3Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutTop_average_3InputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_3Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_3Input>;
export const SolveUpdateToOneWithWhereWithoutTop_average_3InputObjectZodSchema = makeSchema();
