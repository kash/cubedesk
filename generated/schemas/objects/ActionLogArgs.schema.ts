import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogSelectObjectSchema as ActionLogSelectObjectSchema } from './ActionLogSelect.schema';
import { ActionLogIncludeObjectSchema as ActionLogIncludeObjectSchema } from './ActionLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActionLogSelectObjectSchema).optional(),
  include: z.lazy(() => ActionLogIncludeObjectSchema).optional()
}).strict();
export const ActionLogArgsObjectSchema = makeSchema();
export const ActionLogArgsObjectZodSchema = makeSchema();
