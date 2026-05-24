import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutSmart_deviceInputObjectSchema as SolveUpdateWithoutSmart_deviceInputObjectSchema } from './SolveUpdateWithoutSmart_deviceInput.schema';
import { SolveUncheckedUpdateWithoutSmart_deviceInputObjectSchema as SolveUncheckedUpdateWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedUpdateWithoutSmart_deviceInput.schema';
import { SolveCreateWithoutSmart_deviceInputObjectSchema as SolveCreateWithoutSmart_deviceInputObjectSchema } from './SolveCreateWithoutSmart_deviceInput.schema';
import { SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema as SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedCreateWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveUpdateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSmart_deviceInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema)])
}).strict();
export const SolveUpsertWithWhereUniqueWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutSmart_deviceInput>;
export const SolveUpsertWithWhereUniqueWithoutSmart_deviceInputObjectZodSchema = makeSchema();
