import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadUpdateWithoutUserInputObjectSchema as CustomTrainerDownloadUpdateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUpdateWithoutUserInput.schema';
import { CustomTrainerDownloadUncheckedUpdateWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedUpdateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateWithoutUserInput.schema';
import { CustomTrainerDownloadCreateWithoutUserInputObjectSchema as CustomTrainerDownloadCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadCreateWithoutUserInput.schema';
import { CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerDownloadUpdateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerDownloadCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInput>;
export const CustomTrainerDownloadUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
