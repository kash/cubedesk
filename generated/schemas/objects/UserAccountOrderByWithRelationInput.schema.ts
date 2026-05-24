import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ActionLogOrderByRelationAggregateInputObjectSchema as ActionLogOrderByRelationAggregateInputObjectSchema } from './ActionLogOrderByRelationAggregateInput.schema';
import { AdViewOrderByRelationAggregateInputObjectSchema as AdViewOrderByRelationAggregateInputObjectSchema } from './AdViewOrderByRelationAggregateInput.schema';
import { AlgorithmOverrideOrderByRelationAggregateInputObjectSchema as AlgorithmOverrideOrderByRelationAggregateInputObjectSchema } from './AlgorithmOverrideOrderByRelationAggregateInput.schema';
import { BadgeOrderByRelationAggregateInputObjectSchema as BadgeOrderByRelationAggregateInputObjectSchema } from './BadgeOrderByRelationAggregateInput.schema';
import { BadgeTypeOrderByRelationAggregateInputObjectSchema as BadgeTypeOrderByRelationAggregateInputObjectSchema } from './BadgeTypeOrderByRelationAggregateInput.schema';
import { BanLogOrderByRelationAggregateInputObjectSchema as BanLogOrderByRelationAggregateInputObjectSchema } from './BanLogOrderByRelationAggregateInput.schema';
import { ChatMessageOrderByRelationAggregateInputObjectSchema as ChatMessageOrderByRelationAggregateInputObjectSchema } from './ChatMessageOrderByRelationAggregateInput.schema';
import { CustomTrainerOrderByRelationAggregateInputObjectSchema as CustomTrainerOrderByRelationAggregateInputObjectSchema } from './CustomTrainerOrderByRelationAggregateInput.schema';
import { CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema as CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema } from './CustomTrainerDownloadOrderByRelationAggregateInput.schema';
import { CustomTrainerLikeOrderByRelationAggregateInputObjectSchema as CustomTrainerLikeOrderByRelationAggregateInputObjectSchema } from './CustomTrainerLikeOrderByRelationAggregateInput.schema';
import { EloLogOrderByRelationAggregateInputObjectSchema as EloLogOrderByRelationAggregateInputObjectSchema } from './EloLogOrderByRelationAggregateInput.schema';
import { EloRatingOrderByWithRelationInputObjectSchema as EloRatingOrderByWithRelationInputObjectSchema } from './EloRatingOrderByWithRelationInput.schema';
import { EmailLogOrderByRelationAggregateInputObjectSchema as EmailLogOrderByRelationAggregateInputObjectSchema } from './EmailLogOrderByRelationAggregateInput.schema';
import { ForgotPasswordOrderByRelationAggregateInputObjectSchema as ForgotPasswordOrderByRelationAggregateInputObjectSchema } from './ForgotPasswordOrderByRelationAggregateInput.schema';
import { FriendshipOrderByRelationAggregateInputObjectSchema as FriendshipOrderByRelationAggregateInputObjectSchema } from './FriendshipOrderByRelationAggregateInput.schema';
import { FriendshipRequestOrderByRelationAggregateInputObjectSchema as FriendshipRequestOrderByRelationAggregateInputObjectSchema } from './FriendshipRequestOrderByRelationAggregateInput.schema';
import { GameSessionOrderByRelationAggregateInputObjectSchema as GameSessionOrderByRelationAggregateInputObjectSchema } from './GameSessionOrderByRelationAggregateInput.schema';
import { ImageOrderByRelationAggregateInputObjectSchema as ImageOrderByRelationAggregateInputObjectSchema } from './ImageOrderByRelationAggregateInput.schema';
import { IntegrationOrderByRelationAggregateInputObjectSchema as IntegrationOrderByRelationAggregateInputObjectSchema } from './IntegrationOrderByRelationAggregateInput.schema';
import { MatchOrderByRelationAggregateInputObjectSchema as MatchOrderByRelationAggregateInputObjectSchema } from './MatchOrderByRelationAggregateInput.schema';
import { MatchLobbyOrderByRelationAggregateInputObjectSchema as MatchLobbyOrderByRelationAggregateInputObjectSchema } from './MatchLobbyOrderByRelationAggregateInput.schema';
import { MatchParticipantOrderByRelationAggregateInputObjectSchema as MatchParticipantOrderByRelationAggregateInputObjectSchema } from './MatchParticipantOrderByRelationAggregateInput.schema';
import { MatchSessionOrderByRelationAggregateInputObjectSchema as MatchSessionOrderByRelationAggregateInputObjectSchema } from './MatchSessionOrderByRelationAggregateInput.schema';
import { MetricLogOrderByRelationAggregateInputObjectSchema as MetricLogOrderByRelationAggregateInputObjectSchema } from './MetricLogOrderByRelationAggregateInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema as NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { NotificationPreferenceOrderByWithRelationInputObjectSchema as NotificationPreferenceOrderByWithRelationInputObjectSchema } from './NotificationPreferenceOrderByWithRelationInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ProfileViewOrderByRelationAggregateInputObjectSchema as ProfileViewOrderByRelationAggregateInputObjectSchema } from './ProfileViewOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema as ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { SettingOrderByWithRelationInputObjectSchema as SettingOrderByWithRelationInputObjectSchema } from './SettingOrderByWithRelationInput.schema';
import { SmartDeviceOrderByRelationAggregateInputObjectSchema as SmartDeviceOrderByRelationAggregateInputObjectSchema } from './SmartDeviceOrderByRelationAggregateInput.schema';
import { SolveOrderByRelationAggregateInputObjectSchema as SolveOrderByRelationAggregateInputObjectSchema } from './SolveOrderByRelationAggregateInput.schema';
import { SolveViewOrderByRelationAggregateInputObjectSchema as SolveViewOrderByRelationAggregateInputObjectSchema } from './SolveViewOrderByRelationAggregateInput.schema';
import { TimerBackgroundOrderByWithRelationInputObjectSchema as TimerBackgroundOrderByWithRelationInputObjectSchema } from './TimerBackgroundOrderByWithRelationInput.schema';
import { TopAverageOrderByRelationAggregateInputObjectSchema as TopAverageOrderByRelationAggregateInputObjectSchema } from './TopAverageOrderByRelationAggregateInput.schema';
import { TopSolveOrderByRelationAggregateInputObjectSchema as TopSolveOrderByRelationAggregateInputObjectSchema } from './TopSolveOrderByRelationAggregateInput.schema';
import { TrainerFavoriteOrderByRelationAggregateInputObjectSchema as TrainerFavoriteOrderByRelationAggregateInputObjectSchema } from './TrainerFavoriteOrderByRelationAggregateInput.schema';
import { UserFeatureStateOrderByWithRelationInputObjectSchema as UserFeatureStateOrderByWithRelationInputObjectSchema } from './UserFeatureStateOrderByWithRelationInput.schema';
import { UserAccountOrderByRelevanceInputObjectSchema as UserAccountOrderByRelevanceInputObjectSchema } from './UserAccountOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  first_name: SortOrderSchema.optional(),
  join_ip: SortOrderSchema.optional(),
  join_country: SortOrderSchema.optional(),
  admin: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  last_name: SortOrderSchema.optional(),
  username: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verified: SortOrderSchema.optional(),
  banned_forever: SortOrderSchema.optional(),
  banned_until: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stripe_customer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_pro: SortOrderSchema.optional(),
  mod: SortOrderSchema.optional(),
  offline_hash: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unsub_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  last_solve_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  action_log: z.lazy(() => ActionLogOrderByRelationAggregateInputObjectSchema).optional(),
  ad_views: z.lazy(() => AdViewOrderByRelationAggregateInputObjectSchema).optional(),
  algorithm_override: z.lazy(() => AlgorithmOverrideOrderByRelationAggregateInputObjectSchema).optional(),
  badges: z.lazy(() => BadgeOrderByRelationAggregateInputObjectSchema).optional(),
  badge_type: z.lazy(() => BadgeTypeOrderByRelationAggregateInputObjectSchema).optional(),
  bans: z.lazy(() => BanLogOrderByRelationAggregateInputObjectSchema).optional(),
  created_bans: z.lazy(() => BanLogOrderByRelationAggregateInputObjectSchema).optional(),
  chat_messages: z.lazy(() => ChatMessageOrderByRelationAggregateInputObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerOrderByRelationAggregateInputObjectSchema).optional(),
  custom_trainer_downloads: z.lazy(() => CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema).optional(),
  custom_trainer_downloaded: z.lazy(() => CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema).optional(),
  custom_trainer_likes: z.lazy(() => CustomTrainerLikeOrderByRelationAggregateInputObjectSchema).optional(),
  liked_custom_trainers: z.lazy(() => CustomTrainerLikeOrderByRelationAggregateInputObjectSchema).optional(),
  elo_log_opponent: z.lazy(() => EloLogOrderByRelationAggregateInputObjectSchema).optional(),
  elo_log_player: z.lazy(() => EloLogOrderByRelationAggregateInputObjectSchema).optional(),
  elo_rating: z.lazy(() => EloRatingOrderByWithRelationInputObjectSchema).optional(),
  email_log: z.lazy(() => EmailLogOrderByRelationAggregateInputObjectSchema).optional(),
  forgot_password: z.lazy(() => ForgotPasswordOrderByRelationAggregateInputObjectSchema).optional(),
  friendships_other: z.lazy(() => FriendshipOrderByRelationAggregateInputObjectSchema).optional(),
  friendships: z.lazy(() => FriendshipOrderByRelationAggregateInputObjectSchema).optional(),
  friendship_requests_sent: z.lazy(() => FriendshipRequestOrderByRelationAggregateInputObjectSchema).optional(),
  friendships_requests_received: z.lazy(() => FriendshipRequestOrderByRelationAggregateInputObjectSchema).optional(),
  game_sessions: z.lazy(() => GameSessionOrderByRelationAggregateInputObjectSchema).optional(),
  image: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional(),
  integrations: z.lazy(() => IntegrationOrderByRelationAggregateInputObjectSchema).optional(),
  matches_won: z.lazy(() => MatchOrderByRelationAggregateInputObjectSchema).optional(),
  match_lobbies: z.lazy(() => MatchLobbyOrderByRelationAggregateInputObjectSchema).optional(),
  match_participations: z.lazy(() => MatchParticipantOrderByRelationAggregateInputObjectSchema).optional(),
  match_sessions_created: z.lazy(() => MatchSessionOrderByRelationAggregateInputObjectSchema).optional(),
  metric_logs: z.lazy(() => MetricLogOrderByRelationAggregateInputObjectSchema).optional(),
  notifications_triggered: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional(),
  notification_preferences: z.lazy(() => NotificationPreferenceOrderByWithRelationInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  profile_views: z.lazy(() => ProfileViewOrderByRelationAggregateInputObjectSchema).optional(),
  viewed_profiles: z.lazy(() => ProfileViewOrderByRelationAggregateInputObjectSchema).optional(),
  reports_created: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  reports_for: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  settings: z.lazy(() => SettingOrderByWithRelationInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceOrderByRelationAggregateInputObjectSchema).optional(),
  solves: z.lazy(() => SolveOrderByRelationAggregateInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewOrderByRelationAggregateInputObjectSchema).optional(),
  viewed_solve: z.lazy(() => SolveViewOrderByRelationAggregateInputObjectSchema).optional(),
  timer_background: z.lazy(() => TimerBackgroundOrderByWithRelationInputObjectSchema).optional(),
  top_average: z.lazy(() => TopAverageOrderByRelationAggregateInputObjectSchema).optional(),
  top_solves: z.lazy(() => TopSolveOrderByRelationAggregateInputObjectSchema).optional(),
  trainer_favorite: z.lazy(() => TrainerFavoriteOrderByRelationAggregateInputObjectSchema).optional(),
  user_feature_state: z.lazy(() => UserFeatureStateOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => UserAccountOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const UserAccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserAccountOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountOrderByWithRelationInput>;
export const UserAccountOrderByWithRelationInputObjectZodSchema = makeSchema();
