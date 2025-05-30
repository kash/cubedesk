import Ajv from 'ajv';
import errs from 'ajv-errors';
import {TRPCError} from '@trpc/server';

const ajv = new Ajv({allErrors: true, verbose: true});

errs(ajv);

export function validateOrFail(schema, input) {
	const validate = ajv.compile(schema);

	const valid = validate(input);
	if (!valid) {
		const err = validate.errors[0];
		throw new TRPCError({
			code: 'BAD_REQUEST',
			message: err.parentSchema.title + ' ' + err.message,
		});
	}
}

export function validateEmptyRecord(record, type, column, status) {
	if (!record) {
		throw new TRPCError({
			code: status === 404 ? 'NOT_FOUND' : 'BAD_REQUEST',
			message: `Could not find ${type} with that ${column || 'id'}`,
		});
	}
}
