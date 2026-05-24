import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCountOutputTypeSelectObjectSchema as BadgeTypeCountOutputTypeSelectObjectSchema } from './BadgeTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BadgeTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BadgeTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const BadgeTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
