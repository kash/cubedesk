import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_4InputObjectSchema as SolveCreateWithoutTop_average_4InputObjectSchema } from './SolveCreateWithoutTop_average_4Input.schema';
import { SolveUncheckedCreateWithoutTop_average_4InputObjectSchema as SolveUncheckedCreateWithoutTop_average_4InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_4Input.schema';
import { SolveCreateOrConnectWithoutTop_average_4InputObjectSchema as SolveCreateOrConnectWithoutTop_average_4InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_4Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_4InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_4InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutTop_average_4InputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_4Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_average_4Input>;
export const SolveCreateNestedOneWithoutTop_average_4InputObjectZodSchema = makeSchema();
