import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { ActionLogListRelationFilterObjectSchema as ActionLogListRelationFilterObjectSchema } from './ActionLogListRelationFilter.schema';
import { AdViewListRelationFilterObjectSchema as AdViewListRelationFilterObjectSchema } from './AdViewListRelationFilter.schema';
import { AlgorithmOverrideListRelationFilterObjectSchema as AlgorithmOverrideListRelationFilterObjectSchema } from './AlgorithmOverrideListRelationFilter.schema';
import { BadgeListRelationFilterObjectSchema as BadgeListRelationFilterObjectSchema } from './BadgeListRelationFilter.schema';
import { BadgeTypeListRelationFilterObjectSchema as BadgeTypeListRelationFilterObjectSchema } from './BadgeTypeListRelationFilter.schema';
import { BanLogListRelationFilterObjectSchema as BanLogListRelationFilterObjectSchema } from './BanLogListRelationFilter.schema';
import { ChatMessageListRelationFilterObjectSchema as ChatMessageListRelationFilterObjectSchema } from './ChatMessageListRelationFilter.schema';
import { CustomTrainerListRelationFilterObjectSchema as CustomTrainerListRelationFilterObjectSchema } from './CustomTrainerListRelationFilter.schema';
import { CustomTrainerDownloadListRelationFilterObjectSchema as CustomTrainerDownloadListRelationFilterObjectSchema } from './CustomTrainerDownloadListRelationFilter.schema';
import { CustomTrainerLikeListRelationFilterObjectSchema as CustomTrainerLikeListRelationFilterObjectSchema } from './CustomTrainerLikeListRelationFilter.schema';
import { EloLogListRelationFilterObjectSchema as EloLogListRelationFilterObjectSchema } from './EloLogListRelationFilter.schema';
import { EloRatingNullableScalarRelationFilterObjectSchema as EloRatingNullableScalarRelationFilterObjectSchema } from './EloRatingNullableScalarRelationFilter.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema';
import { EmailLogListRelationFilterObjectSchema as EmailLogListRelationFilterObjectSchema } from './EmailLogListRelationFilter.schema';
import { ForgotPasswordListRelationFilterObjectSchema as ForgotPasswordListRelationFilterObjectSchema } from './ForgotPasswordListRelationFilter.schema';
import { FriendshipListRelationFilterObjectSchema as FriendshipListRelationFilterObjectSchema } from './FriendshipListRelationFilter.schema';
import { FriendshipRequestListRelationFilterObjectSchema as FriendshipRequestListRelationFilterObjectSchema } from './FriendshipRequestListRelationFilter.schema';
import { GameSessionListRelationFilterObjectSchema as GameSessionListRelationFilterObjectSchema } from './GameSessionListRelationFilter.schema';
import { ImageListRelationFilterObjectSchema as ImageListRelationFilterObjectSchema } from './ImageListRelationFilter.schema';
import { IntegrationListRelationFilterObjectSchema as IntegrationListRelationFilterObjectSchema } from './IntegrationListRelationFilter.schema';
import { MatchListRelationFilterObjectSchema as MatchListRelationFilterObjectSchema } from './MatchListRelationFilter.schema';
import { MatchLobbyListRelationFilterObjectSchema as MatchLobbyListRelationFilterObjectSchema } from './MatchLobbyListRelationFilter.schema';
import { MatchParticipantListRelationFilterObjectSchema as MatchParticipantListRelationFilterObjectSchema } from './MatchParticipantListRelationFilter.schema';
import { MatchSessionListRelationFilterObjectSchema as MatchSessionListRelationFilterObjectSchema } from './MatchSessionListRelationFilter.schema';
import { MetricLogListRelationFilterObjectSchema as MetricLogListRelationFilterObjectSchema } from './MetricLogListRelationFilter.schema';
import { NotificationListRelationFilterObjectSchema as NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
import { NotificationPreferenceNullableScalarRelationFilterObjectSchema as NotificationPreferenceNullableScalarRelationFilterObjectSchema } from './NotificationPreferenceNullableScalarRelationFilter.schema';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './NotificationPreferenceWhereInput.schema';
import { ProfileNullableScalarRelationFilterObjectSchema as ProfileNullableScalarRelationFilterObjectSchema } from './ProfileNullableScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileViewListRelationFilterObjectSchema as ProfileViewListRelationFilterObjectSchema } from './ProfileViewListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema as ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { SettingNullableScalarRelationFilterObjectSchema as SettingNullableScalarRelationFilterObjectSchema } from './SettingNullableScalarRelationFilter.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema';
import { SmartDeviceListRelationFilterObjectSchema as SmartDeviceListRelationFilterObjectSchema } from './SmartDeviceListRelationFilter.schema';
import { SolveListRelationFilterObjectSchema as SolveListRelationFilterObjectSchema } from './SolveListRelationFilter.schema';
import { SolveViewListRelationFilterObjectSchema as SolveViewListRelationFilterObjectSchema } from './SolveViewListRelationFilter.schema';
import { TimerBackgroundNullableScalarRelationFilterObjectSchema as TimerBackgroundNullableScalarRelationFilterObjectSchema } from './TimerBackgroundNullableScalarRelationFilter.schema';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './TimerBackgroundWhereInput.schema';
import { TopAverageListRelationFilterObjectSchema as TopAverageListRelationFilterObjectSchema } from './TopAverageListRelationFilter.schema';
import { TopSolveListRelationFilterObjectSchema as TopSolveListRelationFilterObjectSchema } from './TopSolveListRelationFilter.schema';
import { TrainerFavoriteListRelationFilterObjectSchema as TrainerFavoriteListRelationFilterObjectSchema } from './TrainerFavoriteListRelationFilter.schema';
import { UserFeatureStateNullableScalarRelationFilterObjectSchema as UserFeatureStateNullableScalarRelationFilterObjectSchema } from './UserFeatureStateNullableScalarRelationFilter.schema';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './UserFeatureStateWhereInput.schema'

const useraccountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserAccountWhereInputObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserAccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserAccountWhereInputObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  first_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  join_ip: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  join_country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  admin: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  last_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  verified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  banned_forever: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  banned_until: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  stripe_customer_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  is_pro: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  mod: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  offline_hash: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  unsub_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  last_solve_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  action_log: z.lazy(() => ActionLogListRelationFilterObjectSchema).optional(),
  ad_views: z.lazy(() => AdViewListRelationFilterObjectSchema).optional(),
  algorithm_override: z.lazy(() => AlgorithmOverrideListRelationFilterObjectSchema).optional(),
  badges: z.lazy(() => BadgeListRelationFilterObjectSchema).optional(),
  badge_type: z.lazy(() => BadgeTypeListRelationFilterObjectSchema).optional(),
  bans: z.lazy(() => BanLogListRelationFilterObjectSchema).optional(),
  created_bans: z.lazy(() => BanLogListRelationFilterObjectSchema).optional(),
  chat_messages: z.lazy(() => ChatMessageListRelationFilterObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerListRelationFilterObjectSchema).optional(),
  custom_trainer_downloads: z.lazy(() => CustomTrainerDownloadListRelationFilterObjectSchema).optional(),
  custom_trainer_downloaded: z.lazy(() => CustomTrainerDownloadListRelationFilterObjectSchema).optional(),
  custom_trainer_likes: z.lazy(() => CustomTrainerLikeListRelationFilterObjectSchema).optional(),
  liked_custom_trainers: z.lazy(() => CustomTrainerLikeListRelationFilterObjectSchema).optional(),
  elo_log_opponent: z.lazy(() => EloLogListRelationFilterObjectSchema).optional(),
  elo_log_player: z.lazy(() => EloLogListRelationFilterObjectSchema).optional(),
  elo_rating: z.union([z.lazy(() => EloRatingNullableScalarRelationFilterObjectSchema), z.lazy(() => EloRatingWhereInputObjectSchema)]).optional(),
  email_log: z.lazy(() => EmailLogListRelationFilterObjectSchema).optional(),
  forgot_password: z.lazy(() => ForgotPasswordListRelationFilterObjectSchema).optional(),
  friendships_other: z.lazy(() => FriendshipListRelationFilterObjectSchema).optional(),
  friendships: z.lazy(() => FriendshipListRelationFilterObjectSchema).optional(),
  friendship_requests_sent: z.lazy(() => FriendshipRequestListRelationFilterObjectSchema).optional(),
  friendships_requests_received: z.lazy(() => FriendshipRequestListRelationFilterObjectSchema).optional(),
  game_sessions: z.lazy(() => GameSessionListRelationFilterObjectSchema).optional(),
  image: z.lazy(() => ImageListRelationFilterObjectSchema).optional(),
  integrations: z.lazy(() => IntegrationListRelationFilterObjectSchema).optional(),
  matches_won: z.lazy(() => MatchListRelationFilterObjectSchema).optional(),
  match_lobbies: z.lazy(() => MatchLobbyListRelationFilterObjectSchema).optional(),
  match_participations: z.lazy(() => MatchParticipantListRelationFilterObjectSchema).optional(),
  match_sessions_created: z.lazy(() => MatchSessionListRelationFilterObjectSchema).optional(),
  metric_logs: z.lazy(() => MetricLogListRelationFilterObjectSchema).optional(),
  notifications_triggered: z.lazy(() => NotificationListRelationFilterObjectSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterObjectSchema).optional(),
  notification_preferences: z.union([z.lazy(() => NotificationPreferenceNullableScalarRelationFilterObjectSchema), z.lazy(() => NotificationPreferenceWhereInputObjectSchema)]).optional(),
  profile: z.union([z.lazy(() => ProfileNullableScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  profile_views: z.lazy(() => ProfileViewListRelationFilterObjectSchema).optional(),
  viewed_profiles: z.lazy(() => ProfileViewListRelationFilterObjectSchema).optional(),
  reports_created: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  reports_for: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  settings: z.union([z.lazy(() => SettingNullableScalarRelationFilterObjectSchema), z.lazy(() => SettingWhereInputObjectSchema)]).optional(),
  smart_device: z.lazy(() => SmartDeviceListRelationFilterObjectSchema).optional(),
  solves: z.lazy(() => SolveListRelationFilterObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewListRelationFilterObjectSchema).optional(),
  viewed_solve: z.lazy(() => SolveViewListRelationFilterObjectSchema).optional(),
  timer_background: z.union([z.lazy(() => TimerBackgroundNullableScalarRelationFilterObjectSchema), z.lazy(() => TimerBackgroundWhereInputObjectSchema)]).optional(),
  top_average: z.lazy(() => TopAverageListRelationFilterObjectSchema).optional(),
  top_solves: z.lazy(() => TopSolveListRelationFilterObjectSchema).optional(),
  trainer_favorite: z.lazy(() => TrainerFavoriteListRelationFilterObjectSchema).optional(),
  user_feature_state: z.union([z.lazy(() => UserFeatureStateNullableScalarRelationFilterObjectSchema), z.lazy(() => UserFeatureStateWhereInputObjectSchema)]).optional()
}).strict();
export const UserAccountWhereInputObjectSchema: z.ZodType<Prisma.UserAccountWhereInput> = useraccountwhereinputSchema as unknown as z.ZodType<Prisma.UserAccountWhereInput>;
export const UserAccountWhereInputObjectZodSchema = useraccountwhereinputSchema;
