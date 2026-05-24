import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSmart_deviceInputObjectSchema as SolveCreateWithoutSmart_deviceInputObjectSchema } from './SolveCreateWithoutSmart_deviceInput.schema';
import { SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema as SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedCreateWithoutSmart_deviceInput.schema';
import { SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema as SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema } from './SolveCreateOrConnectWithoutSmart_deviceInput.schema';
import { SolveUpsertWithWhereUniqueWithoutSmart_deviceInputObjectSchema as SolveUpsertWithWhereUniqueWithoutSmart_deviceInputObjectSchema } from './SolveUpsertWithWhereUniqueWithoutSmart_deviceInput.schema';
import { SolveCreateManySmart_deviceInputEnvelopeObjectSchema as SolveCreateManySmart_deviceInputEnvelopeObjectSchema } from './SolveCreateManySmart_deviceInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithWhereUniqueWithoutSmart_deviceInputObjectSchema as SolveUpdateWithWhereUniqueWithoutSmart_deviceInputObjectSchema } from './SolveUpdateWithWhereUniqueWithoutSmart_deviceInput.schema';
import { SolveUpdateManyWithWhereWithoutSmart_deviceInputObjectSchema as SolveUpdateManyWithWhereWithoutSmart_deviceInputObjectSchema } from './SolveUpdateManyWithWhereWithoutSmart_deviceInput.schema';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveCreateWithoutSmart_deviceInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSmart_deviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutSmart_deviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveUpsertWithWhereUniqueWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUpsertWithWhereUniqueWithoutSmart_deviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManySmart_deviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveUpdateWithWhereUniqueWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUpdateWithWhereUniqueWithoutSmart_deviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveUpdateManyWithWhereWithoutSmart_deviceInputObjectSchema), z.lazy(() => SolveUpdateManyWithWhereWithoutSmart_deviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveUncheckedUpdateManyWithoutSmart_deviceNestedInputObjectSchema: z.ZodType<Prisma.SolveUncheckedUpdateManyWithoutSmart_deviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUncheckedUpdateManyWithoutSmart_deviceNestedInput>;
export const SolveUncheckedUpdateManyWithoutSmart_deviceNestedInputObjectZodSchema = makeSchema();
