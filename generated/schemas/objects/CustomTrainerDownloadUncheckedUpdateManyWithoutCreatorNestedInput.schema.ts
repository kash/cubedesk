import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadCreateWithoutCreatorInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutCreatorInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutCreatorInput.schema';
import { CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInputObjectSchema as CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManyCreatorInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInputObjectSchema as CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInputObjectSchema as CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInput.schema';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorNestedInput>;
export const CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorNestedInputObjectZodSchema = makeSchema();
