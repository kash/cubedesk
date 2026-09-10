import {formatWcaResult} from './wca';

it.each([
	['333', 313, false, '3.13'],
	['444', 6504, true, '1:05.04'],
	['555bf', 360001, false, '1:00:00.01'],
	['333fm', 22, false, '22'],
	['333fm', 2433, true, '24.33'],
	// 10 solved, 2 missed: difference 8, encoded as 91; time 3600 seconds.
	['333mbf', 910360002, false, '10/12 (1:00:00)'],
	['333mbf', 919999902, false, '10/12 (time unknown)'],
	// Old format: 1 + (99 - 10) + 12 attempted + 03600 seconds.
	['333mbo', 1891203600, false, '10/12 (1:00:00)'],
	['333', -1, false, 'DNF'],
	['333', -2, false, 'DNS'],
	['333', 0, false, '—'],
	['333', null, false, '—'],
	['333', NaN, false, '—'],
] as const)('formats %s result %s (average %s)', (event, value, average, expected) => {
	expect(formatWcaResult(event, value, average)).toBe(expected);
});
