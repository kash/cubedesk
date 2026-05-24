import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_1InputObjectSchema as SolveCreateWithoutTop_average_1InputObjectSchema } from './SolveCreateWithoutTop_average_1Input.schema';
import { SolveUncheckedCreateWithoutTop_average_1InputObjectSchema as SolveUncheckedCreateWithoutTop_average_1InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_1Input.schema';
import { SolveCreateOrConnectWithoutTop_average_1InputObjectSchema as SolveCreateOrConnectWithoutTop_average_1InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_1Input.schema';
import { SolveUpsertWithoutTop_average_1InputObjectSchema as SolveUpsertWithoutTop_average_1InputObjectSchema } from './SolveUpsertWithoutTop_average_1Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutTop_average_1InputObjectSchema as SolveUpdateToOneWithWhereWithoutTop_average_1InputObjectSchema } from './SolveUpdateToOneWithWhereWithoutTop_average_1Input.schema';
import { SolveUpdateWithoutTop_average_1InputObjectSchema as SolveUpdateWithoutTop_average_1InputObjectSchema } from './SolveUpdateWithoutTop_average_1Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_1InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_1InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_1Input.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_1InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_1InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_1InputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutTop_average_1InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutTop_average_1InputObjectSchema), z.lazy(() => SolveUpdateWithoutTop_average_1InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_1InputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutTop_average_1NestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_1NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_1NestedInput>;
export const SolveUpdateOneRequiredWithoutTop_average_1NestedInputObjectZodSchema = makeSchema();
