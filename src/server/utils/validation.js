import Ajv from 'ajv';
import GraphQLError from './graphql_error';

const ajv = new Ajv({allErrors: true, verbose: true});
import errs from 'ajv-errors';

errs(ajv);

export function validateOrFail(schema, input) {
	const validate = ajv.compile(schema);

	const valid = validate(input);
	if (!valid) {
		const err = validate.errors[0];
		throw new GraphQLError(400, err.parentSchema.title + ' ' + err.message);
	}
}

export function validateEmptyRecord(record, type, column, status) {
	if (!record) {
		throw new GraphQLError(status || 404, `Could not find ${type} with that ${column || 'id'}`);
	}
}
