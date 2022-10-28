import {AuthChecker} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';

export enum Role {
	ADMIN = 'ADMIN',
	MOD = 'MOD',
	LOGGED_IN = 'LOGGED_IN',
	PRO = 'PRO',
	DOCUMENT_OWNER = 'DOCUMENT_OWNER',
}

export const customAuthChecker: AuthChecker<GraphQLContext> = ({root, args, context, info}, roles: Role[]) => {
	let passed = true;

	for (const role of roles) {
		switch (role) {
			case Role.LOGGED_IN: {
				passed = passed && !!context.user;
				break;
			}
			case Role.PRO: {
				passed = passed && context?.user?.is_pro;
				break;
			}
			case Role.MOD: {
				passed = passed && (context?.user?.mod || context?.user?.admin);
				break;
			}
			case Role.ADMIN: {
				passed = passed && context?.user?.admin;
				break;
			}
		}
	}

	return passed;
};
