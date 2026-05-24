import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUpdateWithoutTop_average_2InputObjectSchema as SolveUpdateWithoutTop_average_2InputObjectSchema } from './SolveUpdateWithoutTop_average_2Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_2Input.schema';
import { SolveCreateWithoutTop_average_2InputObjectSchema as SolveCreateWithoutTop_average_2InputObjectSchema } from './SolveCreateWithoutTop_average_2Input.schema';
import { SolveUncheckedCreateWithoutTop_average_2InputObjectSchema as SolveUncheckedCreateWithoutTop_average_2InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_2Input.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SolveUpdateWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_2InputObjectSchema)]),
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveUpsertWithoutTop_average_2InputObjectSchema: z.ZodType<Prisma.SolveUpsertWithoutTop_average_2Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithoutTop_average_2Input>;
export const SolveUpsertWithoutTop_average_2InputObjectZodSchema = makeSchema();
