import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_2InputObjectSchema as SolveCreateWithoutTop_average_2InputObjectSchema } from './SolveCreateWithoutTop_average_2Input.schema';
import { SolveUncheckedCreateWithoutTop_average_2InputObjectSchema as SolveUncheckedCreateWithoutTop_average_2InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_2Input.schema';
import { SolveCreateOrConnectWithoutTop_average_2InputObjectSchema as SolveCreateOrConnectWithoutTop_average_2InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_2Input.schema';
import { SolveUpsertWithoutTop_average_2InputObjectSchema as SolveUpsertWithoutTop_average_2InputObjectSchema } from './SolveUpsertWithoutTop_average_2Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutTop_average_2InputObjectSchema as SolveUpdateToOneWithWhereWithoutTop_average_2InputObjectSchema } from './SolveUpdateToOneWithWhereWithoutTop_average_2Input.schema';
import { SolveUpdateWithoutTop_average_2InputObjectSchema as SolveUpdateWithoutTop_average_2InputObjectSchema } from './SolveUpdateWithoutTop_average_2Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_2Input.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_2InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_2InputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutTop_average_2InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUpdateWithoutTop_average_2InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_2InputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutTop_average_2NestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_2NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_2NestedInput>;
export const SolveUpdateOneRequiredWithoutTop_average_2NestedInputObjectZodSchema = makeSchema();
