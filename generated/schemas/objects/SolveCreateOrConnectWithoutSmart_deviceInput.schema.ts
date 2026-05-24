import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutSmart_deviceInputObjectSchema as SolveCreateWithoutSmart_deviceInputObjectSchema } from './SolveCreateWithoutSmart_deviceInput.schema';
import { SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema as SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedCreateWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutSmart_deviceInput>;
export const SolveCreateOrConnectWithoutSmart_deviceInputObjectZodSchema = makeSchema();
