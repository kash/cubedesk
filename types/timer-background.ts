import type {PublicUserAccount} from '@/types/user';

export interface TimerBackground {
	id: string;
	url: string;
	storage_path: string;
	user_id: string;
	hex: string;
	created_at: Date;
	user?: PublicUserAccount;
}
