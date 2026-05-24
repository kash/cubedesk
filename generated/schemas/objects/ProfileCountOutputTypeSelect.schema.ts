import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCountOutputTypeCountViewsArgsObjectSchema as ProfileCountOutputTypeCountViewsArgsObjectSchema } from './ProfileCountOutputTypeCountViewsArgs.schema'

const makeSchema = () => z.object({
  views: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountViewsArgsObjectSchema)]).optional()
}).strict();
export const ProfileCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProfileCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCountOutputTypeSelect>;
export const ProfileCountOutputTypeSelectObjectZodSchema = makeSchema();
