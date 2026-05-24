import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereInputObjectSchema as CustomTrainerDownloadWhereInputObjectSchema } from './CustomTrainerDownloadWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerCountOutputTypeCountDownloadOfArgsObjectSchema = makeSchema();
export const CustomTrainerCountOutputTypeCountDownloadOfArgsObjectZodSchema = makeSchema();
