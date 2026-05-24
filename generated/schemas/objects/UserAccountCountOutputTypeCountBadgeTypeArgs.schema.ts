import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './BadgeTypeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountBadgeTypeArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountBadgeTypeArgsObjectZodSchema = makeSchema();
