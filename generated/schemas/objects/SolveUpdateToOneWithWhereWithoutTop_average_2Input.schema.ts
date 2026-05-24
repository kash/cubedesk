import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutTop_average_2InputObjectSchema as SolveUpdateWithoutTop_average_2InputObjectSchema } from './SolveUpdateWithoutTop_average_2Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_2Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutTop_average_2InputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_2Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_2Input>;
export const SolveUpdateToOneWithWhereWithoutTop_average_2InputObjectZodSchema = makeSchema();
