import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_3InputObjectSchema as SolveCreateWithoutTop_average_3InputObjectSchema } from './SolveCreateWithoutTop_average_3Input.schema';
import { SolveUncheckedCreateWithoutTop_average_3InputObjectSchema as SolveUncheckedCreateWithoutTop_average_3InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_3Input.schema';
import { SolveCreateOrConnectWithoutTop_average_3InputObjectSchema as SolveCreateOrConnectWithoutTop_average_3InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_3Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_3InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_3InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutTop_average_3InputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_3Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_3Input>;
export const SolveCreateNestedOneWithoutTop_average_3InputObjectZodSchema = makeSchema();
