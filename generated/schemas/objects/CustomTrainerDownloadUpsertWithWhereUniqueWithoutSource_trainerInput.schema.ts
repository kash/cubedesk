import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUpdateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInput>;
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutSource_trainerInputObjectZodSchema = makeSchema();
