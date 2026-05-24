import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema';
import { CustomTrainerDownloadUpdateManyMutationInputObjectSchema as CustomTrainerDownloadUpdateManyMutationInputObjectSchema } from './CustomTrainerDownloadUpdateManyMutationInput.schema';
import { CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerInputObjectSchema as CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateManyWithoutNew_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInput>;
export const CustomTrainerDownloadUpdateManyWithWhereWithoutNew_trainerInputObjectZodSchema = makeSchema();
