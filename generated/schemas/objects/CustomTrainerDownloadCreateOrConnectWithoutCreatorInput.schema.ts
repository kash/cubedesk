import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadCreateWithoutCreatorInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutCreatorInput>;
export const CustomTrainerDownloadCreateOrConnectWithoutCreatorInputObjectZodSchema = makeSchema();
