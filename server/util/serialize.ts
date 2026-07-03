// BigInt cannot be JSON-serialized, so timestamps go over the wire as numbers (ms)
export function serializeSolveTimestamps<T extends {started_at: bigint | null; ended_at: bigint | null}>(solve: T) {
	return {
		...solve,
		started_at: solve.started_at === null ? null : Number(solve.started_at),
		ended_at: solve.ended_at === null ? null : Number(solve.ended_at),
	};
}
