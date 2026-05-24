import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateWithoutNew_trainerInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInput>;
export const CustomTrainerDownloadCreateOrConnectWithoutNew_trainerInputObjectZodSchema = makeSchema();
