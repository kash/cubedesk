import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountSessionsArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountSessionsArgsObjectZodSchema = makeSchema();
