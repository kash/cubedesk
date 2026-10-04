/**
 * Total ordering over arbitrary field values, matching the LokiJS comparators the local DB was built on
 * (ltHelper/gtHelper/aeqHelper), so existing queries keep their exact semantics:
 *
 *   NaN < null/undefined < false < true < "" < everything else
 *
 * "Everything else" (non-empty strings, non-zero and zero numbers, dates, objects) compares numerically when
 * both sides are number-like (so "5" > 0), puts number-like values before non-numeric ones, and otherwise
 * falls back to native and then string comparison.
 */
export function compareValues(a: unknown, b: unknown): number {
	// Fast path: almost every comparison in practice is between two plain numbers (times, timestamps)
	if (typeof a === 'number' && typeof b === 'number' && a === a && b === b) {
		return a < b ? -1 : a > b ? 1 : 0;
	}

	if (a === b) {
		return 0;
	}

	const rankA = rank(a);
	const rankB = rank(b);
	if (rankA !== OTHER || rankB !== OTHER) {
		return Math.sign(rankA - rankB);
	}

	const numA = Number(a);
	const numB = Number(b);
	const aIsNumeric = numA === numA;
	const bIsNumeric = numB === numB;

	if (aIsNumeric && bIsNumeric) {
		return numA < numB ? -1 : numA > numB ? 1 : 0;
	}
	if (aIsNumeric) {
		return -1;
	}
	if (bIsNumeric) {
		return 1;
	}

	// Both non-numeric (strings, objects): native comparison, then string comparison for mixed types
	const left = a as string;
	const right = b as string;
	if (left < right) return -1;
	if (left > right) return 1;

	const strA = String(a);
	const strB = String(b);
	return strA < strB ? -1 : strA > strB ? 1 : 0;
}

const OTHER = 9;

function rank(value: unknown): number {
	switch (value) {
		case undefined:
		case null:
			return 1;
		case false:
			return 3;
		case true:
			return 4;
		case '':
			return 5;
		default:
			// NaN is the only value not equal to itself and sorts below everything
			return value === value ? OTHER : 0;
	}
}
