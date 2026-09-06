import {
	algorithmWarnings,
	CatalogAlgorithm,
	catalogFields,
	MAX_CSV_BYTES,
	MAX_CSV_RECORDS,
	trainerAlgorithmSchema,
} from '@/shared/trainer/catalog';

export interface ImportIssue {
	row: number;
	message: string;
}

// RFC 4180 records, including quoted newlines. Row numbers are logical CSV records.
export function parseCsv(text: string): string[][] {
	if (Buffer.byteLength(text, 'utf8') > MAX_CSV_BYTES)
		throw new Error('CSV must be 5 MiB or smaller');
	text = text.replace(/^\uFEFF/, '');
	const records: string[][] = [];
	let row: string[] = [],
		field = '',
		quoted = false,
		closed = false;
	function endRow() {
		row.push(field);
		if (row.length > 1 || row[0] !== '') records.push(row);
		if (records.length > MAX_CSV_RECORDS + 1)
			throw new Error('CSV has more than 10,000 records');
		row = [];
		field = '';
		closed = false;
	}
	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		if (quoted) {
			if (char === '"') {
				if (text[i + 1] === '"') {
					field += '"';
					i++;
				} else {
					quoted = false;
					closed = true;
				}
			} else {
				field += char;
			}
		} else if (char === ',') {
			row.push(field);
			field = '';
			closed = false;
		} else if (char === '\r' || char === '\n') {
			if (char === '\r' && text[i + 1] === '\n') i++;
			endRow();
		} else if (char === '"' && !field && !closed) {
			quoted = true;
		} else {
			if (closed || char === '"')
				throw new Error(`Malformed quoting in CSV record ${records.length + 1}`);
			field += char;
		}
	}
	if (quoted) throw new Error('Unterminated quoted CSV field');
	if (field || row.length || closed) endRow();
	return records;
}

export function parseTrainerCsv(text: string) {
	const errors: ImportIssue[] = [],
		warnings: ImportIssue[] = [],
		algorithms: CatalogAlgorithm[] = [];
	let records: string[][];
	try {
		records = parseCsv(text);
	} catch (error) {
		return {algorithms, errors: [{row: 1, message: (error as Error).message}], warnings};
	}
	const headers = (records.shift() ?? []).map((header) => header.trim());
	if (!records.length) errors.push({row: 1, message: 'CSV must contain at least one algorithm'});
	if (new Set(headers).size !== headers.length)
		errors.push({row: 1, message: 'Duplicate column headers'});
	for (const required of ['id', 'name', 'cube_type', 'algo_type']) {
		if (!headers.includes(required))
			errors.push({row: 1, message: `Missing column: ${required}`});
	}
	for (const header of headers) {
		if (![...catalogFields, 'pro_only', 'algo_type_id'].includes(header))
			errors.push({row: 1, message: `Unknown column: ${header}`});
	}
	if (errors.length) return {algorithms, errors, warnings};
	const ids = new Set<string>();
	for (const [index, cells] of records.entries()) {
		const row = index + 2;
		if (cells.length !== headers.length) {
			errors.push({row, message: 'Column count does not match header'});
			continue;
		}
		const raw: Record<string, unknown> = Object.fromEntries(
			headers.map((header, i) => [header, cells[i]]),
		);
		if (headers.includes('active')) {
			const value = String(raw.active).trim().toLowerCase();
			if (['checked', 'true', '1'].includes(value)) raw.active = true;
			else if (['', 'false', '0', 'unchecked'].includes(value)) raw.active = false;
		}
		if (headers.includes('rotate'))
			raw.rotate = String(raw.rotate).trim() === '' ? 0 : Number(raw.rotate);
		const result = trainerAlgorithmSchema.safeParse(raw);
		if (!result.success) {
			for (const issue of result.error.issues)
				errors.push({row, message: `${issue.path.join('.')}: ${issue.message}`});
			continue;
		}
		if (ids.has(result.data.id)) {
			errors.push({row, message: `Duplicate ID: ${result.data.id}`});
			continue;
		}
		ids.add(result.data.id);
		algorithms.push(result.data);
		for (const message of algorithmWarnings(result.data))
			warnings.push({row, message: `${result.data.id}: ${message}`});
	}
	return {algorithms, errors, warnings};
}
