import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumGameTypeWithAggregatesFilterObjectSchema as EnumGameTypeWithAggregatesFilterObjectSchema } from './EnumGameTypeWithAggregatesFilter.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const matchlobbyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchLobbyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MatchLobbyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchLobbyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchLobbyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MatchLobbyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  cube_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  game_type: z.union([z.lazy(() => EnumGameTypeWithAggregatesFilterObjectSchema), GameTypeSchema]).optional(),
  player_count: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  elo: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  client_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const MatchLobbyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MatchLobbyScalarWhereWithAggregatesInput> = matchlobbyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MatchLobbyScalarWhereWithAggregatesInput>;
export const MatchLobbyScalarWhereWithAggregatesInputObjectZodSchema = matchlobbyscalarwherewithaggregatesinputSchema;
