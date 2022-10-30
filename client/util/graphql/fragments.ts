import {gql} from '@apollo/client';

export const MINI_SOLVE_FRAGMENT = gql`
	fragment MiniSolveFragment on Solve {
		id
		time
		raw_time
		cube_type
		session_id
		trainer_name
		bulk
		scramble
		from_timer
		training_session_id
		dnf
		plus_two
		is_smart_cube
		created_at
		started_at
		ended_at
	}
`;

export const STATS_FRAGMENT = gql`
	fragment StatsFragment on Stats {
		friend_count
		matches_played
		matches_won
		matches_lost
		profile_views
		match_max_win_streak
		match_solve_count
		solve_views
	}
`;

export const STATS_MODULE_BLOCK_FRAGMENT = gql`
	fragment StatsModuleBlockFragment on StatsModuleBlock {
		statType
		sortBy
		session
		colorName
		averageCount
	}
`;

export const ALGORITHM_OVERRIDE_FRAGMENT = gql`
	fragment AlgorithmOverrideFragment on AlgorithmOverride {
		cube_key
		rotate
		solution
	}
`;

export const TRAINER_FAVORITE_FRAGMENT = gql`
	fragment TrainerFavoriteFragment on TrainerFavorite {
		cube_key
	}
`;

export const TRAINER_ALGORITHM_FRAGMENT = gql`
	fragment TrainerAlgorithmFragment on TrainerAlgorithm {
		id
		name
		scrambles
		solution
		pro_only
		cube_type
		algo_type
		colors
		group_name
	}
`;

export const SESSION_FRAGMENT = gql`
	fragment SessionFragment on Session {
		id
		name
		created_at
		order
	}
`;

export const SOLVE_FRAGMENT = gql`
	fragment SolveFragment on Solve {
		id
		time
		raw_time
		cube_type
		user_id
		scramble
		session_id
		started_at
		ended_at
		dnf
		plus_two
		notes
		created_at
		is_smart_cube
		smart_turn_count
		share_code
		smart_turns
		smart_put_down_time
		inspection_time
		smart_device {
			id
			name
			internal_name
			device_id
			created_at
		}
		solve_method_steps {
			id
			turn_count
			turns
			total_time
			tps
			recognition_time
			oll_case_key
			pll_case_key
			skipped
			parent_name
			method_name
			step_index
			step_name
			created_at
		}
	}
`;

export const GAME_OPTIONS_FRAGMENT = gql`
	fragment GameOptionsFragment on GameOptions {
		id
		cube_type
		game_session_id
		game_type
		elimination_percent_change_rate
		elimination_starting_time_seconds
		gauntlet_time_multiplier
		head_to_head_target_win_count
		match_session_id
	}
`;

export const CUSTOM_CUBE_TYPE_FRAGMENT = gql`
	fragment CustomCubeTypeFragment on CustomCubeType {
		id
		user_id
		name
		created_at
		scramble
		private
	}
`;

export const SETTING_FRAGMENT = gql`
	${CUSTOM_CUBE_TYPE_FRAGMENT}

	fragment SettingsFragment on Setting {
		id
		user_id
		focus_mode
		freeze_time
		inspection
		manual_entry
		inspection_delay
		session_id
		inverse_time_list
		hide_time_when_solving
		nav_collapsed
		timer_decimal_points
		pb_confetti
		play_inspection_sound
		zero_out_time_after_solve
		confirm_delete_solve
		use_space_with_smart_cube
		require_period_in_manual_time_entry
		beta_tester
		cube_type
		custom_cube_types {
			...CustomCubeTypeFragment
		}
	}
`;

export const IMAGE_FRAGMENT = gql`
	fragment ImageFragment on Image {
		id
		user_id
		storage_path
	}
`;

export const ELO_RATING_FRAGMENT = gql`
	fragment EloRatingFragment on EloRating {
		id
		user_id
		profile_id
		elo_overall_rating
		games_overall_count
		elo_222_rating
		games_222_count
		elo_333_rating
		games_333_count
		elo_444_rating
		games_444_count
		updated_at
		created_at
	}
`;

export const PUBLIC_USER_FRAGMENT = gql`
	${IMAGE_FRAGMENT}

	fragment PublicUserFragment on PublicUserAccount {
		id
		username
		verified
		created_at
		banned_forever
		is_pro
		banned_until
		admin
		mod
		integrations {
			id
			service_name
		}
		profile {
			pfp_image {
				...ImageFragment
			}
		}
	}
`;

export const PUBLIC_USER_WITH_ELO_FRAGMENT = gql`
	${PUBLIC_USER_FRAGMENT}
	${ELO_RATING_FRAGMENT}

	fragment PublicUserWithEloFragment on PublicUserAccount {
		...PublicUserFragment
		elo_rating {
			...EloRatingFragment
		}
	}
`;

export const SOLVE_WITH_USER_FRAGMENT = gql`
	${SOLVE_FRAGMENT}
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment SolveWithUserFragment on Solve {
		...SolveFragment
		user {
			...PublicUserWithEloFragment
		}
	}
`;

