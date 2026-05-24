import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUpdateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutSource_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInput>;
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutSource_trainerInputObjectZodSchema = makeSchema();
