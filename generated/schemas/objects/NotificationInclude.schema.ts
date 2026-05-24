import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  triggering_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const NotificationIncludeObjectSchema: z.ZodType<Prisma.NotificationInclude> = makeSchema() as unknown as z.ZodType<Prisma.NotificationInclude>;
export const NotificationIncludeObjectZodSchema = makeSchema();
