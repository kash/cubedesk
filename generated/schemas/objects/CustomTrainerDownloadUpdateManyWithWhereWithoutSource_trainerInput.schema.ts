import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema';
import { CustomTrainerDownloadUpdateManyMutationInputObjectSchema as CustomTrainerDownloadUpdateManyMutationInputObjectSchema } from './CustomTrainerDownloadUpdateManyMutationInput.schema';
import { CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerInputObjectSchema as CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateManyWithoutSource_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInput>;
export const CustomTrainerDownloadUpdateManyWithWhereWithoutSource_trainerInputObjectZodSchema = makeSchema();
