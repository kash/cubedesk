import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadCreateWithoutUserInputObjectSchema as CustomTrainerDownloadCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadCreateWithoutUserInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateOrConnectWithoutUserInput>;
export const CustomTrainerDownloadCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
