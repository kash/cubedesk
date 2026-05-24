import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_5InputObjectSchema as SolveCreateWithoutTop_average_5InputObjectSchema } from './SolveCreateWithoutTop_average_5Input.schema';
import { SolveUncheckedCreateWithoutTop_average_5InputObjectSchema as SolveUncheckedCreateWithoutTop_average_5InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_5Input.schema';
import { SolveCreateOrConnectWithoutTop_average_5InputObjectSchema as SolveCreateOrConnectWithoutTop_average_5InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_5Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_5InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_5InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutTop_average_5InputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_5Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_5Input>;
export const SolveCreateNestedOneWithoutTop_average_5InputObjectZodSchema = makeSchema();
