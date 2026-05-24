import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManySource_trainerInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInput>;
export const CustomTrainerDownloadUncheckedCreateNestedManyWithoutSource_trainerInputObjectZodSchema = makeSchema();
