import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUpdateWithoutTop_average_4InputObjectSchema as SolveUpdateWithoutTop_average_4InputObjectSchema } from './SolveUpdateWithoutTop_average_4Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_4Input.schema';
import { SolveCreateWithoutTop_average_4InputObjectSchema as SolveCreateWithoutTop_average_4InputObjectSchema } from './SolveCreateWithoutTop_average_4Input.schema';
import { SolveUncheckedCreateWithoutTop_average_4InputObjectSchema as SolveUncheckedCreateWithoutTop_average_4InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_4Input.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SolveUpdateWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_4InputObjectSchema)]),
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveUpsertWithoutTop_average_4InputObjectSchema: z.ZodType<Prisma.SolveUpsertWithoutTop_average_4Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithoutTop_average_4Input>;
export const SolveUpsertWithoutTop_average_4InputObjectZodSchema = makeSchema();
