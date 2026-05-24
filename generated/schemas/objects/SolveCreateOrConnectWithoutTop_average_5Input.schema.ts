import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutTop_average_5InputObjectSchema as SolveCreateWithoutTop_average_5InputObjectSchema } from './SolveCreateWithoutTop_average_5Input.schema';
import { SolveUncheckedCreateWithoutTop_average_5InputObjectSchema as SolveUncheckedCreateWithoutTop_average_5InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_5Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_5InputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutTop_average_5InputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_5Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_5Input>;
export const SolveCreateOrConnectWithoutTop_average_5InputObjectZodSchema = makeSchema();
