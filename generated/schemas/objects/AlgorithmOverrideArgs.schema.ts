import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideIncludeObjectSchema as AlgorithmOverrideIncludeObjectSchema } from './AlgorithmOverrideInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AlgorithmOverrideSelectObjectSchema).optional(),
  include: z.lazy(() => AlgorithmOverrideIncludeObjectSchema).optional()
}).strict();
export const AlgorithmOverrideArgsObjectSchema = makeSchema();
export const AlgorithmOverrideArgsObjectZodSchema = makeSchema();
