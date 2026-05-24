import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ActionLogUpdateManyWithoutUserNestedInputObjectSchema as ActionLogUpdateManyWithoutUserNestedInputObjectSchema } from './ActionLogUpdateManyWithoutUserNestedInput.schema';
import { AdViewUpdateManyWithoutUserNestedInputObjectSchema as AdViewUpdateManyWithoutUserNestedInputObjectSchema } from './AdViewUpdateManyWithoutUserNestedInput.schema';
import { AlgorithmOverrideUpdateManyWithoutUserNestedInputObjectSchema as AlgorithmOverrideUpdateManyWithoutUserNestedInputObjectSchema } from './AlgorithmOverrideUpdateManyWithoutUserNestedInput.schema';
import { BadgeUpdateManyWithoutUserNestedInputObjectSchema as BadgeUpdateManyWithoutUserNestedInputObjectSchema } from './BadgeUpdateManyWithoutUserNestedInput.schema';
import { BadgeTypeUpdateManyWithoutCreated_byNestedInputObjectSchema as BadgeTypeUpdateManyWithoutCreated_byNestedInputObjectSchema } from './BadgeTypeUpdateManyWithoutCreated_byNestedInput.schema';
import { BanLogUpdateManyWithoutBanned_userNestedInputObjectSchema as BanLogUpdateManyWithoutBanned_userNestedInputObjectSchema } from './BanLogUpdateManyWithoutBanned_userNestedInput.schema';
import { BanLogUpdateManyWithoutCreated_byNestedInputObjectSchema as BanLogUpdateManyWithoutCreated_byNestedInputObjectSchema } from './BanLogUpdateManyWithoutCreated_byNestedInput.schema';
import { ChatMessageUpdateManyWithoutUserNestedInputObjectSchema as ChatMessageUpdateManyWithoutUserNestedInputObjectSchema } from './ChatMessageUpdateManyWithoutUserNestedInput.schema';
import { CustomTrainerUpdateManyWithoutUserNestedInputObjectSchema as CustomTrainerUpdateManyWithoutUserNestedInputObjectSchema } from './CustomTrainerUpdateManyWithoutUserNestedInput.schema';
import { CustomTrainerDownloadUpdateManyWithoutCreatorNestedInputObjectSchema as CustomTrainerDownloadUpdateManyWithoutCreatorNestedInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithoutCreatorNestedInput.schema';
import { CustomTrainerDownloadUpdateManyWithoutUserNestedInputObjectSchema as CustomTrainerDownloadUpdateManyWithoutUserNestedInputObjectSchema } from './CustomTrainerDownloadUpdateManyWithoutUserNestedInput.schema';
import { CustomTrainerLikeUpdateManyWithoutCreatorNestedInputObjectSchema as CustomTrainerLikeUpdateManyWithoutCreatorNestedInputObjectSchema } from './CustomTrainerLikeUpdateManyWithoutCreatorNestedInput.schema';
import { CustomTrainerLikeUpdateManyWithoutUserNestedInputObjectSchema as CustomTrainerLikeUpdateManyWithoutUserNestedInputObjectSchema } from './CustomTrainerLikeUpdateManyWithoutUserNestedInput.schema';
import { EloLogUpdateManyWithoutOpponentNestedInputObjectSchema as EloLogUpdateManyWithoutOpponentNestedInputObjectSchema } from './EloLogUpdateManyWithoutOpponentNestedInput.schema';
import { EloLogUpdateManyWithoutPlayerNestedInputObjectSchema as EloLogUpdateManyWithoutPlayerNestedInputObjectSchema } from './EloLogUpdateManyWithoutPlayerNestedInput.schema';
import { EloRatingUpdateOneWithoutUserNestedInputObjectSchema as EloRatingUpdateOneWithoutUserNestedInputObjectSchema } from './EloRatingUpdateOneWithoutUserNestedInput.schema';
import { EmailLogUpdateManyWithoutUserNestedInputObjectSchema as EmailLogUpdateManyWithoutUserNestedInputObjectSchema } from './EmailLogUpdateManyWithoutUserNestedInput.schema';
import { ForgotPasswordUpdateManyWithoutUserNestedInputObjectSchema as ForgotPasswordUpdateManyWithoutUserNestedInputObjectSchema } from './ForgotPasswordUpdateManyWithoutUserNestedInput.schema';
import { FriendshipUpdateManyWithoutOther_userNestedInputObjectSchema as FriendshipUpdateManyWithoutOther_userNestedInputObjectSchema } from './FriendshipUpdateManyWithoutOther_userNestedInput.schema';
import { FriendshipRequestUpdateManyWithoutFrom_userNestedInputObjectSchema as FriendshipRequestUpdateManyWithoutFrom_userNestedInputObjectSchema } from './FriendshipRequestUpdateManyWithoutFrom_userNestedInput.schema';
import { FriendshipRequestUpdateManyWithoutTo_userNestedInputObjectSchema as FriendshipRequestUpdateManyWithoutTo_userNestedInputObjectSchema } from './FriendshipRequestUpdateManyWithoutTo_userNestedInput.schema';
import { GameSessionUpdateManyWithoutUserNestedInputObjectSchema as GameSessionUpdateManyWithoutUserNestedInputObjectSchema } from './GameSessionUpdateManyWithoutUserNestedInput.schema';
import { ImageUpdateManyWithoutUserNestedInputObjectSchema as ImageUpdateManyWithoutUserNestedInputObjectSchema } from './ImageUpdateManyWithoutUserNestedInput.schema';
import { IntegrationUpdateManyWithoutUserNestedInputObjectSchema as IntegrationUpdateManyWithoutUserNestedInputObjectSchema } from './IntegrationUpdateManyWithoutUserNestedInput.schema';
import { MatchUpdateManyWithoutWinnerNestedInputObjectSchema as MatchUpdateManyWithoutWinnerNestedInputObjectSchema } from './MatchUpdateManyWithoutWinnerNestedInput.schema';
import { MatchLobbyUpdateManyWithoutUserNestedInputObjectSchema as MatchLobbyUpdateManyWithoutUserNestedInputObjectSchema } from './MatchLobbyUpdateManyWithoutUserNestedInput.schema';
import { MatchParticipantUpdateManyWithoutUserNestedInputObjectSchema as MatchParticipantUpdateManyWithoutUserNestedInputObjectSchema } from './MatchParticipantUpdateManyWithoutUserNestedInput.schema';
import { MatchSessionUpdateManyWithoutCreated_byNestedInputObjectSchema as MatchSessionUpdateManyWithoutCreated_byNestedInputObjectSchema } from './MatchSessionUpdateManyWithoutCreated_byNestedInput.schema';
import { MetricLogUpdateManyWithoutUserNestedInputObjectSchema as MetricLogUpdateManyWithoutUserNestedInputObjectSchema } from './MetricLogUpdateManyWithoutUserNestedInput.schema';
import { NotificationUpdateManyWithoutTriggering_userNestedInputObjectSchema as NotificationUpdateManyWithoutTriggering_userNestedInputObjectSchema } from './NotificationUpdateManyWithoutTriggering_userNestedInput.schema';
import { NotificationUpdateManyWithoutUserNestedInputObjectSchema as NotificationUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUpdateManyWithoutUserNestedInput.schema';
import { NotificationPreferenceUpdateOneWithoutUserNestedInputObjectSchema as NotificationPreferenceUpdateOneWithoutUserNestedInputObjectSchema } from './NotificationPreferenceUpdateOneWithoutUserNestedInput.schema';
import { ProfileUpdateOneWithoutUserNestedInputObjectSchema as ProfileUpdateOneWithoutUserNestedInputObjectSchema } from './ProfileUpdateOneWithoutUserNestedInput.schema';
import { ProfileViewUpdateManyWithoutProfile_userNestedInputObjectSchema as ProfileViewUpdateManyWithoutProfile_userNestedInputObjectSchema } from './ProfileViewUpdateManyWithoutProfile_userNestedInput.schema';
import { ProfileViewUpdateManyWithoutViewerNestedInputObjectSchema as ProfileViewUpdateManyWithoutViewerNestedInputObjectSchema } from './ProfileViewUpdateManyWithoutViewerNestedInput.schema';
import { ReportUpdateManyWithoutCreated_byNestedInputObjectSchema as ReportUpdateManyWithoutCreated_byNestedInputObjectSchema } from './ReportUpdateManyWithoutCreated_byNestedInput.schema';
import { ReportUpdateManyWithoutReported_userNestedInputObjectSchema as ReportUpdateManyWithoutReported_userNestedInputObjectSchema } from './ReportUpdateManyWithoutReported_userNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema as SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { SettingUpdateOneWithoutUserNestedInputObjectSchema as SettingUpdateOneWithoutUserNestedInputObjectSchema } from './SettingUpdateOneWithoutUserNestedInput.schema';
import { SmartDeviceUpdateManyWithoutUserNestedInputObjectSchema as SmartDeviceUpdateManyWithoutUserNestedInputObjectSchema } from './SmartDeviceUpdateManyWithoutUserNestedInput.schema';
import { SolveUpdateManyWithoutUserNestedInputObjectSchema as SolveUpdateManyWithoutUserNestedInputObjectSchema } from './SolveUpdateManyWithoutUserNestedInput.schema';
import { SolveViewUpdateManyWithoutUserNestedInputObjectSchema as SolveViewUpdateManyWithoutUserNestedInputObjectSchema } from './SolveViewUpdateManyWithoutUserNestedInput.schema';
import { SolveViewUpdateManyWithoutViewerNestedInputObjectSchema as SolveViewUpdateManyWithoutViewerNestedInputObjectSchema } from './SolveViewUpdateManyWithoutViewerNestedInput.schema';
import { TimerBackgroundUpdateOneWithoutUserNestedInputObjectSchema as TimerBackgroundUpdateOneWithoutUserNestedInputObjectSchema } from './TimerBackgroundUpdateOneWithoutUserNestedInput.schema';
import { TopAverageUpdateManyWithoutUserNestedInputObjectSchema as TopAverageUpdateManyWithoutUserNestedInputObjectSchema } from './TopAverageUpdateManyWithoutUserNestedInput.schema';
import { TopSolveUpdateManyWithoutUserNestedInputObjectSchema as TopSolveUpdateManyWithoutUserNestedInputObjectSchema } from './TopSolveUpdateManyWithoutUserNestedInput.schema';
import { TrainerFavoriteUpdateManyWithoutUserNestedInputObjectSchema as TrainerFavoriteUpdateManyWithoutUserNestedInputObjectSchema } from './TrainerFavoriteUpdateManyWithoutUserNestedInput.schema';
import { UserFeatureStateUpdateOneWithoutUserNestedInputObjectSchema as UserFeatureStateUpdateOneWithoutUserNestedInputObjectSchema } from './UserFeatureStateUpdateOneWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  first_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  join_ip: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  join_country: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  admin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  last_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  banned_forever: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  banned_until: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  stripe_customer_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_pro: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  mod: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  offline_hash: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  unsub_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  last_solve_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  action_log: z.lazy(() => ActionLogUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ad_views: z.lazy(() => AdViewUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  algorithm_override: z.lazy(() => AlgorithmOverrideUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  badges: z.lazy(() => BadgeUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  badge_type: z.lazy(() => BadgeTypeUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  bans: z.lazy(() => BanLogUpdateManyWithoutBanned_userNestedInputObjectSchema).optional(),
  created_bans: z.lazy(() => BanLogUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  chat_messages: z.lazy(() => ChatMessageUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  custom_trainer_downloads: z.lazy(() => CustomTrainerDownloadUpdateManyWithoutCreatorNestedInputObjectSchema).optional(),
  custom_trainer_downloaded: z.lazy(() => CustomTrainerDownloadUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  custom_trainer_likes: z.lazy(() => CustomTrainerLikeUpdateManyWithoutCreatorNestedInputObjectSchema).optional(),
  liked_custom_trainers: z.lazy(() => CustomTrainerLikeUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  elo_log_opponent: z.lazy(() => EloLogUpdateManyWithoutOpponentNestedInputObjectSchema).optional(),
  elo_log_player: z.lazy(() => EloLogUpdateManyWithoutPlayerNestedInputObjectSchema).optional(),
  elo_rating: z.lazy(() => EloRatingUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  email_log: z.lazy(() => EmailLogUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  forgot_password: z.lazy(() => ForgotPasswordUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  friendships_other: z.lazy(() => FriendshipUpdateManyWithoutOther_userNestedInputObjectSchema).optional(),
  friendship_requests_sent: z.lazy(() => FriendshipRequestUpdateManyWithoutFrom_userNestedInputObjectSchema).optional(),
  friendships_requests_received: z.lazy(() => FriendshipRequestUpdateManyWithoutTo_userNestedInputObjectSchema).optional(),
  game_sessions: z.lazy(() => GameSessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  image: z.lazy(() => ImageUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  integrations: z.lazy(() => IntegrationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  matches_won: z.lazy(() => MatchUpdateManyWithoutWinnerNestedInputObjectSchema).optional(),
  match_lobbies: z.lazy(() => MatchLobbyUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  match_participations: z.lazy(() => MatchParticipantUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  match_sessions_created: z.lazy(() => MatchSessionUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  metric_logs: z.lazy(() => MetricLogUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  notifications_triggered: z.lazy(() => NotificationUpdateManyWithoutTriggering_userNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  notification_preferences: z.lazy(() => NotificationPreferenceUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  profile_views: z.lazy(() => ProfileViewUpdateManyWithoutProfile_userNestedInputObjectSchema).optional(),
  viewed_profiles: z.lazy(() => ProfileViewUpdateManyWithoutViewerNestedInputObjectSchema).optional(),
  reports_created: z.lazy(() => ReportUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  reports_for: z.lazy(() => ReportUpdateManyWithoutReported_userNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  settings: z.lazy(() => SettingUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  viewed_solve: z.lazy(() => SolveViewUpdateManyWithoutViewerNestedInputObjectSchema).optional(),
  timer_background: z.lazy(() => TimerBackgroundUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  top_average: z.lazy(() => TopAverageUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  top_solves: z.lazy(() => TopSolveUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  trainer_favorite: z.lazy(() => TrainerFavoriteUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  user_feature_state: z.lazy(() => UserFeatureStateUpdateOneWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserAccountUpdateWithoutFriendshipsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateWithoutFriendshipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateWithoutFriendshipsInput>;
export const UserAccountUpdateWithoutFriendshipsInputObjectZodSchema = makeSchema();
