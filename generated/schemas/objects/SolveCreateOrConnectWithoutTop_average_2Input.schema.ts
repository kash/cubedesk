import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutTop_average_2InputObjectSchema as SolveCreateWithoutTop_average_2InputObjectSchema } from './SolveCreateWithoutTop_average_2Input.schema';
import { SolveUncheckedCreateWithoutTop_average_2InputObjectSchema as SolveUncheckedCreateWithoutTop_average_2InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_2Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_2InputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutTop_average_2InputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_2Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_2Input>;
export const SolveCreateOrConnectWithoutTop_average_2InputObjectZodSchema = makeSchema();
