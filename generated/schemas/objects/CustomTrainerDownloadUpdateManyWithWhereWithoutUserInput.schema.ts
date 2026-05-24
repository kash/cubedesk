import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadScalarWhereInputObjectSchema as CustomTrainerDownloadScalarWhereInputObjectSchema } from './CustomTrainerDownloadScalarWhereInput.schema';
import { CustomTrainerDownloadUpdateManyMutationInputObjectSchema as CustomTrainerDownloadUpdateManyMutationInputObjectSchema } from './CustomTrainerDownloadUpdateManyMutationInput.schema';
import { CustomTrainerDownloadUncheckedUpdateManyWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedUpdateManyWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerDownloadUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerDownloadUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerDownloadUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyWithWhereWithoutUserInput>;
export const CustomTrainerDownloadUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
