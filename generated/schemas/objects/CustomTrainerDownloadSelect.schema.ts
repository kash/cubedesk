import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { CustomTrainerArgsObjectSchema as CustomTrainerArgsObjectSchema } from './CustomTrainerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  creator_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  new_trainer_id: z.boolean().optional(),
  source_trainer_id: z.boolean().optional(),
  creator: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  new_trainer: z.union([z.boolean(), z.lazy(() => CustomTrainerArgsObjectSchema)]).optional(),
  source_trainer: z.union([z.boolean(), z.lazy(() => CustomTrainerArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const CustomTrainerDownloadSelectObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadSelect>;
export const CustomTrainerDownloadSelectObjectZodSchema = makeSchema();
