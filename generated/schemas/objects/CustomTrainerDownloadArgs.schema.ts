import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadSelectObjectSchema as CustomTrainerDownloadSelectObjectSchema } from './CustomTrainerDownloadSelect.schema';
import { CustomTrainerDownloadIncludeObjectSchema as CustomTrainerDownloadIncludeObjectSchema } from './CustomTrainerDownloadInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomTrainerDownloadSelectObjectSchema).optional(),
  include: z.lazy(() => CustomTrainerDownloadIncludeObjectSchema).optional()
}).strict();
export const CustomTrainerDownloadArgsObjectSchema = makeSchema();
export const CustomTrainerDownloadArgsObjectZodSchema = makeSchema();
