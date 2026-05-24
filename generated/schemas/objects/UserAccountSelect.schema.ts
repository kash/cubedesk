import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogFindManySchema as ActionLogFindManySchema } from '../findManyActionLog.schema';
import { AdViewFindManySchema as AdViewFindManySchema } from '../findManyAdView.schema';
import { AlgorithmOverrideFindManySchema as AlgorithmOverrideFindManySchema } from '../findManyAlgorithmOverride.schema';
import { BadgeFindManySchema as BadgeFindManySchema } from '../findManyBadge.schema';
import { BadgeTypeFindManySchema as BadgeTypeFindManySchema } from '../findManyBadgeType.schema';
import { BanLogFindManySchema as BanLogFindManySchema } from '../findManyBanLog.schema';
import { ChatMessageFindManySchema as ChatMessageFindManySchema } from '../findManyChatMessage.schema';
import { CustomTrainerFindManySchema as CustomTrainerFindManySchema } from '../findManyCustomTrainer.schema';
import { CustomTrainerDownloadFindManySchema as CustomTrainerDownloadFindManySchema } from '../findManyCustomTrainerDownload.schema';
import { CustomTrainerLikeFindManySchema as CustomTrainerLikeFindManySchema } from '../findManyCustomTrainerLike.schema';
import { EloLogFindManySchema as EloLogFindManySchema } from '../findManyEloLog.schema';
import { EloRatingArgsObjectSchema as EloRatingArgsObjectSchema } from './EloRatingArgs.schema';
import { EmailLogFindManySchema as EmailLogFindManySchema } from '../findManyEmailLog.schema';
import { ForgotPasswordFindManySchema as ForgotPasswordFindManySchema } from '../findManyForgotPassword.schema';
import { FriendshipFindManySchema as FriendshipFindManySchema } from '../findManyFriendship.schema';
import { FriendshipRequestFindManySchema as FriendshipRequestFindManySchema } from '../findManyFriendshipRequest.schema';
import { GameSessionFindManySchema as GameSessionFindManySchema } from '../findManyGameSession.schema';
import { ImageFindManySchema as ImageFindManySchema } from '../findManyImage.schema';
import { IntegrationFindManySchema as IntegrationFindManySchema } from '../findManyIntegration.schema';
import { MatchFindManySchema as MatchFindManySchema } from '../findManyMatch.schema';
import { MatchLobbyFindManySchema as MatchLobbyFindManySchema } from '../findManyMatchLobby.schema';
import { MatchParticipantFindManySchema as MatchParticipantFindManySchema } from '../findManyMatchParticipant.schema';
import { MatchSessionFindManySchema as MatchSessionFindManySchema } from '../findManyMatchSession.schema';
import { MetricLogFindManySchema as MetricLogFindManySchema } from '../findManyMetricLog.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { NotificationPreferenceArgsObjectSchema as NotificationPreferenceArgsObjectSchema } from './NotificationPreferenceArgs.schema';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { ProfileViewFindManySchema as ProfileViewFindManySchema } from '../findManyProfileView.schema';
import { ReportFindManySchema as ReportFindManySchema } from '../findManyReport.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { SettingArgsObjectSchema as SettingArgsObjectSchema } from './SettingArgs.schema';
import { SmartDeviceFindManySchema as SmartDeviceFindManySchema } from '../findManySmartDevice.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { SolveViewFindManySchema as SolveViewFindManySchema } from '../findManySolveView.schema';
import { TimerBackgroundArgsObjectSchema as TimerBackgroundArgsObjectSchema } from './TimerBackgroundArgs.schema';
import { TopAverageFindManySchema as TopAverageFindManySchema } from '../findManyTopAverage.schema';
import { TopSolveFindManySchema as TopSolveFindManySchema } from '../findManyTopSolve.schema';
import { TrainerFavoriteFindManySchema as TrainerFavoriteFindManySchema } from '../findManyTrainerFavorite.schema';
import { UserFeatureStateArgsObjectSchema as UserFeatureStateArgsObjectSchema } from './UserFeatureStateArgs.schema';
import { UserAccountCountOutputTypeArgsObjectSchema as UserAccountCountOutputTypeArgsObjectSchema } from './UserAccountCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  first_name: z.boolean().optional(),
  join_ip: z.boolean().optional(),
  join_country: z.boolean().optional(),
  admin: z.boolean().optional(),
  created_at: z.boolean().optional(),
  last_name: z.boolean().optional(),
  username: z.boolean().optional(),
  verified: z.boolean().optional(),
  banned_forever: z.boolean().optional(),
  banned_until: z.boolean().optional(),
  stripe_customer_id: z.boolean().optional(),
  is_pro: z.boolean().optional(),
  mod: z.boolean().optional(),
  offline_hash: z.boolean().optional(),
  unsub_id: z.boolean().optional(),
  last_solve_at: z.boolean().optional(),
  action_log: z.union([z.boolean(), z.lazy(() => ActionLogFindManySchema)]).optional(),
  ad_views: z.union([z.boolean(), z.lazy(() => AdViewFindManySchema)]).optional(),
  algorithm_override: z.union([z.boolean(), z.lazy(() => AlgorithmOverrideFindManySchema)]).optional(),
  badges: z.union([z.boolean(), z.lazy(() => BadgeFindManySchema)]).optional(),
  badge_type: z.union([z.boolean(), z.lazy(() => BadgeTypeFindManySchema)]).optional(),
  bans: z.union([z.boolean(), z.lazy(() => BanLogFindManySchema)]).optional(),
  created_bans: z.union([z.boolean(), z.lazy(() => BanLogFindManySchema)]).optional(),
  chat_messages: z.union([z.boolean(), z.lazy(() => ChatMessageFindManySchema)]).optional(),
  custom_trainer: z.union([z.boolean(), z.lazy(() => CustomTrainerFindManySchema)]).optional(),
  custom_trainer_downloads: z.union([z.boolean(), z.lazy(() => CustomTrainerDownloadFindManySchema)]).optional(),
  custom_trainer_downloaded: z.union([z.boolean(), z.lazy(() => CustomTrainerDownloadFindManySchema)]).optional(),
  custom_trainer_likes: z.union([z.boolean(), z.lazy(() => CustomTrainerLikeFindManySchema)]).optional(),
  liked_custom_trainers: z.union([z.boolean(), z.lazy(() => CustomTrainerLikeFindManySchema)]).optional(),
  elo_log_opponent: z.union([z.boolean(), z.lazy(() => EloLogFindManySchema)]).optional(),
  elo_log_player: z.union([z.boolean(), z.lazy(() => EloLogFindManySchema)]).optional(),
  elo_rating: z.union([z.boolean(), z.lazy(() => EloRatingArgsObjectSchema)]).optional(),
  email_log: z.union([z.boolean(), z.lazy(() => EmailLogFindManySchema)]).optional(),
  forgot_password: z.union([z.boolean(), z.lazy(() => ForgotPasswordFindManySchema)]).optional(),
  friendships_other: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  friendships: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  friendship_requests_sent: z.union([z.boolean(), z.lazy(() => FriendshipRequestFindManySchema)]).optional(),
  friendships_requests_received: z.union([z.boolean(), z.lazy(() => FriendshipRequestFindManySchema)]).optional(),
  game_sessions: z.union([z.boolean(), z.lazy(() => GameSessionFindManySchema)]).optional(),
  image: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  integrations: z.union([z.boolean(), z.lazy(() => IntegrationFindManySchema)]).optional(),
  matches_won: z.union([z.boolean(), z.lazy(() => MatchFindManySchema)]).optional(),
  match_lobbies: z.union([z.boolean(), z.lazy(() => MatchLobbyFindManySchema)]).optional(),
  match_participations: z.union([z.boolean(), z.lazy(() => MatchParticipantFindManySchema)]).optional(),
  match_sessions_created: z.union([z.boolean(), z.lazy(() => MatchSessionFindManySchema)]).optional(),
  metric_logs: z.union([z.boolean(), z.lazy(() => MetricLogFindManySchema)]).optional(),
  notifications_triggered: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  notification_preferences: z.union([z.boolean(), z.lazy(() => NotificationPreferenceArgsObjectSchema)]).optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  profile_views: z.union([z.boolean(), z.lazy(() => ProfileViewFindManySchema)]).optional(),
  viewed_profiles: z.union([z.boolean(), z.lazy(() => ProfileViewFindManySchema)]).optional(),
  reports_created: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  reports_for: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  settings: z.union([z.boolean(), z.lazy(() => SettingArgsObjectSchema)]).optional(),
  smart_device: z.union([z.boolean(), z.lazy(() => SmartDeviceFindManySchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  solve_views: z.union([z.boolean(), z.lazy(() => SolveViewFindManySchema)]).optional(),
  viewed_solve: z.union([z.boolean(), z.lazy(() => SolveViewFindManySchema)]).optional(),
  timer_background: z.union([z.boolean(), z.lazy(() => TimerBackgroundArgsObjectSchema)]).optional(),
  top_average: z.union([z.boolean(), z.lazy(() => TopAverageFindManySchema)]).optional(),
  top_solves: z.union([z.boolean(), z.lazy(() => TopSolveFindManySchema)]).optional(),
  trainer_favorite: z.union([z.boolean(), z.lazy(() => TrainerFavoriteFindManySchema)]).optional(),
  user_feature_state: z.union([z.boolean(), z.lazy(() => UserFeatureStateArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserAccountCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserAccountSelectObjectSchema: z.ZodType<Prisma.UserAccountSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountSelect>;
export const UserAccountSelectObjectZodSchema = makeSchema();
