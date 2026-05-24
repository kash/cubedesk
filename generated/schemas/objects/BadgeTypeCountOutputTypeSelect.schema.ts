import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCountOutputTypeCountBadgesArgsObjectSchema as BadgeTypeCountOutputTypeCountBadgesArgsObjectSchema } from './BadgeTypeCountOutputTypeCountBadgesArgs.schema'

const makeSchema = () => z.object({
  badges: z.union([z.boolean(), z.lazy(() => BadgeTypeCountOutputTypeCountBadgesArgsObjectSchema)]).optional()
}).strict();
export const BadgeTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BadgeTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCountOutputTypeSelect>;
export const BadgeTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
