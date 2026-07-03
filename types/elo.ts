import type {Prisma} from '@/generated/prisma/client';
import {publicUserSelect} from './user';
import type {PublicUserAccount} from './user';
import type {Profile} from './profile';
import type {Match} from './match';

export const eloRatingWithUserInclude = {
	user: {
		select: publicUserSelect,
	},
} satisfies Prisma.EloRatingInclude;

export type EloRatingWithUser = Prisma.EloRatingGetPayload<{include: typeof eloRatingWithUserInclude}>;

export interface EloRating {
	id: string;
	user_id: string;
	profile_id: string;
	elo_overall_rating: number;
	games_overall_count: number;
	elo_222_rating: number;
	games_222_count: number;
	elo_333_rating: number;
	games_333_count: number;
	elo_444_rating: number;
	games_444_count: number;
	updated_at: Date;
	created_at: Date;
	user?: PublicUserAccount;
	profile?: Profile;
}

export interface EloLog {
	id: string;
	player_id: string;
	player_new_game_count: string;
	opponent_id: string;
	opponent_new_game_count: string;
	cube_type: string;
	match_id: string;
	elo_change: number;
	player_new_elo_rating: number;
	opponent_new_elo_rating: number;
	updated_at: Date;
	created_at: Date;
	match?: Match;
	player?: PublicUserAccount;
	opponent?: PublicUserAccount;
}
