import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUpdateWithoutTop_average_5InputObjectSchema as SolveUpdateWithoutTop_average_5InputObjectSchema } from './SolveUpdateWithoutTop_average_5Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_5Input.schema';
import { SolveCreateWithoutTop_average_5InputObjectSchema as SolveCreateWithoutTop_average_5InputObjectSchema } from './SolveCreateWithoutTop_average_5Input.schema';
import { SolveUncheckedCreateWithoutTop_average_5InputObjectSchema as SolveUncheckedCreateWithoutTop_average_5InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_5Input.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SolveUpdateWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_5InputObjectSchema)]),
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveUpsertWithoutTop_average_5InputObjectSchema: z.ZodType<Prisma.SolveUpsertWithoutTop_average_5Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithoutTop_average_5Input>;
export const SolveUpsertWithoutTop_average_5InputObjectZodSchema = makeSchema();
