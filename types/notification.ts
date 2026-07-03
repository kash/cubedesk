import type {PublicUserAccount} from './user';

export interface Notification {
	id: string;
	user_id: string;
	notification_type: string;
	notification_category_name: string;
	in_app_message: string;
	triggering_user_id: string;
	read_at: Date;
	message: string;
	icon: string;
	link: string;
	link_text: string;
	subject: string;
	created_at: Date;
	triggering_user?: PublicUserAccount;
}
