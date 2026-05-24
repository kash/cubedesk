import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './BadgeSelect.schema';
import { BadgeIncludeObjectSchema as BadgeIncludeObjectSchema } from './BadgeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BadgeSelectObjectSchema).optional(),
  include: z.lazy(() => BadgeIncludeObjectSchema).optional()
}).strict();
export const BadgeArgsObjectSchema = makeSchema();
export const BadgeArgsObjectZodSchema = makeSchema();
