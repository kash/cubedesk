import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutCreatorInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInput>;
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutCreatorInputObjectZodSchema = makeSchema();
