import type {Solve} from '@/types/solve';
import type {PublicUserAccount} from '@/types/user';

export interface SmartDevice {
	id: string;
	name: string;
	internal_name: string;
	device_id: string;
	user_id: string;
	created_at: Date;
	solves?: Solve[];
	user?: PublicUserAccount;
}
