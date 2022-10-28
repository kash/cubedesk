import {ArgsType, ClassType, Field, InputType, Int, ObjectType} from 'type-graphql';
import {Max, MaxLength, Min, MinLength} from 'class-validator';

@InputType()
export class PaginationArgsInput {
	@Field(() => Int)
	@Min(0)
	page: number = 0;

	@Field(() => Int)
	@Min(1)
	@Max(100)
	pageSize: number = 25;

	@Field()
	@MinLength(0)
	@MaxLength(250)
	searchQuery: string = '';
}

@ArgsType()
export class PaginationArgs {
	@Field(() => Int)
	@Min(0)
	page: number = 0;

	@Field(() => Int)
	@Min(1)
	@Max(100)
	pageSize: number = 25;

	@Field()
	@MinLength(0)
	@MaxLength(250)
	searchQuery: string = '';
}

export interface PaginationOutput<T> {
	items: T[];
	total: number;
	hasMore: boolean;
}

export default function PaginatedResponse<TItem>(TItemClass: ClassType<TItem>) {
	@ObjectType({isAbstract: true})
	abstract class PaginationResult implements PaginationOutput<TItem> {
		@Field(() => [TItemClass])
		items: TItem[];

		@Field(() => Int)
		total: number;

		@Field()
		hasMore: boolean;
	}
	return PaginationResult;
}
