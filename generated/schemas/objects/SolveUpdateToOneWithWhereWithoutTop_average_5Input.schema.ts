import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutTop_average_5InputObjectSchema as SolveUpdateWithoutTop_average_5InputObjectSchema } from './SolveUpdateWithoutTop_average_5Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_5Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutTop_average_5InputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_5Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_5Input>;
export const SolveUpdateToOneWithWhereWithoutTop_average_5InputObjectZodSchema = makeSchema();
