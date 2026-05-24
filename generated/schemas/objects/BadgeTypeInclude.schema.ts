import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeFindManySchema as BadgeFindManySchema } from '../findManyBadge.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { BadgeTypeCountOutputTypeArgsObjectSchema as BadgeTypeCountOutputTypeArgsObjectSchema } from './BadgeTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  badges: z.union([z.boolean(), z.lazy(() => BadgeFindManySchema)]).optional(),
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BadgeTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BadgeTypeIncludeObjectSchema: z.ZodType<Prisma.BadgeTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeInclude>;
export const BadgeTypeIncludeObjectZodSchema = makeSchema();
