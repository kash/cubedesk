import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './BadgeTypeSelect.schema';
import { BadgeTypeIncludeObjectSchema as BadgeTypeIncludeObjectSchema } from './BadgeTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BadgeTypeSelectObjectSchema).optional(),
  include: z.lazy(() => BadgeTypeIncludeObjectSchema).optional()
}).strict();
export const BadgeTypeArgsObjectSchema = makeSchema();
export const BadgeTypeArgsObjectZodSchema = makeSchema();
