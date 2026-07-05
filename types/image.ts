import type {PublicUserAccount} from './user';

export interface Image {
	id: string;
	user_id: string;
	url: string | null;
	storage_path: string | null;
	created_at: Date;
	user?: PublicUserAccount;
}
