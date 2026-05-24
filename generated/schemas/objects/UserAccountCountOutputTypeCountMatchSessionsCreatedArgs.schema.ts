import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountMatchSessionsCreatedArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountMatchSessionsCreatedArgsObjectZodSchema = makeSchema();
