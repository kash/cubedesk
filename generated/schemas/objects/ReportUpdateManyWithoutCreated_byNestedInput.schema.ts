import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportCreateWithoutCreated_byInputObjectSchema as ReportCreateWithoutCreated_byInputObjectSchema } from './ReportCreateWithoutCreated_byInput.schema';
import { ReportUncheckedCreateWithoutCreated_byInputObjectSchema as ReportUncheckedCreateWithoutCreated_byInputObjectSchema } from './ReportUncheckedCreateWithoutCreated_byInput.schema';
import { ReportCreateOrConnectWithoutCreated_byInputObjectSchema as ReportCreateOrConnectWithoutCreated_byInputObjectSchema } from './ReportCreateOrConnectWithoutCreated_byInput.schema';
import { ReportUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema as ReportUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { ReportCreateManyCreated_byInputEnvelopeObjectSchema as ReportCreateManyCreated_byInputEnvelopeObjectSchema } from './ReportCreateManyCreated_byInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema as ReportUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { ReportUpdateManyWithWhereWithoutCreated_byInputObjectSchema as ReportUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './ReportUpdateManyWithWhereWithoutCreated_byInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCreated_byInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCreated_byInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutCreated_byNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutCreated_byNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutCreated_byNestedInput>;
export const ReportUpdateManyWithoutCreated_byNestedInputObjectZodSchema = makeSchema();
