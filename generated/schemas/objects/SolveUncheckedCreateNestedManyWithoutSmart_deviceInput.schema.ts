import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSmart_deviceInputObjectSchema as SolveCreateWithoutSmart_deviceInputObjectSchema } from './SolveCreateWithoutSmart_deviceInput.schema';
import { SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema as SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedCreateWithoutSmart_deviceInput.schema';
import { SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema as SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema } from './SolveCreateOrConnectWithoutSmart_deviceInput.schema';
import { SolveCreateManySmart_deviceInputEnvelopeObjectSchema as SolveCreateManySmart_deviceInputEnvelopeObjectSchema } from './SolveCreateManySmart_deviceInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveCreateWithoutSmart_deviceInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManySmart_deviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveUncheckedCreateNestedManyWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.SolveUncheckedCreateNestedManyWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUncheckedCreateNestedManyWithoutSmart_deviceInput>;
export const SolveUncheckedCreateNestedManyWithoutSmart_deviceInputObjectZodSchema = makeSchema();
