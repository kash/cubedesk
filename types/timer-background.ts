import type {PublicUserAccount} from '@/types/user';

export interface TimerBackground {
	id: string;
	url: string | null;
	storage_path: string | null;
	user_id: string;
	hex: string | null;
	created_at: Date;
	user?: PublicUserAccount;
}
