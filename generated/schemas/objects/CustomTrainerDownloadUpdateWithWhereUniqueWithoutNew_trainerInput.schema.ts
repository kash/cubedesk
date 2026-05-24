import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUpdateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutNew_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInput>;
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutNew_trainerInputObjectZodSchema = makeSchema();
