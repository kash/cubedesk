import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogCreateNestedManyWithoutUserInputObjectSchema as ActionLogCreateNestedManyWithoutUserInputObjectSchema } from './ActionLogCreateNestedManyWithoutUserInput.schema';
import { AdViewCreateNestedManyWithoutUserInputObjectSchema as AdViewCreateNestedManyWithoutUserInputObjectSchema } from './AdViewCreateNestedManyWithoutUserInput.schema';
import { AlgorithmOverrideCreateNestedManyWithoutUserInputObjectSchema as AlgorithmOverrideCreateNestedManyWithoutUserInputObjectSchema } from './AlgorithmOverrideCreateNestedManyWithoutUserInput.schema';
import { BadgeCreateNestedManyWithoutUserInputObjectSchema as BadgeCreateNestedManyWithoutUserInputObjectSchema } from './BadgeCreateNestedManyWithoutUserInput.schema';
import { BadgeTypeCreateNestedManyWithoutCreated_byInputObjectSchema as BadgeTypeCreateNestedManyWithoutCreated_byInputObjectSchema } from './BadgeTypeCreateNestedManyWithoutCreated_byInput.schema';
import { BanLogCreateNestedManyWithoutBanned_userInputObjectSchema as BanLogCreateNestedManyWithoutBanned_userInputObjectSchema } from './BanLogCreateNestedManyWithoutBanned_userInput.schema';
import { BanLogCreateNestedManyWithoutCreated_byInputObjectSchema as BanLogCreateNestedManyWithoutCreated_byInputObjectSchema } from './BanLogCreateNestedManyWithoutCreated_byInput.schema';
import { ChatMessageCreateNestedManyWithoutUserInputObjectSchema as ChatMessageCreateNestedManyWithoutUserInputObjectSchema } from './ChatMessageCreateNestedManyWithoutUserInput.schema';
import { CustomTrainerCreateNestedManyWithoutUserInputObjectSchema as CustomTrainerCreateNestedManyWithoutUserInputObjectSchema } from './CustomTrainerCreateNestedManyWithoutUserInput.schema';
import { CustomTrainerDownloadCreateNestedManyWithoutCreatorInputObjectSchema as CustomTrainerDownloadCreateNestedManyWithoutCreatorInputObjectSchema } from './CustomTrainerDownloadCreateNestedManyWithoutCreatorInput.schema';
import { CustomTrainerDownloadCreateNestedManyWithoutUserInputObjectSchema as CustomTrainerDownloadCreateNestedManyWithoutUserInputObjectSchema } from './CustomTrainerDownloadCreateNestedManyWithoutUserInput.schema';
import { CustomTrainerLikeCreateNestedManyWithoutCreatorInputObjectSchema as CustomTrainerLikeCreateNestedManyWithoutCreatorInputObjectSchema } from './CustomTrainerLikeCreateNestedManyWithoutCreatorInput.schema';
import { CustomTrainerLikeCreateNestedManyWithoutUserInputObjectSchema as CustomTrainerLikeCreateNestedManyWithoutUserInputObjectSchema } from './CustomTrainerLikeCreateNestedManyWithoutUserInput.schema';
import { EloLogCreateNestedManyWithoutOpponentInputObjectSchema as EloLogCreateNestedManyWithoutOpponentInputObjectSchema } from './EloLogCreateNestedManyWithoutOpponentInput.schema';
import { EloLogCreateNestedManyWithoutPlayerInputObjectSchema as EloLogCreateNestedManyWithoutPlayerInputObjectSchema } from './EloLogCreateNestedManyWithoutPlayerInput.schema';
import { EloRatingCreateNestedOneWithoutUserInputObjectSchema as EloRatingCreateNestedOneWithoutUserInputObjectSchema } from './EloRatingCreateNestedOneWithoutUserInput.schema';
import { EmailLogCreateNestedManyWithoutUserInputObjectSchema as EmailLogCreateNestedManyWithoutUserInputObjectSchema } from './EmailLogCreateNestedManyWithoutUserInput.schema';
import { ForgotPasswordCreateNestedManyWithoutUserInputObjectSchema as ForgotPasswordCreateNestedManyWithoutUserInputObjectSchema } from './ForgotPasswordCreateNestedManyWithoutUserInput.schema';
import { FriendshipCreateNestedManyWithoutOther_userInputObjectSchema as FriendshipCreateNestedManyWithoutOther_userInputObjectSchema } from './FriendshipCreateNestedManyWithoutOther_userInput.schema';
import { FriendshipCreateNestedManyWithoutUserInputObjectSchema as FriendshipCreateNestedManyWithoutUserInputObjectSchema } from './FriendshipCreateNestedManyWithoutUserInput.schema';
import { FriendshipRequestCreateNestedManyWithoutFrom_userInputObjectSchema as FriendshipRequestCreateNestedManyWithoutFrom_userInputObjectSchema } from './FriendshipRequestCreateNestedManyWithoutFrom_userInput.schema';
import { FriendshipRequestCreateNestedManyWithoutTo_userInputObjectSchema as FriendshipRequestCreateNestedManyWithoutTo_userInputObjectSchema } from './FriendshipRequestCreateNestedManyWithoutTo_userInput.schema';
import { GameSessionCreateNestedManyWithoutUserInputObjectSchema as GameSessionCreateNestedManyWithoutUserInputObjectSchema } from './GameSessionCreateNestedManyWithoutUserInput.schema';
import { ImageCreateNestedManyWithoutUserInputObjectSchema as ImageCreateNestedManyWithoutUserInputObjectSchema } from './ImageCreateNestedManyWithoutUserInput.schema';
import { IntegrationCreateNestedManyWithoutUserInputObjectSchema as IntegrationCreateNestedManyWithoutUserInputObjectSchema } from './IntegrationCreateNestedManyWithoutUserInput.schema';
import { MatchCreateNestedManyWithoutWinnerInputObjectSchema as MatchCreateNestedManyWithoutWinnerInputObjectSchema } from './MatchCreateNestedManyWithoutWinnerInput.schema';
import { MatchLobbyCreateNestedManyWithoutUserInputObjectSchema as MatchLobbyCreateNestedManyWithoutUserInputObjectSchema } from './MatchLobbyCreateNestedManyWithoutUserInput.schema';
import { MatchParticipantCreateNestedManyWithoutUserInputObjectSchema as MatchParticipantCreateNestedManyWithoutUserInputObjectSchema } from './MatchParticipantCreateNestedManyWithoutUserInput.schema';
import { MatchSessionCreateNestedManyWithoutCreated_byInputObjectSchema as MatchSessionCreateNestedManyWithoutCreated_byInputObjectSchema } from './MatchSessionCreateNestedManyWithoutCreated_byInput.schema';
import { MetricLogCreateNestedManyWithoutUserInputObjectSchema as MetricLogCreateNestedManyWithoutUserInputObjectSchema } from './MetricLogCreateNestedManyWithoutUserInput.schema';
import { NotificationCreateNestedManyWithoutTriggering_userInputObjectSchema as NotificationCreateNestedManyWithoutTriggering_userInputObjectSchema } from './NotificationCreateNestedManyWithoutTriggering_userInput.schema';
import { NotificationPreferenceCreateNestedOneWithoutUserInputObjectSchema as NotificationPreferenceCreateNestedOneWithoutUserInputObjectSchema } from './NotificationPreferenceCreateNestedOneWithoutUserInput.schema';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema as ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema';
import { ProfileViewCreateNestedManyWithoutProfile_userInputObjectSchema as ProfileViewCreateNestedManyWithoutProfile_userInputObjectSchema } from './ProfileViewCreateNestedManyWithoutProfile_userInput.schema';
import { ProfileViewCreateNestedManyWithoutViewerInputObjectSchema as ProfileViewCreateNestedManyWithoutViewerInputObjectSchema } from './ProfileViewCreateNestedManyWithoutViewerInput.schema';
import { ReportCreateNestedManyWithoutCreated_byInputObjectSchema as ReportCreateNestedManyWithoutCreated_byInputObjectSchema } from './ReportCreateNestedManyWithoutCreated_byInput.schema';
import { ReportCreateNestedManyWithoutReported_userInputObjectSchema as ReportCreateNestedManyWithoutReported_userInputObjectSchema } from './ReportCreateNestedManyWithoutReported_userInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { SettingCreateNestedOneWithoutUserInputObjectSchema as SettingCreateNestedOneWithoutUserInputObjectSchema } from './SettingCreateNestedOneWithoutUserInput.schema';
import { SmartDeviceCreateNestedManyWithoutUserInputObjectSchema as SmartDeviceCreateNestedManyWithoutUserInputObjectSchema } from './SmartDeviceCreateNestedManyWithoutUserInput.schema';
import { SolveCreateNestedManyWithoutUserInputObjectSchema as SolveCreateNestedManyWithoutUserInputObjectSchema } from './SolveCreateNestedManyWithoutUserInput.schema';
import { SolveViewCreateNestedManyWithoutUserInputObjectSchema as SolveViewCreateNestedManyWithoutUserInputObjectSchema } from './SolveViewCreateNestedManyWithoutUserInput.schema';
import { SolveViewCreateNestedManyWithoutViewerInputObjectSchema as SolveViewCreateNestedManyWithoutViewerInputObjectSchema } from './SolveViewCreateNestedManyWithoutViewerInput.schema';
import { TimerBackgroundCreateNestedOneWithoutUserInputObjectSchema as TimerBackgroundCreateNestedOneWithoutUserInputObjectSchema } from './TimerBackgroundCreateNestedOneWithoutUserInput.schema';
import { TopAverageCreateNestedManyWithoutUserInputObjectSchema as TopAverageCreateNestedManyWithoutUserInputObjectSchema } from './TopAverageCreateNestedManyWithoutUserInput.schema';
import { TopSolveCreateNestedManyWithoutUserInputObjectSchema as TopSolveCreateNestedManyWithoutUserInputObjectSchema } from './TopSolveCreateNestedManyWithoutUserInput.schema';
import { TrainerFavoriteCreateNestedManyWithoutUserInputObjectSchema as TrainerFavoriteCreateNestedManyWithoutUserInputObjectSchema } from './TrainerFavoriteCreateNestedManyWithoutUserInput.schema';
import { UserFeatureStateCreateNestedOneWithoutUserInputObjectSchema as UserFeatureStateCreateNestedOneWithoutUserInputObjectSchema } from './UserFeatureStateCreateNestedOneWithoutUserInput.schema'

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
  action_log: z.lazy(() => ActionLogCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ad_views: z.lazy(() => AdViewCreateNestedManyWithoutUserInputObjectSchema).optional(),
  algorithm_override: z.lazy(() => AlgorithmOverrideCreateNestedManyWithoutUserInputObjectSchema).optional(),
  badges: z.lazy(() => BadgeCreateNestedManyWithoutUserInputObjectSchema).optional(),
  badge_type: z.lazy(() => BadgeTypeCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  bans: z.lazy(() => BanLogCreateNestedManyWithoutBanned_userInputObjectSchema).optional(),
  created_bans: z.lazy(() => BanLogCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  chat_messages: z.lazy(() => ChatMessageCreateNestedManyWithoutUserInputObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerCreateNestedManyWithoutUserInputObjectSchema).optional(),
  custom_trainer_downloads: z.lazy(() => CustomTrainerDownloadCreateNestedManyWithoutCreatorInputObjectSchema).optional(),
  custom_trainer_downloaded: z.lazy(() => CustomTrainerDownloadCreateNestedManyWithoutUserInputObjectSchema).optional(),
  custom_trainer_likes: z.lazy(() => CustomTrainerLikeCreateNestedManyWithoutCreatorInputObjectSchema).optional(),
  liked_custom_trainers: z.lazy(() => CustomTrainerLikeCreateNestedManyWithoutUserInputObjectSchema).optional(),
  elo_log_opponent: z.lazy(() => EloLogCreateNestedManyWithoutOpponentInputObjectSchema).optional(),
  elo_log_player: z.lazy(() => EloLogCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  elo_rating: z.lazy(() => EloRatingCreateNestedOneWithoutUserInputObjectSchema).optional(),
  email_log: z.lazy(() => EmailLogCreateNestedManyWithoutUserInputObjectSchema).optional(),
  forgot_password: z.lazy(() => ForgotPasswordCreateNestedManyWithoutUserInputObjectSchema).optional(),
  friendships_other: z.lazy(() => FriendshipCreateNestedManyWithoutOther_userInputObjectSchema).optional(),
  friendships: z.lazy(() => FriendshipCreateNestedManyWithoutUserInputObjectSchema).optional(),
  friendship_requests_sent: z.lazy(() => FriendshipRequestCreateNestedManyWithoutFrom_userInputObjectSchema).optional(),
  friendships_requests_received: z.lazy(() => FriendshipRequestCreateNestedManyWithoutTo_userInputObjectSchema).optional(),
  game_sessions: z.lazy(() => GameSessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  image: z.lazy(() => ImageCreateNestedManyWithoutUserInputObjectSchema).optional(),
  integrations: z.lazy(() => IntegrationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  matches_won: z.lazy(() => MatchCreateNestedManyWithoutWinnerInputObjectSchema).optional(),
  match_lobbies: z.lazy(() => MatchLobbyCreateNestedManyWithoutUserInputObjectSchema).optional(),
  match_participations: z.lazy(() => MatchParticipantCreateNestedManyWithoutUserInputObjectSchema).optional(),
  match_sessions_created: z.lazy(() => MatchSessionCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  metric_logs: z.lazy(() => MetricLogCreateNestedManyWithoutUserInputObjectSchema).optional(),
  notifications_triggered: z.lazy(() => NotificationCreateNestedManyWithoutTriggering_userInputObjectSchema).optional(),
  notification_preferences: z.lazy(() => NotificationPreferenceCreateNestedOneWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
  profile_views: z.lazy(() => ProfileViewCreateNestedManyWithoutProfile_userInputObjectSchema).optional(),
  viewed_profiles: z.lazy(() => ProfileViewCreateNestedManyWithoutViewerInputObjectSchema).optional(),
  reports_created: z.lazy(() => ReportCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  reports_for: z.lazy(() => ReportCreateNestedManyWithoutReported_userInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  settings: z.lazy(() => SettingCreateNestedOneWithoutUserInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceCreateNestedManyWithoutUserInputObjectSchema).optional(),
  solves: z.lazy(() => SolveCreateNestedManyWithoutUserInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewCreateNestedManyWithoutUserInputObjectSchema).optional(),
  viewed_solve: z.lazy(() => SolveViewCreateNestedManyWithoutViewerInputObjectSchema).optional(),
  timer_background: z.lazy(() => TimerBackgroundCreateNestedOneWithoutUserInputObjectSchema).optional(),
  top_average: z.lazy(() => TopAverageCreateNestedManyWithoutUserInputObjectSchema).optional(),
  top_solves: z.lazy(() => TopSolveCreateNestedManyWithoutUserInputObjectSchema).optional(),
  trainer_favorite: z.lazy(() => TrainerFavoriteCreateNestedManyWithoutUserInputObjectSchema).optional(),
  user_feature_state: z.lazy(() => UserFeatureStateCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserAccountCreateWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateWithoutNotificationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateWithoutNotificationsInput>;
export const UserAccountCreateWithoutNotificationsInputObjectZodSchema = makeSchema();
