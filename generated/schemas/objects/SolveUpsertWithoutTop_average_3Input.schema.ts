import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUpdateWithoutTop_average_3InputObjectSchema as SolveUpdateWithoutTop_average_3InputObjectSchema } from './SolveUpdateWithoutTop_average_3Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_3Input.schema';
import { SolveCreateWithoutTop_average_3InputObjectSchema as SolveCreateWithoutTop_average_3InputObjectSchema } from './SolveCreateWithoutTop_average_3Input.schema';
import { SolveUncheckedCreateWithoutTop_average_3InputObjectSchema as SolveUncheckedCreateWithoutTop_average_3InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_3Input.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SolveUpdateWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_3InputObjectSchema)]),
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveUpsertWithoutTop_average_3InputObjectSchema: z.ZodType<Prisma.SolveUpsertWithoutTop_average_3Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithoutTop_average_3Input>;
export const SolveUpsertWithoutTop_average_3InputObjectZodSchema = makeSchema();
