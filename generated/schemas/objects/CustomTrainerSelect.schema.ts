import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerArgsObjectSchema as CustomTrainerArgsObjectSchema } from './CustomTrainerArgs.schema';
import { CustomTrainerFindManySchema as CustomTrainerFindManySchema } from '../findManyCustomTrainer.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { CustomTrainerDownloadFindManySchema as CustomTrainerDownloadFindManySchema } from '../findManyCustomTrainerDownload.schema';
import { CustomTrainerLikeFindManySchema as CustomTrainerLikeFindManySchema } from '../findManyCustomTrainerLike.schema';
import { CustomTrainerCountOutputTypeArgsObjectSchema as CustomTrainerCountOutputTypeArgsObjectSchema } from './CustomTrainerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  colors: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  key: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  name: z.boolean().optional(),
  like_count: z.boolean().optional(),
  private: z.boolean().optional(),
  copy_of_id: z.boolean().optional(),
  description: z.boolean().optional(),
  downloaded: z.boolean().optional(),
  group_name: z.boolean().optional(),
  scrambles: z.boolean().optional(),
  solution: z.boolean().optional(),
  alt_solutions: z.boolean().optional(),
  three_d: z.boolean().optional(),
  algo_type: z.boolean().optional(),
  copy_of: z.union([z.boolean(), z.lazy(() => CustomTrainerArgsObjectSchema)]).optional(),
  copies: z.union([z.boolean(), z.lazy(() => CustomTrainerFindManySchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  download_of: z.union([z.boolean(), z.lazy(() => CustomTrainerDownloadFindManySchema)]).optional(),
  downloads: z.union([z.boolean(), z.lazy(() => CustomTrainerDownloadFindManySchema)]).optional(),
  likes: z.union([z.boolean(), z.lazy(() => CustomTrainerLikeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomTrainerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomTrainerSelectObjectSchema: z.ZodType<Prisma.CustomTrainerSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerSelect>;
export const CustomTrainerSelectObjectZodSchema = makeSchema();
