import type {
	AlgorithmOverride,
	CustomTrainer,
	CustomTrainerDownload,
	CustomTrainerLike,
	Prisma,
	TrainerFavorite,
} from '@/generated/prisma/client';
import {Serialized} from '@/types/serialized';
import {publicUserSelect} from '@/types/user';

export type {
	AlgorithmOverride,
	CustomTrainer,
	CustomTrainerDownload,
	CustomTrainerLike,
	TrainerFavorite,
};

export const customTrainerInclude = {
	user: {
		select: publicUserSelect,
	},
	copy_of: {
		include: {
			user: {
				select: publicUserSelect,
			},
		},
	},
} satisfies Prisma.CustomTrainerInclude;

export type CustomTrainerWithUser = Prisma.CustomTrainerGetPayload<{
	include: typeof customTrainerInclude;
}>;

export type CustomTrainerInput = {
	solution: string;
	colors?: string | null;
	cube_type: string;
	group_name?: string | null;
	scrambles?: string | null;
	alt_solutions?: string | null;
	// three_d and private are non-nullable columns; null is not accepted
	three_d?: boolean;
	name: string;
	private?: boolean;
	description?: string | null;
};

export type AlgorithmOverrideInput = {
	rotate?: number | null;
	solution?: string | null;
	cube_key?: string | null;
	name?: string | null;
	scrambles?: string | null;
};

// Shape of records in the client's loki "trainer" collection, which mixes
// Built-in algorithms (TrainerAlgorithm) with the user's custom trainers
// (serialized CustomTrainerWithUser rows over tRPC) — fields that only one
// source provides are optional.
export type TrainerAlgorithmRecord = {
	id: string;
	name: string;
	cube_type: string;
	algo_type: string;
	colors?: string | null;
	group_name?: string | null;
	solution?: string | null;
	scrambles?: string | null;
	rotate?: number | null;
	// Built-in catalog fields
	active?: boolean;
	img_link?: string;
	// Custom-trainer-only fields
	key?: string;
	user_id?: string;
	user?: Serialized<CustomTrainerWithUser>['user'];
	copy_of?: Serialized<CustomTrainerWithUser>['copy_of'];
	copy_of_id?: string | null;
	private?: boolean;
	like_count?: number;
	description?: string | null;
	downloaded?: boolean;
	three_d?: boolean;
	alt_solutions?: string | null;
	created_at?: string;
};

// The public trainer payload omits database timestamps.
export type TrainerAlgorithm = import('@/shared/trainer/catalog').CatalogAlgorithm;
