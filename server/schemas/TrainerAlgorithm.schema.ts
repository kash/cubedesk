import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class TrainerAlgorithm {
	@Field()
	id: string;

	@Field()
	name: string;

	@Field()
	active: boolean;

	@Field()
	scrambles: string;

	@Field()
	solution: string;

	@Field()
	pro_only: boolean;

	@Field()
	img_link: string;

	@Field()
	cube_type: string;

	@Field()
	algo_type: string;

	@Field()
	colors: string;

	@Field()
	rotate: number;

	@Field()
	group_name: string;
}
