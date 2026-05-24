import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUpdateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInput>;
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutNew_trainerInputObjectZodSchema = makeSchema();
