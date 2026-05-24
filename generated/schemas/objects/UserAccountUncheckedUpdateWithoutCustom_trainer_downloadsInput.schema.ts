import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ActionLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ActionLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ActionLogUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AdViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AdViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AdViewUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AlgorithmOverrideUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AlgorithmOverrideUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AlgorithmOverrideUncheckedUpdateManyWithoutUserNestedInput.schema';
import { BadgeUncheckedUpdateManyWithoutUserNestedInputObjectSchema as BadgeUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './BadgeUncheckedUpdateManyWithoutUserNestedInput.schema';
import { BadgeTypeUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema as BadgeTypeUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema } from './BadgeTypeUncheckedUpdateManyWithoutCreated_byNestedInput.schema';
import { BanLogUncheckedUpdateManyWithoutBanned_userNestedInputObjectSchema as BanLogUncheckedUpdateManyWithoutBanned_userNestedInputObjectSchema } from './BanLogUncheckedUpdateManyWithoutBanned_userNestedInput.schema';
import { BanLogUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema as BanLogUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema } from './BanLogUncheckedUpdateManyWithoutCreated_byNestedInput.schema';
import { ChatMessageUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ChatMessageUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ChatMessageUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CustomTrainerUncheckedUpdateManyWithoutUserNestedInputObjectSchema as CustomTrainerUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CustomTrainerUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CustomTrainerDownloadUncheckedUpdateManyWithoutUserNestedInputObjectSchema as CustomTrainerDownloadUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CustomTrainerDownloadUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema as CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInput.schema';
import { CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInputObjectSchema as CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInput.schema';
import { EloLogUncheckedUpdateManyWithoutOpponentNestedInputObjectSchema as EloLogUncheckedUpdateManyWithoutOpponentNestedInputObjectSchema } from './EloLogUncheckedUpdateManyWithoutOpponentNestedInput.schema';
import { EloLogUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema as EloLogUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema } from './EloLogUncheckedUpdateManyWithoutPlayerNestedInput.schema';
import { EloRatingUncheckedUpdateOneWithoutUserNestedInputObjectSchema as EloRatingUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './EloRatingUncheckedUpdateOneWithoutUserNestedInput.schema';
import { EmailLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema as EmailLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './EmailLogUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ForgotPasswordUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ForgotPasswordUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ForgotPasswordUncheckedUpdateManyWithoutUserNestedInput.schema';
import { FriendshipUncheckedUpdateManyWithoutOther_userNestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutOther_userNestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutOther_userNestedInput.schema';
import { FriendshipUncheckedUpdateManyWithoutUserNestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutUserNestedInput.schema';
import { FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInputObjectSchema as FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInputObjectSchema } from './FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInput.schema';
import { FriendshipRequestUncheckedUpdateManyWithoutTo_userNestedInputObjectSchema as FriendshipRequestUncheckedUpdateManyWithoutTo_userNestedInputObjectSchema } from './FriendshipRequestUncheckedUpdateManyWithoutTo_userNestedInput.schema';
import { GameSessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema as GameSessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './GameSessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ImageUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ImageUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutUserNestedInput.schema';
import { IntegrationUncheckedUpdateManyWithoutUserNestedInputObjectSchema as IntegrationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './IntegrationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { MatchUncheckedUpdateManyWithoutWinnerNestedInputObjectSchema as MatchUncheckedUpdateManyWithoutWinnerNestedInputObjectSchema } from './MatchUncheckedUpdateManyWithoutWinnerNestedInput.schema';
import { MatchLobbyUncheckedUpdateManyWithoutUserNestedInputObjectSchema as MatchLobbyUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MatchLobbyUncheckedUpdateManyWithoutUserNestedInput.schema';
import { MatchParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema as MatchParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MatchParticipantUncheckedUpdateManyWithoutUserNestedInput.schema';
import { MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema as MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema } from './MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInput.schema';
import { MetricLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema as MetricLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MetricLogUncheckedUpdateManyWithoutUserNestedInput.schema';
import { NotificationUncheckedUpdateManyWithoutTriggering_userNestedInputObjectSchema as NotificationUncheckedUpdateManyWithoutTriggering_userNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutTriggering_userNestedInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema as NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInputObjectSchema as NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput.schema';
import { ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema as ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './ProfileUncheckedUpdateOneWithoutUserNestedInput.schema';
import { ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInputObjectSchema as ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInputObjectSchema } from './ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInput.schema';
import { ProfileViewUncheckedUpdateManyWithoutViewerNestedInputObjectSchema as ProfileViewUncheckedUpdateManyWithoutViewerNestedInputObjectSchema } from './ProfileViewUncheckedUpdateManyWithoutViewerNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCreated_byNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutReported_userNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutReported_userNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutReported_userNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SettingUncheckedUpdateOneWithoutUserNestedInputObjectSchema as SettingUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './SettingUncheckedUpdateOneWithoutUserNestedInput.schema';
import { SmartDeviceUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SmartDeviceUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SmartDeviceUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SolveUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SolveUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SolveUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SolveViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SolveViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SolveViewUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SolveViewUncheckedUpdateManyWithoutViewerNestedInputObjectSchema as SolveViewUncheckedUpdateManyWithoutViewerNestedInputObjectSchema } from './SolveViewUncheckedUpdateManyWithoutViewerNestedInput.schema';
import { TimerBackgroundUncheckedUpdateOneWithoutUserNestedInputObjectSchema as TimerBackgroundUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './TimerBackgroundUncheckedUpdateOneWithoutUserNestedInput.schema';
import { TopAverageUncheckedUpdateManyWithoutUserNestedInputObjectSchema as TopAverageUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutUserNestedInput.schema';
import { TopSolveUncheckedUpdateManyWithoutUserNestedInputObjectSchema as TopSolveUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TopSolveUncheckedUpdateManyWithoutUserNestedInput.schema';
import { TrainerFavoriteUncheckedUpdateManyWithoutUserNestedInputObjectSchema as TrainerFavoriteUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TrainerFavoriteUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserFeatureStateUncheckedUpdateOneWithoutUserNestedInputObjectSchema as UserFeatureStateUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './UserFeatureStateUncheckedUpdateOneWithoutUserNestedInput.schema'

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
  action_log: z.lazy(() => ActionLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ad_views: z.lazy(() => AdViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  algorithm_override: z.lazy(() => AlgorithmOverrideUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  badges: z.lazy(() => BadgeUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  badge_type: z.lazy(() => BadgeTypeUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  bans: z.lazy(() => BanLogUncheckedUpdateManyWithoutBanned_userNestedInputObjectSchema).optional(),
  created_bans: z.lazy(() => BanLogUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  chat_messages: z.lazy(() => ChatMessageUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  custom_trainer_downloaded: z.lazy(() => CustomTrainerDownloadUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  custom_trainer_likes: z.lazy(() => CustomTrainerLikeUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema).optional(),
  liked_custom_trainers: z.lazy(() => CustomTrainerLikeUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  elo_log_opponent: z.lazy(() => EloLogUncheckedUpdateManyWithoutOpponentNestedInputObjectSchema).optional(),
  elo_log_player: z.lazy(() => EloLogUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema).optional(),
  elo_rating: z.lazy(() => EloRatingUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  email_log: z.lazy(() => EmailLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  forgot_password: z.lazy(() => ForgotPasswordUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  friendships_other: z.lazy(() => FriendshipUncheckedUpdateManyWithoutOther_userNestedInputObjectSchema).optional(),
  friendships: z.lazy(() => FriendshipUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  friendship_requests_sent: z.lazy(() => FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInputObjectSchema).optional(),
  friendships_requests_received: z.lazy(() => FriendshipRequestUncheckedUpdateManyWithoutTo_userNestedInputObjectSchema).optional(),
  game_sessions: z.lazy(() => GameSessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  image: z.lazy(() => ImageUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  integrations: z.lazy(() => IntegrationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  matches_won: z.lazy(() => MatchUncheckedUpdateManyWithoutWinnerNestedInputObjectSchema).optional(),
  match_lobbies: z.lazy(() => MatchLobbyUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  match_participations: z.lazy(() => MatchParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  match_sessions_created: z.lazy(() => MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  metric_logs: z.lazy(() => MetricLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  notifications_triggered: z.lazy(() => NotificationUncheckedUpdateManyWithoutTriggering_userNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  notification_preferences: z.lazy(() => NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  profile_views: z.lazy(() => ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInputObjectSchema).optional(),
  viewed_profiles: z.lazy(() => ProfileViewUncheckedUpdateManyWithoutViewerNestedInputObjectSchema).optional(),
  reports_created: z.lazy(() => ReportUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema).optional(),
  reports_for: z.lazy(() => ReportUncheckedUpdateManyWithoutReported_userNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  settings: z.lazy(() => SettingUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  viewed_solve: z.lazy(() => SolveViewUncheckedUpdateManyWithoutViewerNestedInputObjectSchema).optional(),
  timer_background: z.lazy(() => TimerBackgroundUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  top_average: z.lazy(() => TopAverageUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  top_solves: z.lazy(() => TopSolveUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  trainer_favorite: z.lazy(() => TrainerFavoriteUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  user_feature_state: z.lazy(() => UserFeatureStateUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInput>;
export const UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectZodSchema = makeSchema();
