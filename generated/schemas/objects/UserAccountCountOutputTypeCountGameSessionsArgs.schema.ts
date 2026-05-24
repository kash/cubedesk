import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountGameSessionsArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountGameSessionsArgsObjectZodSchema = makeSchema();
