import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './UserFeatureStateSelect.schema';
import { UserFeatureStateIncludeObjectSchema as UserFeatureStateIncludeObjectSchema } from './UserFeatureStateInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserFeatureStateSelectObjectSchema).optional(),
  include: z.lazy(() => UserFeatureStateIncludeObjectSchema).optional()
}).strict();
export const UserFeatureStateArgsObjectSchema = makeSchema();
export const UserFeatureStateArgsObjectZodSchema = makeSchema();
