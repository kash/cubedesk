import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_3InputObjectSchema as SolveCreateWithoutTop_average_3InputObjectSchema } from './SolveCreateWithoutTop_average_3Input.schema';
import { SolveUncheckedCreateWithoutTop_average_3InputObjectSchema as SolveUncheckedCreateWithoutTop_average_3InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_3Input.schema';
import { SolveCreateOrConnectWithoutTop_average_3InputObjectSchema as SolveCreateOrConnectWithoutTop_average_3InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_3Input.schema';
import { SolveUpsertWithoutTop_average_3InputObjectSchema as SolveUpsertWithoutTop_average_3InputObjectSchema } from './SolveUpsertWithoutTop_average_3Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutTop_average_3InputObjectSchema as SolveUpdateToOneWithWhereWithoutTop_average_3InputObjectSchema } from './SolveUpdateToOneWithWhereWithoutTop_average_3Input.schema';
import { SolveUpdateWithoutTop_average_3InputObjectSchema as SolveUpdateWithoutTop_average_3InputObjectSchema } from './SolveUpdateWithoutTop_average_3Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_3Input.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_3InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_3InputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutTop_average_3InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUpdateWithoutTop_average_3InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_3InputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutTop_average_3NestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_3NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_3NestedInput>;
export const SolveUpdateOneRequiredWithoutTop_average_3NestedInputObjectZodSchema = makeSchema();
