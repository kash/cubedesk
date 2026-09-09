import {catalogCsv} from '@/server/models/trainer/test-fixtures/catalog-csv';
import {parseCsv, parseTrainerCsv} from '@/server/models/trainer/csv';
import {catalogChanges} from '@/server/models/trainer/catalog';
import {MAX_CSV_BYTES, MAX_CSV_RECORDS} from '@/shared/trainer/catalog';

const header = 'id,name,cube_type,algo_type';

test('imports a bulk legacy-format catalog without paid restrictions or dropping incomplete algorithms', () => {
	const result = parseTrainerCsv(catalogCsv);
	expect(result.errors).toEqual([]);
	expect(result.algorithms).toHaveLength(740);
	expect(result.algorithms.every((algorithm) => algorithm.active)).toBe(true);
	expect(
		result.algorithms.every(
			(algorithm) => !('pro_only' in algorithm) && !('algo_type_id' in algorithm),
		),
	).toBe(true);
	expect(result.algorithms[0].scrambles).toContain('\n');
	expect(result.warnings).toHaveLength(4);
	for (const id of ['missing_solution_a', 'missing_solution_b']) {
		expect(result.algorithms.find((algorithm) => algorithm.id === id)).toMatchObject({
			active: true,
			solution: '',
			scrambles: '',
		});
	}
});

test('supports reordered headers, BOM, CRLF, quoted commas, escaped quotes and embedded newlines', () => {
	const result = parseTrainerCsv(
		'\uFEFFname,id,algo_type,cube_type,scrambles,rotate,active\r\n"A, ""B""",abc,OLL,333,"R U\r\nU R",0.0,checked\r\n',
	);
	expect(result.errors).toEqual([]);
	expect(result.algorithms[0]).toMatchObject({
		id: 'abc',
		name: 'A, "B"',
		scrambles: 'R U\r\nU R',
		rotate: 0,
		active: true,
	});
});

test.each(['checked', 'true', '1', 'false', '0', '', 'unchecked'])(
	'accepts boolean encoding %s',
	(active) => {
		const result = parseTrainerCsv(`${header},active\na,A,333,OLL,${active}`);
		expect(result.errors).toEqual([]);
		expect(result.algorithms[0].active).toBe(['checked', 'true', '1'].includes(active));
	},
);

test.each([
	`${header},id\na,A,333,OLL,a`,
	`${header}\na,A,333,OLL\na,B,333,OLL`,
	`${header}\na,A,unknown,OLL`,
	`${header},active\na,A,333,OLL,maybe`,
	`${header},rotate\na,A,333,OLL,nope`,
	`${header},rotate\na,A,333,OLL,0.5`,
	`${header}\na,A,333`,
	`${header}\na,"A,333,OLL`,
	`${header}\na,"A"oops,333,OLL`,
	`${header}\na,A,333,Custom`,
	`${header},img_link\na,A,333,OLL,javascript:alert(1)`,
	`${header}\n`,
])('rejects invalid CSV without a usable import', (csv) => {
	expect(parseTrainerCsv(csv).errors.length).toBeGreaterThan(0);
});

test('enforces byte and record limits including multibyte UTF-8', () => {
	expect(() => parseCsv('x'.repeat(MAX_CSV_BYTES + 1))).toThrow('5 MiB');
	expect(() => parseCsv('é'.repeat(MAX_CSV_BYTES / 2 + 1))).toThrow('5 MiB');
	expect(() => parseCsv('id\n' + 'a\n'.repeat(MAX_CSV_RECORDS + 1))).toThrow('10,000');
});

test('diff merges by ID, preserves absent rows, and clears supplied empty fields', () => {
	const original = parseTrainerCsv(`${header},solution\na,A,333,OLL,R\nb,B,333,PLL,U`).algorithms;
	const updated = parseTrainerCsv(`${header},solution\na,A,333,OLL,\nc,C,333,PLL,F`).algorithms;
	const changes = catalogChanges(updated, original);
	expect(changes.map(({id, kind}) => ({id, kind}))).toEqual([
		{id: 'a', kind: 'changed'},
		{id: 'c', kind: 'new'},
	]);
	expect(changes[0].fields).toEqual([{field: 'solution', before: 'R', after: ''}]);
	expect(catalogChanges(original, original).every((change) => change.kind === 'unchanged')).toBe(
		true,
	);
});
