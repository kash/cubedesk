import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutUserInputObjectSchema as CustomTrainerDownloadUpdateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutUserInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInput>;
export const CustomTrainerDownloadUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
