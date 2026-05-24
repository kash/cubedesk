import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportCreateWithoutReported_userInputObjectSchema as ReportCreateWithoutReported_userInputObjectSchema } from './ReportCreateWithoutReported_userInput.schema';
import { ReportUncheckedCreateWithoutReported_userInputObjectSchema as ReportUncheckedCreateWithoutReported_userInputObjectSchema } from './ReportUncheckedCreateWithoutReported_userInput.schema';
import { ReportCreateOrConnectWithoutReported_userInputObjectSchema as ReportCreateOrConnectWithoutReported_userInputObjectSchema } from './ReportCreateOrConnectWithoutReported_userInput.schema';
import { ReportUpsertWithWhereUniqueWithoutReported_userInputObjectSchema as ReportUpsertWithWhereUniqueWithoutReported_userInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutReported_userInput.schema';
import { ReportCreateManyReported_userInputEnvelopeObjectSchema as ReportCreateManyReported_userInputEnvelopeObjectSchema } from './ReportCreateManyReported_userInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutReported_userInputObjectSchema as ReportUpdateWithWhereUniqueWithoutReported_userInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutReported_userInput.schema';
import { ReportUpdateManyWithWhereWithoutReported_userInputObjectSchema as ReportUpdateManyWithWhereWithoutReported_userInputObjectSchema } from './ReportUpdateManyWithWhereWithoutReported_userInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutReported_userInputObjectSchema), z.lazy(() => ReportCreateWithoutReported_userInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutReported_userInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReported_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutReported_userInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutReported_userInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutReported_userInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutReported_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyReported_userInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutReported_userInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutReported_userInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutReported_userInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutReported_userInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutReported_userNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutReported_userNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutReported_userNestedInput>;
export const ReportUpdateManyWithoutReported_userNestedInputObjectZodSchema = makeSchema();
