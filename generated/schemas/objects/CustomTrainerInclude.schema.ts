import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerArgsObjectSchema as CustomTrainerArgsObjectSchema } from './CustomTrainerArgs.schema';
import { CustomTrainerFindManySchema as CustomTrainerFindManySchema } from '../findManyCustomTrainer.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { CustomTrainerDownloadFindManySchema as CustomTrainerDownloadFindManySchema } from '../findManyCustomTrainerDownload.schema';
import { CustomTrainerLikeFindManySchema as CustomTrainerLikeFindManySchema } from '../findManyCustomTrainerLike.schema';
import { CustomTrainerCountOutputTypeArgsObjectSchema as CustomTrainerCountOutputTypeArgsObjectSchema } from './CustomTrainerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  copy_of: z.union([z.boolean(), z.lazy(() => CustomTrainerArgsObjectSchema)]).optional(),
  copies: z.union([z.boolean(), z.lazy(() => CustomTrainerFindManySchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  download_of: z.union([z.boolean(), z.lazy(() => CustomTrainerDownloadFindManySchema)]).optional(),
  downloads: z.union([z.boolean(), z.lazy(() => CustomTrainerDownloadFindManySchema)]).optional(),
  likes: z.union([z.boolean(), z.lazy(() => CustomTrainerLikeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomTrainerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomTrainerIncludeObjectSchema: z.ZodType<Prisma.CustomTrainerInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerInclude>;
export const CustomTrainerIncludeObjectZodSchema = makeSchema();
