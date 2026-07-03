import type {PublicUserAccount} from './user';

export interface Image {
	id: string;
	user_id: string;
	url: string;
	storage_path: string;
	created_at: Date;
	user?: PublicUserAccount;
}
