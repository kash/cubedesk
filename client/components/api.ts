import {
	ApolloClient,
	DocumentNode,
	FetchPolicy,
	InMemoryCache,
	MutationOptions,
	NormalizedCacheObject,
	QueryOptions,
} from '@apollo/client';
import _ from 'lodash';
import {TypedDocumentNode} from '@graphql-typed-document-node/core';
import {createUploadLink} from 'apollo-upload-client';
import nodeFetch from 'node-fetch';
import * as process from 'process';
import {MutationFetchPolicy} from '@apollo/client/core/watchQueryOptions';

let client: ApolloClient<NormalizedCacheObject>;

export const NO_CACHE = 'no-cache';

export function initApollo() {
	type FetchType = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

	let fetchType: any;

	let hostname = '';
	if (typeof window === 'undefined' && typeof process !== 'undefined') {
		hostname = process.env.BASE_URI;
		fetchType = nodeFetch as unknown as FetchType;
	} else if (typeof window !== 'undefined') {
		hostname = window.location.origin;
		fetchType = fetch as FetchType;
	}

	const uri = `${hostname}/graphql`;
	const link = createUploadLink({
		credentials: 'same-origin',
		uri,
		fetch: fetchType,
	});

	client = new ApolloClient({
		cache: new InMemoryCache(),
		ssrMode: typeof window === 'undefined',
		credentials: 'same-origin',
		link,
		uri,
	});

	return client;
}

export async function gqlQuery<T>(gql: DocumentNode, variables?: T, fetchPolicy: FetchPolicy = 'no-cache') {
	if (!client) {
		initApollo();
	}

	return await client.query<T>({
		query: gql,
		fetchPolicy,
		variables,
	});
}

export async function gqlQueryTyped<T = any, V = Record<string, any>>(
	operation: TypedDocumentNode<T, V>,
	variables?: V,
	options?: Omit<QueryOptions<V, T>, 'query' | 'variables'>
) {
	if (!client) {
		initApollo();
	}

	return await client.query<T>({
		query: operation,
		variables,
		...options,
	});
}

export async function gqlMutate<T>(gql: DocumentNode, variables?: T, fetchPolicy: MutationFetchPolicy = 'no-cache') {
	if (!client) {
		initApollo();
	}

	return await client.mutate<T>({
		mutation: gql,
		fetchPolicy,
		variables,
	});
}

export async function gqlMutateTyped<T = any, V = Record<string, any>>(
	operation: TypedDocumentNode<T, V>,
	variables?: V,
	options?: MutationOptions<T, V>
) {
	if (!client) {
		initApollo();
	}

	return await client.mutate<T>({
		mutation: operation,
		variables,
		...options,
	});
}

function omitDeep(collection: object, excludeKeys: string[]) {
	function omitFn(value) {
		if (value && typeof value === 'object') {
			excludeKeys.forEach((key) => {
				delete value[key];
			});
		}
	}

	return _.cloneDeepWith(collection, omitFn);
}

export function removeTypename<T extends object>(data: T, removeLokiAndMeta?: boolean): T {
	const omitKeys = ['__typename'];
	if (removeLokiAndMeta) {
		omitKeys.push('$loki', 'meta');
	}

	return omitDeep(data, omitKeys) as T;
}
