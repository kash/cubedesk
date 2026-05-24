import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeSelectObjectSchema as CustomTrainerLikeSelectObjectSchema } from './CustomTrainerLikeSelect.schema';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './CustomTrainerLikeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomTrainerLikeSelectObjectSchema).optional(),
  include: z.lazy(() => CustomTrainerLikeIncludeObjectSchema).optional()
}).strict();
export const CustomTrainerLikeArgsObjectSchema = makeSchema();
export const CustomTrainerLikeArgsObjectZodSchema = makeSchema();
