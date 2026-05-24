import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { CustomTrainerArgsObjectSchema as CustomTrainerArgsObjectSchema } from './CustomTrainerArgs.schema'

const makeSchema = () => z.object({
  creator: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  new_trainer: z.union([z.boolean(), z.lazy(() => CustomTrainerArgsObjectSchema)]).optional(),
  source_trainer: z.union([z.boolean(), z.lazy(() => CustomTrainerArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const CustomTrainerDownloadIncludeObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadInclude>;
export const CustomTrainerDownloadIncludeObjectZodSchema = makeSchema();
