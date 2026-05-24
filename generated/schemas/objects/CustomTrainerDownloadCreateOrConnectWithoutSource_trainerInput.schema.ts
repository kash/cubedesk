import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutSource_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutSource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInput>;
export const CustomTrainerDownloadCreateOrConnectWithoutSource_trainerInputObjectZodSchema = makeSchema();
