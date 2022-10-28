import React from 'react';
import Input from '../../common/inputs/input/Input';
import {gql} from '@apollo/client/core';
import {useMe} from '../../../util/hooks/useMe';
import block from '../../../styles/bem';
import {useInput} from '../../../util/hooks/useInput';
import {useMutation} from '@apollo/client';
import {UserAccount} from '../../../@types/generated/graphql';
import Button from '../../common/button/Button';
import {toastError} from '../../../util/toast';

const UPDATE_ME_MUTATION = gql`
	mutation Mutate($firstName: String!, $lastName: String!, $email: String!, $username: String!) {
		updateUserAccount(first_name: $firstName, last_name: $lastName, email: $email, username: $username) {
			id
		}
	}
`;

export default function PersonalInfo() {
	const me = useMe();

	const [firstName, setFirstName] = useInput(me.first_name);
	const [lastName, setLastName] = useInput(me.last_name);
	const [email, setEmail] = useInput(me.email);
	const [username, setUsername] = useInput(me.username);

	const [updateAccount, updateAccountData] = useMutation<
		{updateUserAccount: UserAccount},
		{
			firstName: string;
			lastName: string;
			email: string;
			username: string;
		}
	>(UPDATE_ME_MUTATION);

	async function clickUpdate() {
		try {
			await updateAccount({
				variables: {
					firstName,
					lastName,
					username,
					email,
				},
			});

			window.location.reload();
		} catch (err) {
			toastError(err);
		}
	}

	return (
		<div>
			<Input value={firstName} legend="First Name" onChange={setFirstName} name="firstName" />
			<Input value={lastName} legend="Last Name" onChange={setLastName} name="lastName" />
			<Input value={username} legend="Username" onChange={setUsername} name="username" />
			<Input value={email} legend="Email" onChange={setEmail} name="email" />
			<Button primary large glow text="Update Info" onClick={clickUpdate} />
		</div>
	);
}
