import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_average_4InputObjectSchema as SolveCreateWithoutTop_average_4InputObjectSchema } from './SolveCreateWithoutTop_average_4Input.schema';
import { SolveUncheckedCreateWithoutTop_average_4InputObjectSchema as SolveUncheckedCreateWithoutTop_average_4InputObjectSchema } from './SolveUncheckedCreateWithoutTop_average_4Input.schema';
import { SolveCreateOrConnectWithoutTop_average_4InputObjectSchema as SolveCreateOrConnectWithoutTop_average_4InputObjectSchema } from './SolveCreateOrConnectWithoutTop_average_4Input.schema';
import { SolveUpsertWithoutTop_average_4InputObjectSchema as SolveUpsertWithoutTop_average_4InputObjectSchema } from './SolveUpsertWithoutTop_average_4Input.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutTop_average_4InputObjectSchema as SolveUpdateToOneWithWhereWithoutTop_average_4InputObjectSchema } from './SolveUpdateToOneWithWhereWithoutTop_average_4Input.schema';
import { SolveUpdateWithoutTop_average_4InputObjectSchema as SolveUpdateWithoutTop_average_4InputObjectSchema } from './SolveUpdateWithoutTop_average_4Input.schema';
import { SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema as SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema } from './SolveUncheckedUpdateWithoutTop_average_4Input.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_average_4InputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_average_4InputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutTop_average_4InputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUpdateWithoutTop_average_4InputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_average_4InputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutTop_average_4NestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_4NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_average_4NestedInput>;
export const SolveUpdateOneRequiredWithoutTop_average_4NestedInputObjectZodSchema = makeSchema();