export const CHAT_MESSAGE_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment ChatMessageFragment on ChatMessage {
		id
		message
		created_at
		user {
			...PublicUserWithEloFragment
		}
	}
`;

export const FRIENDSHIP_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment FriendshipFragment on Friendship {
		id
		user_id
		other_user_id
		user {
			...PublicUserWithEloFragment
		}
		other_user {
			...PublicUserWithEloFragment
		}
		created_at
	}
`;

export const NOTIFICATION_PREFERENCE_FRAGMENT = gql`
	fragment NotificationPreferenceFragment on NotificationPreference {
		friend_request
		friend_request_accept
		marketing_emails
		elo_refund
	}
`;

export const FRIENDSHIP_REQUEST_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment FriendshipRequestFragment on FriendshipRequest {
		id
		from_id
		to_id
		accepted
		from_user {
			...PublicUserWithEloFragment
		}
		to_user {
			...PublicUserWithEloFragment
		}
		created_at
	}
`;

export const NOTIFICATION_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment NotificationFragment on Notification {
		id
		user_id
		notification_type
		notification_category_name
		triggering_user_id
		in_app_message
		read_at
		message
		icon
		link
		link_text
		subject
		created_at
		triggering_user {
			...PublicUserWithEloFragment
		}
	}
`;

export const MATCH_PARTICIPANT_FRAGMENT = gql`
	${SOLVE_FRAGMENT}
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment MatchParticipantFragment on MatchParticipant {
		id
		user_id
		created_at
		forfeited
		lost
		position
		resigned
		won
		user {
			...PublicUserWithEloFragment
		}
		solves {
			...SolveFragment
		}
	}
`;

export const MATCH_SESSION_FRAGMENT = gql`
	${CHAT_MESSAGE_FRAGMENT}
	${GAME_OPTIONS_FRAGMENT}

	fragment MatchSessionFragment on MatchSession {
		created_at
		id
		match_type
		custom_match
		created_by_id
		min_players
		max_players

		chat_messages {
			...ChatMessageFragment
		}

		game_options {
			...GameOptionsFragment
		}
	}
`;

export const ELO_LOG_FRAGMENT = gql`
	fragment EloLogFragment on EloLog {
		id
		player_id
		player_new_game_count
		opponent_id
		opponent_new_game_count
		cube_type
		match_id
		elo_change
		player_new_elo_rating
		opponent_new_elo_rating
		updated_at
		created_at
	}
`;

export const MATCH_FRAGMENT = gql`
	${MATCH_SESSION_FRAGMENT}
	${MATCH_PARTICIPANT_FRAGMENT}
	${ELO_LOG_FRAGMENT}

	fragment MatchFragment on Match {
		id
		link_code
		spectate_code
		ended_at
		started_at
		winner_id
		aborted
		match_session_id
		elo_log {
			...EloLogFragment
		}
		match_session {
			...MatchSessionFragment
		}
		created_at
		participants {
			...MatchParticipantFragment
		}
	}
`;

export const TOP_SOLVE_FRAGMENT = gql`
	${SOLVE_FRAGMENT}
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment TopSolveFragment on TopSolve {
		id
		time
		cube_type
		created_at
		solve {
			...SolveFragment
		}
		user {
			...PublicUserWithEloFragment
		}
	}
`;

export const TOP_AVERAGE_FRAGMENT = gql`
	${SOLVE_FRAGMENT}
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment TopAverageFragment on TopAverage {
		id
		time
		cube_type
		created_at
		solve_1 {
			...SolveFragment
		}
		solve_2 {
			...SolveFragment
		}
		solve_3 {
			...SolveFragment
		}
		solve_4 {
			...SolveFragment
		}
		solve_5 {
			...SolveFragment
		}
		user {
			...PublicUserWithEloFragment
		}
	}
`;

export const PROFILE_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}
	${TOP_SOLVE_FRAGMENT}
	${TOP_AVERAGE_FRAGMENT}
	${IMAGE_FRAGMENT}

	fragment ProfileFragment on Profile {
		id
		bio
		three_method
		three_goal
		main_three_cube
		favorite_event
		youtube_link
		twitter_link
		user_id
		reddit_link
		twitch_link
		user {
			...PublicUserWithEloFragment
		}
		top_solves {
			...TopSolveFragment
		}
		top_averages {
			...TopAverageFragment
		}
		header_image {
			...ImageFragment
		}
		pfp_image {
			...ImageFragment
		}
	}
`;

export const REPORT_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}

	fragment ReportFragment on Report {
		id
		reported_user_id
		created_by_id
		reason
		resolved_at
		created_at
		created_by {
			...PublicUserWithEloFragment
		}
		reported_user {
			...PublicUserWithEloFragment
		}
	}
`;

