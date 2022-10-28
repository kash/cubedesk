import {Field, InputType, Int, ObjectType} from 'type-graphql';
import {ColorName} from '../../shared/colors';
import {Max, Min} from 'class-validator';

@ObjectType()
export class StatsModule {
	@Field(() => [StatsModuleBlock])
	blocks: StatsModuleBlock[];
}

@ObjectType()
export class StatsModuleBlock {
	@Field(() => String)
	statType: 'average' | 'single';

	@Field(() => String)
	sortBy: 'best' | 'worst' | 'current';

	@Field()
	session: boolean;

	@Field(() => String)
	colorName: ColorName;

	@Field(() => Int)
	@Min(0)
	@Max(10000)
	averageCount: number;
}

@InputType()
export class StatsModuleBlockInput extends StatsModuleBlock {
	@Field(() => String)
	statType: 'average' | 'single';

	@Field(() => String)
	sortBy: 'best' | 'worst' | 'current';

	@Field()
	session: boolean;

	@Field(() => String)
	colorName: ColorName;

	@Field(() => Int)
	@Min(0)
	@Max(10000)
	averageCount: number;
}
