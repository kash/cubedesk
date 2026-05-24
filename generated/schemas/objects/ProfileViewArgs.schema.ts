import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewSelectObjectSchema as ProfileViewSelectObjectSchema } from './ProfileViewSelect.schema';
import { ProfileViewIncludeObjectSchema as ProfileViewIncludeObjectSchema } from './ProfileViewInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProfileViewSelectObjectSchema).optional(),
  include: z.lazy(() => ProfileViewIncludeObjectSchema).optional()
}).strict();
export const ProfileViewArgsObjectSchema = makeSchema();
export const ProfileViewArgsObjectZodSchema = makeSchema();
