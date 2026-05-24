import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_5InputObjectSchema as SolveCreateWithoutTop_average_5InputObjectSchema } from './SolveCreateWithoutTop_average_5Input.schema';
import { SolveUncheckedCreateWithoutTop_average_5InputObjectSchema as SolveUncheckedCreateWithoutTop_average_5InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_5Input.schema';
import { SolveCreateOrConnectWithoutTop_average_5InputObjectSchema as SolveCreateOrConnectWithoutTop_average_5InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_5Input.schema';
import { SolveUpsertWithoutTop_average_5InputObjectSchema as SolveUpsertWithoutTop_average_5InputObjectSchema } from './SolveUpsertWithoutTop_average_5Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutTop_average_5InputObjectSchema as SolveUpdateToOneWithWhereWithoutTop_average_5InputObjectSchema } from './SolveUpdateToOneWithWhereWithoutTop_average_5Input.schema';
import { SolveUpdateWithoutTop_average_5InputObjectSchema as SolveUpdateWithoutTop_average_5InputObjectSchema } from './SolveUpdateWithoutTop_average_5Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_5Input.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_5InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_5InputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutTop_average_5InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUpdateWithoutTop_average_5InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_5InputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutTop_average_5NestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_5NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_5NestedInput>;
export const SolveUpdateOneRequiredWithoutTop_average_5NestedInputObjectZodSchema = makeSchema();
