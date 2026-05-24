import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './BadgeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountBadgesArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountBadgesArgsObjectZodSchema = makeSchema();
