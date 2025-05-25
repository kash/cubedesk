import React from 'react';
import Input from '../../common/inputs/input/Input';
import {useMe} from '../../../lib/util/hooks/useMe';
import block from '../../../styles/bem';
import {useInput} from '../../../lib/util/hooks/useInput';
import Button from '../../common/button/Button';
import {toastError} from '../../../lib/util/toast';
import {api} from '@/trpc/react';

export default function PersonalInfo() {
	const me = useMe();

	const [firstName, setFirstName] = useInput(me.first_name);
	const [lastName, setLastName] = useInput(me.last_name);
	const [email, setEmail] = useInput(me.email);
	const [username, setUsername] = useInput(me.username);

	const updateAccountMutation = api.auth.updateUserAccount.useMutation();

	async function clickUpdate() {
		try {
			await updateAccountMutation.mutateAsync({
				firstName,
				lastName,
				username,
				email,
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
			<Button primary large glow loading={updateAccountMutation.isPending} text="Update Info" onClick={clickUpdate} />
		</div>
	);
}
