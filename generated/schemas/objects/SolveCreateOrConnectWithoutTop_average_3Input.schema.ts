import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutTop_average_3InputObjectSchema as SolveCreateWithoutTop_average_3InputObjectSchema } from './SolveCreateWithoutTop_average_3Input.schema';
import { SolveUncheckedCreateWithoutTop_average_3InputObjectSchema as SolveUncheckedCreateWithoutTop_average_3InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_3Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_3InputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutTop_average_3InputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_3Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_3Input>;
export const SolveCreateOrConnectWithoutTop_average_3InputObjectZodSchema = makeSchema();
