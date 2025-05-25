import { z } from 'zod';
import type { Prisma } from '../../../node_modules/.prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserAccountScalarFieldEnumSchema = z.enum(['id','email','password','first_name','join_ip','join_country','admin','created_at','last_name','username','verified','banned_forever','banned_until','stripe_customer_id','is_pro','mod','offline_hash','unsub_id','last_solve_at']);

export const UserFeatureStateScalarFieldEnumSchema = z.enum(['id','user_id','received_welcome_screen','updated_at','created_at']);

export const IntegrationScalarFieldEnumSchema = z.enum(['id','user_id','service_name','auth_token','refresh_token','auth_expires_at','created_at']);

export const NotificationScalarFieldEnumSchema = z.enum(['id','user_id','notification_type','triggering_user_id','read_at','message','icon','link','created_at','notification_category_name','link_text','subject','in_app_message']);

export const ActionLogScalarFieldEnumSchema = z.enum(['id','user_email','action_type','action_details','created_at']);

export const MetricLogScalarFieldEnumSchema = z.enum(['id','user_email','metric_type','metric_value','metric_details','created_at']);

export const NotificationPreferenceScalarFieldEnumSchema = z.enum(['id','user_id','friend_request','friend_request_accept','created_at','marketing_emails','elo_refund']);

export const FriendshipRequestScalarFieldEnumSchema = z.enum(['id','from_id','to_id','created_at','accepted_at']);

export const FriendshipScalarFieldEnumSchema = z.enum(['id','user_id','other_user_id','friendship_request_id','created_at']);

export const EloRatingScalarFieldEnumSchema = z.enum(['id','user_id','elo_222_rating','elo_333_rating','elo_444_rating','updated_at','created_at','elo_overall_rating','profile_id','games_222_count','games_333_count','games_444_count','games_overall_count']);

export const EloLogScalarFieldEnumSchema = z.enum(['id','opponent_id','cube_type','elo_change','updated_at','created_at','match_id','player_id','opponent_new_elo_rating','opponent_new_game_count','player_new_elo_rating','player_new_game_count','refunded_at']);

export const AdViewScalarFieldEnumSchema = z.enum(['id','user_id','ip_address','ad_key','view_time_seconds','browser_session_id','clicked_at','updated_at','created_at','pathname','last_session_started_at']);

export const ProfileScalarFieldEnumSchema = z.enum(['id','user_id','header_image_id','pfp_image_id','created_at','bio','favorite_event','main_three_cube','three_goal','three_method','reddit_link','twitch_link','youtube_link','twitter_link','discord_id','show_discord_message_button']);

export const ImageScalarFieldEnumSchema = z.enum(['id','user_id','url','storage_path','created_at']);

export const ProfileViewScalarFieldEnumSchema = z.enum(['id','viewer_id','profile_id','created_at','profile_user_id']);

export const ForgotPasswordScalarFieldEnumSchema = z.enum(['id','user_id','code','claimed','created_at']);

export const SolveScalarFieldEnumSchema = z.enum(['id','user_id','time','raw_time','cube_type','scramble','session_id','started_at','ended_at','dnf','plus_two','notes','trainer_name','created_at','bulk','inspection_time','is_smart_cube','smart_put_down_time','smart_turns','smart_turn_count','smart_device_id','match_id','match_participant_id','share_code','from_timer','game_session_id','custom_scramble','training_session_id']);

export const DemoSolveScalarFieldEnumSchema = z.enum(['id','demo_session_id','ip_address','raw_time','cube_type','scramble','started_at','ended_at','updated_at','created_at']);

export const EmailLogScalarFieldEnumSchema = z.enum(['id','user_id','subject','template','vars','created_at','email']);

export const MatchSessionScalarFieldEnumSchema = z.enum(['id','min_players','max_players','match_type','custom_match','created_at','created_by_id','rated']);

export const MatchScalarFieldEnumSchema = z.enum(['id','winner_id','created_at','link_code','match_session_id','ended_at','started_at','spectate_code','aborted']);

export const MatchLobbyScalarFieldEnumSchema = z.enum(['id','user_id','cube_type','game_type','player_count','elo','created_at','client_id']);

