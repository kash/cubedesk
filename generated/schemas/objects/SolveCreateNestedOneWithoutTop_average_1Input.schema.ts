import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_1InputObjectSchema as SolveCreateWithoutTop_average_1InputObjectSchema } from './SolveCreateWithoutTop_average_1Input.schema';
import { SolveUncheckedCreateWithoutTop_average_1InputObjectSchema as SolveUncheckedCreateWithoutTop_average_1InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_1Input.schema';
import { SolveCreateOrConnectWithoutTop_average_1InputObjectSchema as SolveCreateOrConnectWithoutTop_average_1InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_1Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_1InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_1InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_1InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutTop_average_1InputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_1Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_1Input>;
export const SolveCreateNestedOneWithoutTop_average_1InputObjectZodSchema = makeSchema();
