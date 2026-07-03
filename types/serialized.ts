/**
 * Maps a server-side type to its over-the-wire shape. No tRPC transformer is
 * configured, so Dates serialize to ISO strings, and BigInt cannot be sent at
 * all — routers convert those to numbers (serializeSolveTimestamps) before
 * returning, so bigint maps to number here.
 */
export type Serialized<T> = T extends Date
	? string
	: T extends bigint
	? number
	: T extends Array<infer U>
	? Array<Serialized<U>>
	: T extends object
	? {[K in keyof T]: Serialized<T[K]>}
	: T;
