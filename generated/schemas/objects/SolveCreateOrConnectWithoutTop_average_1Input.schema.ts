import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutTop_average_1InputObjectSchema as SolveCreateWithoutTop_average_1InputObjectSchema } from './SolveCreateWithoutTop_average_1Input.schema';
import { SolveUncheckedCreateWithoutTop_average_1InputObjectSchema as SolveUncheckedCreateWithoutTop_average_1InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_1Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_1InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_1InputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutTop_average_1InputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_1Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_1Input>;
export const SolveCreateOrConnectWithoutTop_average_1InputObjectZodSchema = makeSchema();
