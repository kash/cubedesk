import type {Solve} from './solve';
import type {PublicUserAccount} from './user';

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
