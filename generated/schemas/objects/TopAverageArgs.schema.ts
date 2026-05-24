import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageSelectObjectSchema as TopAverageSelectObjectSchema } from './TopAverageSelect.schema';
import { TopAverageIncludeObjectSchema as TopAverageIncludeObjectSchema } from './TopAverageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TopAverageSelectObjectSchema).optional(),
  include: z.lazy(() => TopAverageIncludeObjectSchema).optional()
}).strict();
export const TopAverageArgsObjectSchema = makeSchema();
export const TopAverageArgsObjectZodSchema = makeSchema();
