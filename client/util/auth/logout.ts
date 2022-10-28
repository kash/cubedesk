import {gql} from '@apollo/client';
import {gqlMutate} from '../../components/api';

export async function logOut() {
	const query = gql`
		mutation Mutate {
			logOut {
				id
			}
		}
	`;

	await gqlMutate(query);

	window.location.href = '/';
}
