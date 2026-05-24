import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './AdViewSelect.schema';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './AdViewInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AdViewSelectObjectSchema).optional(),
  include: z.lazy(() => AdViewIncludeObjectSchema).optional()
}).strict();
export const AdViewArgsObjectSchema = makeSchema();
export const AdViewArgsObjectZodSchema = makeSchema();
