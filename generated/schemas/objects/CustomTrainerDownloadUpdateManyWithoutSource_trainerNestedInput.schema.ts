import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManySource_trainerInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInput>;
export const CustomTrainerDownloadUpdateManyWithoutSource_trainerNestedInputObjectZodSchema = makeSchema();
