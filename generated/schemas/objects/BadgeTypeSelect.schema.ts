import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeFindManySchema as BadgeFindManySchema } from '../findManyBadge.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { BadgeTypeCountOutputTypeArgsObjectSchema as BadgeTypeCountOutputTypeArgsObjectSchema } from './BadgeTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  priority: z.boolean().optional(),
  color: z.boolean().optional(),
  created_at: z.boolean().optional(),
  description: z.boolean().optional(),
  created_by_id: z.boolean().optional(),
  badges: z.union([z.boolean(), z.lazy(() => BadgeFindManySchema)]).optional(),
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BadgeTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BadgeTypeSelectObjectSchema: z.ZodType<Prisma.BadgeTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeSelect>;
export const BadgeTypeSelectObjectZodSchema = makeSchema();
