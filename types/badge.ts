import type {PublicUserAccount} from './user';

export interface Badge {
	id: string;
	user_id: string;
	badge_type_id: string;
	created_at: Date;
	user?: PublicUserAccount;
	badge_type?: BadgeType;
}

export interface BadgeType {
	id: string;
	name: string;
	description: string;
	created_by_id: string;
	priority: number;
	color: string;
	created_at: Date;
	created_by?: PublicUserAccount;
}

export interface BadgeTypeInput {
	name: string;
	description: string;
	priority: number;
	color: string;
}
