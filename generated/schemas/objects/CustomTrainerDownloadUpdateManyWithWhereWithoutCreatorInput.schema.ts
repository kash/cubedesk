import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema';
import { CustomTrainerDownloadUpdateManyMutationInputObjectSchema as CustomTrainerDownloadUpdateManyMutationInputObjectSchema } from './CustomTrainerDownloadUpdateManyMutationInput.schema';
import { CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateManyWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInput>;
export const CustomTrainerDownloadUpdateManyWithWhereWithoutCreatorInputObjectZodSchema = makeSchema();
