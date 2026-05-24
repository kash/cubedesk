import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectSchema as CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectSchema } from './CustomTrainerDownloadCreateManyNew_trainerInputEnvelope.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema).array(), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInput>;
export const CustomTrainerDownloadUncheckedCreateNestedManyWithoutNew_trainerInputObjectZodSchema = makeSchema();
