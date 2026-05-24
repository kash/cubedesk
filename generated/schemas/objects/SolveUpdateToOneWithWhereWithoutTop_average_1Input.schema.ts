import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutTop_average_1InputObjectSchema as SolveUpdateWithoutTop_average_1InputObjectSchema } from './SolveUpdateWithoutTop_average_1Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_1InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_1InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_1Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutTop_average_1InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_1InputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutTop_average_1InputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_1Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_1Input>;
export const SolveUpdateToOneWithWhereWithoutTop_average_1InputObjectZodSchema = makeSchema();
