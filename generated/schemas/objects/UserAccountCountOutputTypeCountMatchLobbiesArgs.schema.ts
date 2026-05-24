import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyWhereInputObjectSchema as MatchLobbyWhereInputObjectSchema } from './MatchLobbyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchLobbyWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountMatchLobbiesArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountMatchLobbiesArgsObjectZodSchema = makeSchema();
