import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutUserInputObjectSchema as CustomTrainerDownloadCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadCreateWithoutUserInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutUserInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutUserInput.schema';
import { CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInputObjectSchema as CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInput.schema';
import { CustomTrainerDownloadCreateManyUserInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManyUserInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManyUserInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInputObjectSchema as CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInput.schema';
import { CustomTrainerDownloadUpdateManyWithWhereWithoutUserInputObjectSchema as CustomTrainerDownloadUpdateManyWithWhereWithoutUserInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithWhereWithoutUserInput.schema';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithoutUserNestedInput>;
export const CustomTrainerDownloadUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
