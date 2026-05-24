import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutCreatorInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutCreatorInput.schema';
import { CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadCreateWithoutCreatorInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutCreatorInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInput>;
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutCreatorInputObjectZodSchema = makeSchema();
