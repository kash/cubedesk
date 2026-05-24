import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumGameTypeFilterObjectSchema as EnumGameTypeFilterObjectSchema } from './EnumGameTypeFilter.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const matchlobbywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchLobbyWhereInputObjectSchema), z.lazy(() => MatchLobbyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchLobbyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchLobbyWhereInputObjectSchema), z.lazy(() => MatchLobbyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  game_type: z.union([z.lazy(() => EnumGameTypeFilterObjectSchema), GameTypeSchema]).optional(),
  player_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  elo: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  client_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const MatchLobbyWhereInputObjectSchema: z.ZodType<Prisma.MatchLobbyWhereInput> = matchlobbywhereinputSchema as unknown as z.ZodType<Prisma.MatchLobbyWhereInput>;
export const MatchLobbyWhereInputObjectZodSchema = matchlobbywhereinputSchema;
