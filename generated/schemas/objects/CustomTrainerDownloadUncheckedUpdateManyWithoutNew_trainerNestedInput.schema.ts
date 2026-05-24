import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManyNew_trainerInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInput>;
export const CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerNestedInputObjectZodSchema = makeSchema();
