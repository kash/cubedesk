import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutSmart_deviceInputObjectSchema as SolveUpdateWithoutSmart_deviceInputObjectSchema } from './SolveUpdateWithoutSmart_deviceInput.schema';
import { SolveUncheckedUpdateWithoutSmart_deviceInputObjectSchema as SolveUncheckedUpdateWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedUpdateWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSmart_deviceInputObjectSchema)])
}).strict();
export const SolveUpdateWithWhereUniqueWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutSmart_deviceInput>;
export const SolveUpdateWithWhereUniqueWithoutSmart_deviceInputObjectZodSchema = makeSchema();
