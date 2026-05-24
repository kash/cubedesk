import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_2InputObjectSchema as SolveCreateWithoutTop_average_2InputObjectSchema } from './SolveCreateWithoutTop_average_2Input.schema';
import { SolveUncheckedCreateWithoutTop_average_2InputObjectSchema as SolveUncheckedCreateWithoutTop_average_2InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_2Input.schema';
import { SolveCreateOrConnectWithoutTop_average_2InputObjectSchema as SolveCreateOrConnectWithoutTop_average_2InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_2Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_2InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_2InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutTop_average_2InputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_2Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_2Input>;
export const SolveCreateNestedOneWithoutTop_average_2InputObjectZodSchema = makeSchema();
