import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutTop_average_4InputObjectSchema as SolveCreateWithoutTop_average_4InputObjectSchema } from './SolveCreateWithoutTop_average_4Input.schema';
import { SolveUncheckedCreateWithoutTop_average_4InputObjectSchema as SolveUncheckedCreateWithoutTop_average_4InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_4Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_4InputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutTop_average_4InputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_4Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_average_4Input>;
export const SolveCreateOrConnectWithoutTop_average_4InputObjectZodSchema = makeSchema();
