import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileSelectObjectSchema as ProfileSelectObjectSchema } from './ProfileSelect.schema';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './ProfileInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProfileSelectObjectSchema).optional(),
  include: z.lazy(() => ProfileIncludeObjectSchema).optional()
}).strict();
export const ProfileArgsObjectSchema = makeSchema();
export const ProfileArgsObjectZodSchema = makeSchema();
