import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCountOutputTypeCountCopiesArgsObjectSchema as CustomTrainerCountOutputTypeCountCopiesArgsObjectSchema } from './CustomTrainerCountOutputTypeCountCopiesArgs.schema';
import { CustomTrainerCountOutputTypeCountDownloadOfArgsObjectSchema as CustomTrainerCountOutputTypeCountDownloadOfArgsObjectSchema } from './CustomTrainerCountOutputTypeCountDownloadOfArgs.schema';
import { CustomTrainerCountOutputTypeCountDownloadsArgsObjectSchema as CustomTrainerCountOutputTypeCountDownloadsArgsObjectSchema } from './CustomTrainerCountOutputTypeCountDownloadsArgs.schema';
import { CustomTrainerCountOutputTypeCountLikesArgsObjectSchema as CustomTrainerCountOutputTypeCountLikesArgsObjectSchema } from './CustomTrainerCountOutputTypeCountLikesArgs.schema'

const makeSchema = () => z.object({
  copies: z.union([z.boolean(), z.lazy(() => CustomTrainerCountOutputTypeCountCopiesArgsObjectSchema)]).optional(),
  download_of: z.union([z.boolean(), z.lazy(() => CustomTrainerCountOutputTypeCountDownloadOfArgsObjectSchema)]).optional(),
  downloads: z.union([z.boolean(), z.lazy(() => CustomTrainerCountOutputTypeCountDownloadsArgsObjectSchema)]).optional(),
  likes: z.union([z.boolean(), z.lazy(() => CustomTrainerCountOutputTypeCountLikesArgsObjectSchema)]).optional()
}).strict();
export const CustomTrainerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CustomTrainerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCountOutputTypeSelect>;
export const CustomTrainerCountOutputTypeSelectObjectZodSchema = makeSchema();
