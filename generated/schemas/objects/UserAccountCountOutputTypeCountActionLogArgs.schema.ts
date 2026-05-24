import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './ActionLogWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActionLogWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountActionLogArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountActionLogArgsObjectZodSchema = makeSchema();
