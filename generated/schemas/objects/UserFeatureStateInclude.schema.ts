import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const UserFeatureStateIncludeObjectSchema: z.ZodType<Prisma.UserFeatureStateInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateInclude>;
export const UserFeatureStateIncludeObjectZodSchema = makeSchema();
