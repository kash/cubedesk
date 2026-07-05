import type {PublicUserAccount} from './user';

export interface Notification {
	id: string;
	user_id: string;
	notification_type: string;
	notification_category_name: string;
	in_app_message: string | null;
	triggering_user_id: string | null;
	read_at: Date | null;
	message: string;
	icon: string;
	link: string;
	link_text: string;
	subject: string;
	created_at: Date;
	triggering_user?: PublicUserAccount;
}
