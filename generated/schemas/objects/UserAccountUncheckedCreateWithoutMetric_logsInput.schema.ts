import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogUncheckedCreateNestedManyWithoutUserInputObjectSchema as ActionLogUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ActionLogUncheckedCreateNestedManyWithoutUserInput.schema';
import { AdViewUncheckedCreateNestedManyWithoutUserInputObjectSchema as AdViewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AdViewUncheckedCreateNestedManyWithoutUserInput.schema';
import { AlgorithmOverrideUncheckedCreateNestedManyWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedCreateNestedManyWithoutUserInput.schema';
import { BadgeUncheckedCreateNestedManyWithoutUserInputObjectSchema as BadgeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BadgeUncheckedCreateNestedManyWithoutUserInput.schema';
import { BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { BanLogUncheckedCreateNestedManyWithoutBanned_userInputObjectSchema as BanLogUncheckedCreateNestedManyWithoutBanned_userInputObjectSchema } from './BanLogUncheckedCreateNestedManyWithoutBanned_userInput.schema';
import { BanLogUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema as BanLogUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './BanLogUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { ChatMessageUncheckedCreateNestedManyWithoutUserInputObjectSchema as ChatMessageUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ChatMessageUncheckedCreateNestedManyWithoutUserInput.schema';
import { CustomTrainerUncheckedCreateNestedManyWithoutUserInputObjectSchema as CustomTrainerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CustomTrainerUncheckedCreateNestedManyWithoutUserInput.schema';
import { CustomTrainerDownloadUncheckedCreateNestedManyWithoutCreatorInputObjectSchema as CustomTrainerDownloadUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { CustomTrainerDownloadUncheckedCreateNestedManyWithoutUserInputObjectSchema as CustomTrainerDownloadUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CustomTrainerDownloadUncheckedCreateNestedManyWithoutUserInput.schema';
import { CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { CustomTrainerLikeUncheckedCreateNestedManyWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedCreateNestedManyWithoutUserInput.schema';
import { EloLogUncheckedCreateNestedManyWithoutOpponentInputObjectSchema as EloLogUncheckedCreateNestedManyWithoutOpponentInputObjectSchema } from './EloLogUncheckedCreateNestedManyWithoutOpponentInput.schema';
import { EloLogUncheckedCreateNestedManyWithoutPlayerInputObjectSchema as EloLogUncheckedCreateNestedManyWithoutPlayerInputObjectSchema } from './EloLogUncheckedCreateNestedManyWithoutPlayerInput.schema';
import { EloRatingUncheckedCreateNestedOneWithoutUserInputObjectSchema as EloRatingUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './EloRatingUncheckedCreateNestedOneWithoutUserInput.schema';
import { EmailLogUncheckedCreateNestedManyWithoutUserInputObjectSchema as EmailLogUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './EmailLogUncheckedCreateNestedManyWithoutUserInput.schema';
import { ForgotPasswordUncheckedCreateNestedManyWithoutUserInputObjectSchema as ForgotPasswordUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedCreateNestedManyWithoutUserInput.schema';
import { FriendshipUncheckedCreateNestedManyWithoutOther_userInputObjectSchema as FriendshipUncheckedCreateNestedManyWithoutOther_userInputObjectSchema } from './FriendshipUncheckedCreateNestedManyWithoutOther_userInput.schema';
import { FriendshipUncheckedCreateNestedManyWithoutUserInputObjectSchema as FriendshipUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FriendshipUncheckedCreateNestedManyWithoutUserInput.schema';
import { FriendshipRequestUncheckedCreateNestedManyWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedCreateNestedManyWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedCreateNestedManyWithoutFrom_userInput.schema';
import { FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInput.schema';
import { GameSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as GameSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './GameSessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { ImageUncheckedCreateNestedManyWithoutUserInputObjectSchema as ImageUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutUserInput.schema';
import { IntegrationUncheckedCreateNestedManyWithoutUserInputObjectSchema as IntegrationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './IntegrationUncheckedCreateNestedManyWithoutUserInput.schema';
import { MatchUncheckedCreateNestedManyWithoutWinnerInputObjectSchema as MatchUncheckedCreateNestedManyWithoutWinnerInputObjectSchema } from './MatchUncheckedCreateNestedManyWithoutWinnerInput.schema';
import { MatchLobbyUncheckedCreateNestedManyWithoutUserInputObjectSchema as MatchLobbyUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MatchLobbyUncheckedCreateNestedManyWithoutUserInput.schema';
import { MatchParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema as MatchParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MatchParticipantUncheckedCreateNestedManyWithoutUserInput.schema';
import { MatchSessionUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema as MatchSessionUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutTriggering_userInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutTriggering_userInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { NotificationPreferenceUncheckedCreateNestedOneWithoutUserInputObjectSchema as NotificationPreferenceUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput.schema';
import { ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutUserInput.schema';
import { ProfileViewUncheckedCreateNestedManyWithoutProfile_userInputObjectSchema as ProfileViewUncheckedCreateNestedManyWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedCreateNestedManyWithoutProfile_userInput.schema';
import { ProfileViewUncheckedCreateNestedManyWithoutViewerInputObjectSchema as ProfileViewUncheckedCreateNestedManyWithoutViewerInputObjectSchema } from './ProfileViewUncheckedCreateNestedManyWithoutViewerInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema as ReportUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { ReportUncheckedCreateNestedManyWithoutReported_userInputObjectSchema as ReportUncheckedCreateNestedManyWithoutReported_userInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutReported_userInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { SettingUncheckedCreateNestedOneWithoutUserInputObjectSchema as SettingUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './SettingUncheckedCreateNestedOneWithoutUserInput.schema';
import { SmartDeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema as SmartDeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SmartDeviceUncheckedCreateNestedManyWithoutUserInput.schema';
import { SolveUncheckedCreateNestedManyWithoutUserInputObjectSchema as SolveUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SolveUncheckedCreateNestedManyWithoutUserInput.schema';
import { SolveViewUncheckedCreateNestedManyWithoutUserInputObjectSchema as SolveViewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SolveViewUncheckedCreateNestedManyWithoutUserInput.schema';
import { SolveViewUncheckedCreateNestedManyWithoutViewerInputObjectSchema as SolveViewUncheckedCreateNestedManyWithoutViewerInputObjectSchema } from './SolveViewUncheckedCreateNestedManyWithoutViewerInput.schema';
import { TimerBackgroundUncheckedCreateNestedOneWithoutUserInputObjectSchema as TimerBackgroundUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './TimerBackgroundUncheckedCreateNestedOneWithoutUserInput.schema';
import { TopAverageUncheckedCreateNestedManyWithoutUserInputObjectSchema as TopAverageUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TopAverageUncheckedCreateNestedManyWithoutUserInput.schema';
import { TopSolveUncheckedCreateNestedManyWithoutUserInputObjectSchema as TopSolveUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TopSolveUncheckedCreateNestedManyWithoutUserInput.schema';
import { TrainerFavoriteUncheckedCreateNestedManyWithoutUserInputObjectSchema as TrainerFavoriteUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserFeatureStateUncheckedCreateNestedOneWithoutUserInputObjectSchema as UserFeatureStateUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  first_name: z.string(),
  join_ip: z.string(),
  join_country: z.string(),
  admin: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  last_name: z.string(),
  username: z.string().optional().nullable(),
  verified: z.boolean().optional(),
  banned_forever: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  stripe_customer_id: z.string().optional().nullable(),
  is_pro: z.boolean().optional(),
  mod: z.boolean().optional(),
  offline_hash: z.string().optional().nullable(),
  unsub_id: z.string().optional().nullable(),
  last_solve_at: z.coerce.date().optional().nullable(),
  action_log: z.lazy(() => ActionLogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ad_views: z.lazy(() => AdViewUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  algorithm_override: z.lazy(() => AlgorithmOverrideUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  badges: z.lazy(() => BadgeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  badge_type: z.lazy(() => BadgeTypeUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  bans: z.lazy(() => BanLogUncheckedCreateNestedManyWithoutBanned_userInputObjectSchema).optional(),
  created_bans: z.lazy(() => BanLogUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  chat_messages: z.lazy(() => ChatMessageUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  custom_trainer_downloads: z.lazy(() => CustomTrainerDownloadUncheckedCreateNestedManyWithoutCreatorInputObjectSchema).optional(),
  custom_trainer_downloaded: z.lazy(() => CustomTrainerDownloadUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  custom_trainer_likes: z.lazy(() => CustomTrainerLikeUncheckedCreateNestedManyWithoutCreatorInputObjectSchema).optional(),
  liked_custom_trainers: z.lazy(() => CustomTrainerLikeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  elo_log_opponent: z.lazy(() => EloLogUncheckedCreateNestedManyWithoutOpponentInputObjectSchema).optional(),
  elo_log_player: z.lazy(() => EloLogUncheckedCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  elo_rating: z.lazy(() => EloRatingUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  email_log: z.lazy(() => EmailLogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  forgot_password: z.lazy(() => ForgotPasswordUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  friendships_other: z.lazy(() => FriendshipUncheckedCreateNestedManyWithoutOther_userInputObjectSchema).optional(),
  friendships: z.lazy(() => FriendshipUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  friendship_requests_sent: z.lazy(() => FriendshipRequestUncheckedCreateNestedManyWithoutFrom_userInputObjectSchema).optional(),
  friendships_requests_received: z.lazy(() => FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInputObjectSchema).optional(),
  game_sessions: z.lazy(() => GameSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  image: z.lazy(() => ImageUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  integrations: z.lazy(() => IntegrationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  matches_won: z.lazy(() => MatchUncheckedCreateNestedManyWithoutWinnerInputObjectSchema).optional(),
  match_lobbies: z.lazy(() => MatchLobbyUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  match_participations: z.lazy(() => MatchParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  match_sessions_created: z.lazy(() => MatchSessionUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  notifications_triggered: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutTriggering_userInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  notification_preferences: z.lazy(() => NotificationPreferenceUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  profile_views: z.lazy(() => ProfileViewUncheckedCreateNestedManyWithoutProfile_userInputObjectSchema).optional(),
  viewed_profiles: z.lazy(() => ProfileViewUncheckedCreateNestedManyWithoutViewerInputObjectSchema).optional(),
  reports_created: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  reports_for: z.lazy(() => ReportUncheckedCreateNestedManyWithoutReported_userInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  settings: z.lazy(() => SettingUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  viewed_solve: z.lazy(() => SolveViewUncheckedCreateNestedManyWithoutViewerInputObjectSchema).optional(),
  timer_background: z.lazy(() => TimerBackgroundUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  top_average: z.lazy(() => TopAverageUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  top_solves: z.lazy(() => TopSolveUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  trainer_favorite: z.lazy(() => TrainerFavoriteUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  user_feature_state: z.lazy(() => UserFeatureStateUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema: z.ZodType<Prisma.UserAccountUncheckedCreateWithoutMetric_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUncheckedCreateWithoutMetric_logsInput>;
export const UserAccountUncheckedCreateWithoutMetric_logsInputObjectZodSchema = makeSchema();
