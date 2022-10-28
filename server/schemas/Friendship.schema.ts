import {Field, ObjectType, Int} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import PaginatedResponse from './Pagination.schema';

@ObjectType()
export class FriendshipRequest {
	@Field()
	id: string;

	@Field()
	from_id: string;

	@Field()
	to_id: string;

	@Field()
	accepted: boolean;

	@Field()
	from_user: PublicUserAccount;

	@Field()
	to_user: PublicUserAccount;

	@Field()
	created_at: Date;
}

@ObjectType()
export class Friendship {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	other_user_id: string;

	@Field()
	friendship_request_id: string;

	@Field()
	created_at: Date;

	@Field(() => FriendshipRequest)
	friendship_request?: FriendshipRequest;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;

	@Field(() => PublicUserAccount)
	other_user?: PublicUserAccount;
}

@ObjectType()
export class PaginatedFriendships extends PaginatedResponse(Friendship) {}

@ObjectType()
export class PaginatedFriendshipRequests extends PaginatedResponse(FriendshipRequest) {}

@ObjectType()
export class FriendshipStats {
	@Field(() => Int)
	friend_count: number;

	@Field(() => Int)
	friend_requests_count: number;

	@Field(() => Int)
	friend_requests_sent_count: number;
}

@ObjectType()
export class FriendshipResult {
	@Field()
	id: string;

	@Field(() => [Friendship])
	records?: Friendship[];

	@Field()
	more_results: boolean;
}

@ObjectType()
export class FriendshipRequestResult {
	@Field(() => [FriendshipRequest])
	records?: FriendshipRequest[];

	@Field()
	more_results: boolean;

	@Field(() => Int)
	total_count: number;
}
