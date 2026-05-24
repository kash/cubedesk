import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyWhereInputObjectSchema as MatchLobbyWhereInputObjectSchema } from './MatchLobbyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MatchLobbyWhereInputObjectSchema).optional(),
  some: z.lazy(() => MatchLobbyWhereInputObjectSchema).optional(),
  none: z.lazy(() => MatchLobbyWhereInputObjectSchema).optional()
}).strict();
export const MatchLobbyListRelationFilterObjectSchema: z.ZodType<Prisma.MatchLobbyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyListRelationFilter>;
export const MatchLobbyListRelationFilterObjectZodSchema = makeSchema();
