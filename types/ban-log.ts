import type {UserAccountForAdmin} from './user';

export interface BanLog {
	id: string;
	created_by_id: string;
	banned_user_id: string;
	reason: string;
	active: boolean;
	banned_until: Date;
	minutes: number;
	forever: boolean;
	created_at: Date;
	created_by?: UserAccountForAdmin;
	banned_user?: UserAccountForAdmin;
}

export interface BanUserInput {
	user_id: string;
	reason: string;
	// Set to -1 for forever
	minutes: number;
	delete_published_solves: boolean;
	cheating_in_1v1: boolean;
}