export const MatchParticipantScalarFieldEnumSchema = z.enum(['id','match_id','user_id','created_at','resigned','forfeited','position','won','lost','abandoned','aborted']);

export const ChatMessageScalarFieldEnumSchema = z.enum(['id','user_id','match_session_id','message','created_at','bad_words','raw_message']);

export const SmartDeviceScalarFieldEnumSchema = z.enum(['id','name','internal_name','created_at','device_id','user_id']);

export const SolveMethodStepScalarFieldEnumSchema = z.enum(['id','solve_id','turn_count','turns','method_name','step_index','step_name','created_at','total_time','tps','parent_name','recognition_time','skipped','oll_case_key','pll_case_key']);

export const BadgeTypeScalarFieldEnumSchema = z.enum(['id','name','priority','color','created_at','description','created_by_id']);

export const BadgeScalarFieldEnumSchema = z.enum(['id','user_id','badge_type_id','created_at']);

export const TimerBackgroundScalarFieldEnumSchema = z.enum(['id','url','storage_path','user_id','hex','created_at']);

export const ReportScalarFieldEnumSchema = z.enum(['id','created_at','reason','created_by_id','reported_user_id','resolved_at']);

export const BanLogScalarFieldEnumSchema = z.enum(['id','created_by_id','banned_user_id','reason','active','banned_until','minutes','forever','created_at']);

export const SolveViewScalarFieldEnumSchema = z.enum(['id','solve_id','viewer_id','user_id','created_at']);

export const GameSessionScalarFieldEnumSchema = z.enum(['id','user_id','match_id','game_type','solve_count','total_time','created_at']);

export const GameOptionsScalarFieldEnumSchema = z.enum(['id','game_session_id','match_session_id','game_type','cube_type','elimination_starting_time_seconds','elimination_percent_change_rate','head_to_head_target_win_count','gauntlet_time_multiplier','created_at']);

export const TopSolveScalarFieldEnumSchema = z.enum(['id','user_id','time','solve_id','cube_type','created_at']);

export const TopAverageScalarFieldEnumSchema = z.enum(['id','user_id','time','cube_type','solve_1_id','solve_2_id','solve_3_id','solve_4_id','solve_5_id','created_at']);

export const SessionScalarFieldEnumSchema = z.enum(['id','name','user_id','created_at','order']);

export const CustomTrainerScalarFieldEnumSchema = z.enum(['id','colors','cube_type','key','user_id','created_at','name','like_count','private','copy_of_id','description','downloaded','group_name','scrambles','solution','alt_solutions','three_d','algo_type']);

export const CustomTrainerLikeScalarFieldEnumSchema = z.enum(['id','custom_trainer_id','user_id','created_at','creator_id']);

export const CustomTrainerDownloadScalarFieldEnumSchema = z.enum(['id','user_id','creator_id','created_at','new_trainer_id','source_trainer_id']);

export const TrainerFavoriteScalarFieldEnumSchema = z.enum(['id','cube_key','user_id','created_at']);

export const AlgorithmOverrideScalarFieldEnumSchema = z.enum(['id','user_id','rotate','cube_key','created_at','solution','name','scrambles']);

export const SettingScalarFieldEnumSchema = z.enum(['id','user_id','focus_mode','freeze_time','inspection','manual_entry','inspection_delay','inverse_time_list','hide_time_when_solving','nav_collapsed','pb_confetti','play_inspection_sound','zero_out_time_after_solve','confirm_delete_solve','require_period_in_manual_time_entry','created_at','cube_type','session_id','timer_decimal_points','beta_tester','use_space_with_smart_cube','inspection_auto_start','stats_module_json']);

