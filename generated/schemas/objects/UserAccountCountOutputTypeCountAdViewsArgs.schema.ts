import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './AdViewWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdViewWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountAdViewsArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountAdViewsArgsObjectZodSchema = makeSchema();
