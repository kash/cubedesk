import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutTop_average_4InputObjectSchema as SolveUpdateWithoutTop_average_4InputObjectSchema } from './SolveUpdateWithoutTop_average_4Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_4Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutTop_average_4InputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_4Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_average_4Input>;
export const SolveUpdateToOneWithWhereWithoutTop_average_4InputObjectZodSchema = makeSchema();