export const CustomCubeTypeScalarFieldEnumSchema = z.enum(['id','user_id','name','created_at','scramble','private']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const GameTypeSchema = z.enum(['ELIMINATION','GAUNTLET','HEAD_TO_HEAD']);

export type GameTypeType = `${z.infer<typeof GameTypeSchema>}`

export const MetricLogTypeSchema = z.enum(['DELETE_USER_ACCOUNT']);

export type MetricLogTypeType = `${z.infer<typeof MetricLogTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER ACCOUNT SCHEMA
/////////////////////////////////////////

export const UserAccountSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  password: z.string(),
  first_name: z.string(),
  join_ip: z.string(),
  join_country: z.string(),
  admin: z.boolean(),
  created_at: z.coerce.date(),
  last_name: z.string(),
  username: z.string().nullable(),
  verified: z.boolean(),
  banned_forever: z.boolean(),
  banned_until: z.coerce.date().nullable(),
  stripe_customer_id: z.string().nullable(),
  is_pro: z.boolean(),
  mod: z.boolean(),
  offline_hash: z.string().nullable(),
  unsub_id: z.string().uuid().nullable(),
  last_solve_at: z.coerce.date().nullable(),
})

export type UserAccount = z.infer<typeof UserAccountSchema>

/////////////////////////////////////////
// USER FEATURE STATE SCHEMA
/////////////////////////////////////////

export const UserFeatureStateSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  received_welcome_screen: z.boolean(),
  updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
})

export type UserFeatureState = z.infer<typeof UserFeatureStateSchema>

/////////////////////////////////////////
// INTEGRATION SCHEMA
/////////////////////////////////////////

export const IntegrationSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  service_name: z.string(),
  auth_token: z.string(),
  refresh_token: z.string(),
  auth_expires_at: z.bigint(),
  created_at: z.coerce.date(),
})

export type Integration = z.infer<typeof IntegrationSchema>

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  notification_type: z.string(),
  triggering_user_id: z.string().nullable(),
  read_at: z.coerce.date().nullable(),
  message: z.string(),
  icon: z.string(),
  link: z.string(),
  created_at: z.coerce.date(),
  notification_category_name: z.string(),
  link_text: z.string(),
  subject: z.string(),
  in_app_message: z.string().nullable(),
})

export type Notification = z.infer<typeof NotificationSchema>

/////////////////////////////////////////
// ACTION LOG SCHEMA
/////////////////////////////////////////

export const ActionLogSchema = z.object({
  id: z.string().uuid(),
  user_email: z.string().nullable(),
  action_type: z.string(),
  action_details: z.string().nullable(),
  created_at: z.coerce.date(),
})

export type ActionLog = z.infer<typeof ActionLogSchema>

/////////////////////////////////////////
// METRIC LOG SCHEMA
/////////////////////////////////////////

export const MetricLogSchema = z.object({
  metric_type: MetricLogTypeSchema,
  id: z.string().uuid(),
  user_email: z.string().nullable(),
  metric_value: z.number().nullable(),
  metric_details: z.string().nullable(),
  created_at: z.coerce.date(),
})

export type MetricLog = z.infer<typeof MetricLogSchema>

/////////////////////////////////////////
// NOTIFICATION PREFERENCE SCHEMA
/////////////////////////////////////////

export const NotificationPreferenceSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  friend_request: z.boolean(),
  friend_request_accept: z.boolean(),
  created_at: z.coerce.date(),
  marketing_emails: z.boolean(),
  elo_refund: z.boolean(),
})

export type NotificationPreference = z.infer<typeof NotificationPreferenceSchema>

/////////////////////////////////////////
// FRIENDSHIP REQUEST SCHEMA
/////////////////////////////////////////

export const FriendshipRequestSchema = z.object({
  id: z.string().uuid(),
  from_id: z.string(),
  to_id: z.string(),
  created_at: z.coerce.date(),
  accepted_at: z.coerce.date().nullable(),
})

export type FriendshipRequest = z.infer<typeof FriendshipRequestSchema>

/////////////////////////////////////////
// FRIENDSHIP SCHEMA
/////////////////////////////////////////

export const FriendshipSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  other_user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.coerce.date(),
})

export type Friendship = z.infer<typeof FriendshipSchema>

/////////////////////////////////////////
// ELO RATING SCHEMA
/////////////////////////////////////////

export const EloRatingSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  elo_222_rating: z.number().int(),
  elo_333_rating: z.number().int(),
  elo_444_rating: z.number().int(),
  updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
  elo_overall_rating: z.number().int(),
  profile_id: z.string(),
  games_222_count: z.number().int(),
  games_333_count: z.number().int(),
  games_444_count: z.number().int(),
  games_overall_count: z.number().int(),
})

export type EloRating = z.infer<typeof EloRatingSchema>

/////////////////////////////////////////
// ELO LOG SCHEMA
/////////////////////////////////////////

export const EloLogSchema = z.object({
  id: z.string().uuid(),
  opponent_id: z.string().nullable(),
  cube_type: z.string(),
  elo_change: z.number().int(),
  updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
  match_id: z.string().nullable(),
  player_id: z.string(),
  opponent_new_elo_rating: z.number().int(),
  opponent_new_game_count: z.number().int().nullable(),
  player_new_elo_rating: z.number().int(),
  player_new_game_count: z.number().int(),
  refunded_at: z.coerce.date().nullable(),
})

export type EloLog = z.infer<typeof EloLogSchema>

/////////////////////////////////////////
// AD VIEW SCHEMA
/////////////////////////////////////////

export const AdViewSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().nullable(),
  ip_address: z.string().nullable(),
  ad_key: z.string(),
  view_time_seconds: z.number().int(),
  browser_session_id: z.string(),
  clicked_at: z.coerce.date().nullable(),
  updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
  pathname: z.string(),
  last_session_started_at: z.coerce.date(),
})

export type AdView = z.infer<typeof AdViewSchema>

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  header_image_id: z.string().nullable(),
  pfp_image_id: z.string().nullable(),
  created_at: z.coerce.date(),
  bio: z.string().nullable(),
  favorite_event: z.string().nullable(),
  main_three_cube: z.string().nullable(),
  three_goal: z.string().nullable(),
  three_method: z.string().nullable(),
  reddit_link: z.string().nullable(),
  twitch_link: z.string().nullable(),
  youtube_link: z.string().nullable(),
  twitter_link: z.string().nullable(),
  discord_id: z.string().nullable(),
  show_discord_message_button: z.boolean(),
})

export type Profile = z.infer<typeof ProfileSchema>

/////////////////////////////////////////
// IMAGE SCHEMA
/////////////////////////////////////////

export const ImageSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  url: z.string().nullable(),
  storage_path: z.string().nullable(),
  created_at: z.coerce.date(),
})

export type Image = z.infer<typeof ImageSchema>

/////////////////////////////////////////
// PROFILE VIEW SCHEMA
/////////////////////////////////////////

export const ProfileViewSchema = z.object({
  id: z.string().uuid(),
  viewer_id: z.string().nullable(),
  profile_id: z.string(),
  created_at: z.coerce.date(),
  profile_user_id: z.string(),
})

export type ProfileView = z.infer<typeof ProfileViewSchema>

/////////////////////////////////////////
// FORGOT PASSWORD SCHEMA
/////////////////////////////////////////

export const ForgotPasswordSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  code: z.string(),
  claimed: z.boolean(),
  created_at: z.coerce.date(),
})

export type ForgotPassword = z.infer<typeof ForgotPasswordSchema>

/////////////////////////////////////////
// SOLVE SCHEMA
/////////////////////////////////////////

export const SolveSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  time: z.number(),
  raw_time: z.number().nullable(),
  cube_type: z.string().nullable(),
  scramble: z.string().nullable(),
  session_id: z.string().nullable(),
  started_at: z.bigint().nullable(),
  ended_at: z.bigint().nullable(),
  dnf: z.boolean(),
  plus_two: z.boolean(),
  notes: z.string().nullable(),
  trainer_name: z.string().nullable(),
  created_at: z.coerce.date(),
  bulk: z.boolean(),
  inspection_time: z.number().nullable(),
  is_smart_cube: z.boolean(),
  smart_put_down_time: z.number().nullable(),
  smart_turns: z.string().nullable(),
  smart_turn_count: z.number().int().nullable(),
  smart_device_id: z.string().nullable(),
  match_id: z.string().nullable(),
  match_participant_id: z.string().nullable(),
  share_code: z.string().nullable(),
  from_timer: z.boolean(),
  game_session_id: z.string().nullable(),
  custom_scramble: z.boolean(),
  training_session_id: z.string().nullable(),
})

export type Solve = z.infer<typeof SolveSchema>

/////////////////////////////////////////
// DEMO SOLVE SCHEMA
/////////////////////////////////////////

export const DemoSolveSchema = z.object({
  id: z.string().uuid(),
  demo_session_id: z.string(),
  ip_address: z.string().nullable(),
  raw_time: z.number().nullable(),
  cube_type: z.string().nullable(),
  scramble: z.string().nullable(),
  started_at: z.bigint().nullable(),
  ended_at: z.bigint().nullable(),
  updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
})

export type DemoSolve = z.infer<typeof DemoSolveSchema>

/////////////////////////////////////////
// EMAIL LOG SCHEMA
/////////////////////////////////////////

export const EmailLogSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().nullable(),
  subject: z.string(),
  template: z.string(),
  vars: z.string(),
  created_at: z.coerce.date(),
  email: z.string(),
})

export type EmailLog = z.infer<typeof EmailLogSchema>

/////////////////////////////////////////
// MATCH SESSION SCHEMA
/////////////////////////////////////////

export const MatchSessionSchema = z.object({
  id: z.string().uuid(),
  min_players: z.number().int(),
  max_players: z.number().int(),
  match_type: z.string(),
  custom_match: z.boolean(),
  created_at: z.coerce.date(),
  created_by_id: z.string().nullable(),
  rated: z.boolean().nullable(),
})

export type MatchSession = z.infer<typeof MatchSessionSchema>

/////////////////////////////////////////
// MATCH SCHEMA
/////////////////////////////////////////

export const MatchSchema = z.object({
  id: z.string().uuid(),
  winner_id: z.string().nullable(),
  created_at: z.coerce.date(),
  link_code: z.string(),
  match_session_id: z.string(),
  ended_at: z.coerce.date().nullable(),
  started_at: z.coerce.date().nullable(),
  spectate_code: z.string().nullable(),
  aborted: z.boolean(),
})

export type Match = z.infer<typeof MatchSchema>

/////////////////////////////////////////
// MATCH LOBBY SCHEMA
/////////////////////////////////////////

export const MatchLobbySchema = z.object({
  game_type: GameTypeSchema,
  id: z.string().uuid(),
  user_id: z.string(),
  cube_type: z.string(),
  player_count: z.number().int(),
  elo: z.number().int(),
  created_at: z.coerce.date(),
  client_id: z.string(),
})

export type MatchLobby = z.infer<typeof MatchLobbySchema>

/////////////////////////////////////////
// MATCH PARTICIPANT SCHEMA
/////////////////////////////////////////

export const MatchParticipantSchema = z.object({
  id: z.string().uuid(),
  match_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date(),
  resigned: z.boolean(),
  forfeited: z.boolean(),
  position: z.number().int(),
  won: z.boolean(),
  lost: z.boolean(),
  abandoned: z.boolean(),
  aborted: z.boolean(),
})

export type MatchParticipant = z.infer<typeof MatchParticipantSchema>

/////////////////////////////////////////
// CHAT MESSAGE SCHEMA
/////////////////////////////////////////

export const ChatMessageSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  match_session_id: z.string().nullable(),
  message: z.string(),
  created_at: z.coerce.date(),
  bad_words: z.boolean(),
  raw_message: z.string().nullable(),
})

export type ChatMessage = z.infer<typeof ChatMessageSchema>

/////////////////////////////////////////
// SMART DEVICE SCHEMA
/////////////////////////////////////////

export const SmartDeviceSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.coerce.date(),
  device_id: z.string(),
  user_id: z.string(),
})

export type SmartDevice = z.infer<typeof SmartDeviceSchema>

/////////////////////////////////////////
// SOLVE METHOD STEP SCHEMA
/////////////////////////////////////////

export const SolveMethodStepSchema = z.object({
  id: z.string().uuid(),
  solve_id: z.string(),
  turn_count: z.number().int(),
  turns: z.string().nullable(),
  method_name: z.string(),
  step_index: z.number().int(),
  step_name: z.string(),
  created_at: z.coerce.date(),
  total_time: z.number().nullable(),
  tps: z.number().nullable(),
  parent_name: z.string().nullable(),
  recognition_time: z.number(),
  skipped: z.boolean(),
  oll_case_key: z.string().nullable(),
  pll_case_key: z.string().nullable(),
})

export type SolveMethodStep = z.infer<typeof SolveMethodStepSchema>

/////////////////////////////////////////
// BADGE TYPE SCHEMA
/////////////////////////////////////////

export const BadgeTypeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  priority: z.number().int(),
  color: z.string(),
  created_at: z.coerce.date(),
  description: z.string(),
  created_by_id: z.string().nullable(),
})

export type BadgeType = z.infer<typeof BadgeTypeSchema>

/////////////////////////////////////////
// BADGE SCHEMA
/////////////////////////////////////////

export const BadgeSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  badge_type_id: z.string(),
  created_at: z.coerce.date(),
})

export type Badge = z.infer<typeof BadgeSchema>

/////////////////////////////////////////
// TIMER BACKGROUND SCHEMA
/////////////////////////////////////////

export const TimerBackgroundSchema = z.object({
  id: z.string().uuid(),
  url: z.string().nullable(),
  storage_path: z.string().nullable(),
  user_id: z.string(),
  hex: z.string().nullable(),
  created_at: z.coerce.date(),
})

export type TimerBackground = z.infer<typeof TimerBackgroundSchema>

/////////////////////////////////////////
// REPORT SCHEMA
/////////////////////////////////////////

export const ReportSchema = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date(),
  reason: z.string().nullable(),
  created_by_id: z.string(),
  reported_user_id: z.string(),
  resolved_at: z.coerce.date().nullable(),
})

export type Report = z.infer<typeof ReportSchema>

/////////////////////////////////////////
// BAN LOG SCHEMA
/////////////////////////////////////////

export const BanLogSchema = z.object({
  id: z.string().uuid(),
  created_by_id: z.string(),
  banned_user_id: z.string(),
  reason: z.string(),
  active: z.boolean(),
  banned_until: z.coerce.date().nullable(),
  minutes: z.number().int().nullable(),
  forever: z.boolean(),
  created_at: z.coerce.date(),
})

export type BanLog = z.infer<typeof BanLogSchema>

/////////////////////////////////////////
// SOLVE VIEW SCHEMA
/////////////////////////////////////////

export const SolveViewSchema = z.object({
  id: z.string().uuid(),
  solve_id: z.string(),
  viewer_id: z.string().nullable(),
  user_id: z.string(),
  created_at: z.coerce.date(),
})

export type SolveView = z.infer<typeof SolveViewSchema>

/////////////////////////////////////////
// GAME SESSION SCHEMA
/////////////////////////////////////////

export const GameSessionSchema = z.object({
  game_type: GameTypeSchema,
  id: z.string().uuid(),
  user_id: z.string(),
  match_id: z.string().nullable(),
  solve_count: z.number().int(),
  total_time: z.number(),
  created_at: z.coerce.date(),
})

export type GameSession = z.infer<typeof GameSessionSchema>

/////////////////////////////////////////
// GAME OPTIONS SCHEMA
/////////////////////////////////////////

export const GameOptionsSchema = z.object({
  game_type: GameTypeSchema,
  id: z.string().uuid(),
  game_session_id: z.string().nullable(),
  match_session_id: z.string().nullable(),
  cube_type: z.string(),
  elimination_starting_time_seconds: z.number().int(),
  elimination_percent_change_rate: z.number().int(),
  head_to_head_target_win_count: z.number().int(),
  gauntlet_time_multiplier: z.number(),
  created_at: z.coerce.date(),
})

export type GameOptions = z.infer<typeof GameOptionsSchema>

/////////////////////////////////////////
// TOP SOLVE SCHEMA
/////////////////////////////////////////

export const TopSolveSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  time: z.number(),
  solve_id: z.string(),
  cube_type: z.string(),
  created_at: z.coerce.date(),
})

export type TopSolve = z.infer<typeof TopSolveSchema>

/////////////////////////////////////////
// TOP AVERAGE SCHEMA
/////////////////////////////////////////

export const TopAverageSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  time: z.number(),
  cube_type: z.string(),
  solve_1_id: z.string(),
  solve_2_id: z.string(),
  solve_3_id: z.string(),
  solve_4_id: z.string(),
  solve_5_id: z.string(),
  created_at: z.coerce.date(),
})

export type TopAverage = z.infer<typeof TopAverageSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date(),
  order: z.number().int(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// CUSTOM TRAINER SCHEMA
/////////////////////////////////////////

export const CustomTrainerSchema = z.object({
  id: z.string().uuid(),
  colors: z.string().nullable(),
  cube_type: z.string(),
  key: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date(),
  name: z.string(),
  like_count: z.number().int(),
  private: z.boolean(),
  copy_of_id: z.string().nullable(),
  description: z.string().nullable(),
  downloaded: z.boolean(),
  group_name: z.string().nullable(),
  scrambles: z.string().nullable(),
  solution: z.string().nullable(),
  alt_solutions: z.string().nullable(),
  three_d: z.boolean(),
  algo_type: z.string(),
})

export type CustomTrainer = z.infer<typeof CustomTrainerSchema>

/////////////////////////////////////////
// CUSTOM TRAINER LIKE SCHEMA
/////////////////////////////////////////

export const CustomTrainerLikeSchema = z.object({
  id: z.string().uuid(),
  custom_trainer_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date(),
  creator_id: z.string(),
})

export type CustomTrainerLike = z.infer<typeof CustomTrainerLikeSchema>

/////////////////////////////////////////
// CUSTOM TRAINER DOWNLOAD SCHEMA
/////////////////////////////////////////

export const CustomTrainerDownloadSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  creator_id: z.string(),
  created_at: z.coerce.date(),
  new_trainer_id: z.string().nullable(),
  source_trainer_id: z.string(),
})

export type CustomTrainerDownload = z.infer<typeof CustomTrainerDownloadSchema>

/////////////////////////////////////////
// TRAINER FAVORITE SCHEMA
/////////////////////////////////////////

export const TrainerFavoriteSchema = z.object({
  id: z.string().uuid(),
  cube_key: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date(),
})

export type TrainerFavorite = z.infer<typeof TrainerFavoriteSchema>

/////////////////////////////////////////
// ALGORITHM OVERRIDE SCHEMA
/////////////////////////////////////////

export const AlgorithmOverrideSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  rotate: z.number().int().nullable(),
  cube_key: z.string(),
  created_at: z.coerce.date(),
  solution: z.string().nullable(),
  name: z.string().nullable(),
  scrambles: z.string().nullable(),
})

export type AlgorithmOverride = z.infer<typeof AlgorithmOverrideSchema>

/////////////////////////////////////////
// SETTING SCHEMA
/////////////////////////////////////////

export const SettingSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  focus_mode: z.boolean(),
  freeze_time: z.number(),
  inspection: z.boolean(),
  manual_entry: z.boolean(),
  inspection_delay: z.number().int(),
  inverse_time_list: z.boolean(),
  hide_time_when_solving: z.boolean(),
  nav_collapsed: z.boolean(),
  pb_confetti: z.boolean(),
  play_inspection_sound: z.boolean(),
  zero_out_time_after_solve: z.boolean(),
  confirm_delete_solve: z.boolean(),
  require_period_in_manual_time_entry: z.boolean(),
  created_at: z.coerce.date(),
  cube_type: z.string(),
  session_id: z.string().nullable(),
  timer_decimal_points: z.number().int(),
  beta_tester: z.boolean(),
  use_space_with_smart_cube: z.boolean(),
  inspection_auto_start: z.boolean(),
  stats_module_json: z.string().nullable(),
})

export type Setting = z.infer<typeof SettingSchema>

/////////////////////////////////////////
// CUSTOM CUBE TYPE SCHEMA
/////////////////////////////////////////

export const CustomCubeTypeSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  name: z.string(),
  created_at: z.coerce.date(),
  scramble: z.string(),
  private: z.boolean(),
})

export type CustomCubeType = z.infer<typeof CustomCubeTypeSchema>
