import {Field, ObjectType, InputType, Int, Float} from 'type-graphql';
import {CustomCubeType} from './CustomCubeType.schema';

@ObjectType()
export class Setting {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	created_at: Date;

	@Field()
	focus_mode: boolean;

	@Field(() => Float)
	freeze_time: number;

	@Field()
	inspection: boolean;

	@Field()
	manual_entry: boolean;

	@Field(() => Int)
	inspection_delay: number;

	@Field()
	inverse_time_list: boolean;

	@Field()
	hide_time_when_solving: boolean;

	@Field()
	nav_collapsed: boolean;

	@Field()
	pb_confetti: boolean;

	@Field()
	play_inspection_sound: boolean;

	@Field()
	zero_out_time_after_solve: boolean;

	@Field()
	confirm_delete_solve: boolean;

	@Field()
	require_period_in_manual_time_entry: boolean;

	@Field()
	use_space_with_smart_cube: boolean;

	@Field(() => Int)
	timer_decimal_points: number;

	@Field()
	cube_type: string;

	@Field()
	session_id: string;

	@Field()
	beta_tester: boolean;

	@Field(() => [CustomCubeType])
	custom_cube_types?: CustomCubeType[];
}

@InputType()
export class SettingInput implements Partial<Setting> {
	@Field()
	focus_mode: boolean;

	@Field(() => Float)
	freeze_time: number;

	@Field()
	inspection: boolean;

	@Field()
	manual_entry: boolean;

	@Field(() => Int)
	inspection_delay: number;

	@Field()
	inverse_time_list: boolean;

	@Field()
	hide_time_when_solving: boolean;

	@Field()
	nav_collapsed: boolean;

	@Field()
	pb_confetti: boolean;

	@Field()
	play_inspection_sound: boolean;

	@Field()
	zero_out_time_after_solve: boolean;

	@Field()
	confirm_delete_solve: boolean;

	@Field()
	require_period_in_manual_time_entry: boolean;

	@Field()
	use_space_with_smart_cube: boolean;

	@Field(() => Int)
	timer_decimal_points: number;

	@Field()
	cube_type: string;

	@Field()
	session_id: string;

	@Field()
	beta_tester: boolean;
}