export const GAME_SESSION_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}
	${SOLVE_FRAGMENT}

	fragment GameSessionFragment on GameSession {
		id
		created_at
		match {
			id
			winner_id
			started_at
			ended_at
			created_at
			participants {
				id
				user_id
				position
				resigned
				forfeited
				won
				lost
				created_at
				user {
					...PublicUserWithEloFragment
				}
				solves {
					...SolveFragment
				}
			}
			match_session {
				min_players
				max_players
				match_type
				custom_match
				created_at
			}
		}
		user {
			id
			username
		}
		solves {
			...SolveFragment
		}
	}
`;

export const MEMBERSHIP_PRICING_FRAGMENT = gql`
	fragment MembershipPricingFragment on MembershipPricing {
		id
		currency
		unit_amount
		interval_count
		interval
	}
`;

export const INTEGRATION_FRAGMENT = gql`
	fragment IntegrationFragment on Integration {
		id
		auth_expires_at
		service_name
		created_at
	}
`;

export const MEMBERSHIP_FRAGMENT = gql`
	${MEMBERSHIP_PRICING_FRAGMENT}

	fragment MembershipFragment on Membership {
		status
		canceled_at
		ended_at
		days_until_due
		cancel_at_period_end
		current_period_end
		start_date
		pricing {
			...MembershipPricingFragment
		}
	}
`;

export const MEMBERSHIP_OPTIONS_FRAGMENT = gql`
	${MEMBERSHIP_PRICING_FRAGMENT}

	fragment MembershipOptionsFragment on MembershipOptions {
		month {
			...MembershipPricingFragment
		}
		year {
			...MembershipPricingFragment
		}
	}
`;

export const CUSTOM_TRAINER_FRAGMENT = gql`
	fragment CustomTrainerFragment on CustomTrainer {
		id
		solution
		scrambles
		colors
		description
		alt_solutions
		group_name
		algo_type
		three_d
		cube_type
		name
		key
		copy_of_id
		copy_of {
			user {
				id
				username
			}
		}
	}
`;

export const PUBLIC_CUSTOM_TRAINER_RECORD_FRAGMENT = gql`
	${CUSTOM_TRAINER_FRAGMENT}
	${IMAGE_FRAGMENT}

	fragment PublicCustomTrainerRecordFragment on CustomTrainer {
		...CustomTrainerFragment
		user_id
		like_count
		user {
			id
			username
			profile {
				pfp_image {
					...ImageFragment
				}
			}
		}
	}
`;

export const TIMER_BACKGROUND_FRAGMENT = gql`
	fragment TimerBackgroundFragment on TimerBackground {
		created_at
		hex
		storage_path
		id
		url
	}
`;

export const USER_FOR_ME_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}
	${TIMER_BACKGROUND_FRAGMENT}

	fragment UserForMeFragment on UserAccount {
		email
		join_country
		timer_background {
			...TimerBackgroundFragment
		}

		...PublicUserWithEloFragment
	}
`;

export const USER_ACCOUNT_MATCHES_SUMMARY_FRAGMENT = gql`
	fragment UserAccountMatchesSummaryFragment on UserAccountMatchesSummary {
		count
		wins
		losses
	}
`;

export const USER_ACCOUNT_SOLVES_SUMMARY_FRAGMENT = gql`
	fragment UserAccountSolvesSummaryFragment on UserAccountSolvesSummary {
		count
		average
		min_time
		max_time
		sum
		cube_type
	}
`;

export const USER_ACCOUNT_SUMMARY_FRAGMENT = gql`
	${USER_ACCOUNT_MATCHES_SUMMARY_FRAGMENT}
	${USER_ACCOUNT_SOLVES_SUMMARY_FRAGMENT}

	fragment UserAccountSummaryFragment on UserAccountSummary {
		solves
		reports_for
		reports_created
		profile_views
		bans
		matches {
			...UserAccountMatchesSummaryFragment
		}
		match_solves {
			...UserAccountSolvesSummaryFragment
		}
		timer_solves {
			...UserAccountSolvesSummaryFragment
		}
	}
`;

export const USER_FOR_ADMIN_FRAGMENT = gql`
	${NOTIFICATION_PREFERENCE_FRAGMENT}
	${PUBLIC_USER_WITH_ELO_FRAGMENT}
	${REPORT_FRAGMENT}
	${SETTING_FRAGMENT}
	${CHAT_MESSAGE_FRAGMENT}
	${USER_ACCOUNT_SUMMARY_FRAGMENT}

	fragment UserForAdminFragment on UserAccountForAdmin {
		...PublicUserWithEloFragment

		email
		join_country
		join_ip
		reports_for {
			...ReportFragment
		}
		settings {
			...SettingsFragment
		}
		chat_messages {
			...ChatMessageFragment
		}
		notification_preferences {
			...NotificationPreferenceFragment
		}
		summary {
			...UserAccountSummaryFragment
		}
	}
`;

export const REPORT_SUMMARY_FRAGMENT = gql`
	${PUBLIC_USER_WITH_ELO_FRAGMENT}
	${REPORT_FRAGMENT}

	fragment ReportSummaryFragment on ReportSummary {
		last_report
		first_report
		count
		user {
			...PublicUserWithEloFragment
		}
		reports {
			...ReportFragment
		}
	}
`;
