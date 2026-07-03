import React from 'react';
import Input from '@/components/common/inputs/input/Input';
import {useMe} from '@/util/hooks/useMe';
import {useInput} from '@/util/hooks/useInput';
import {api} from '@/util/api';
import Button from '@/components/common/Button';
import {toastError} from '@/util/toast';

export default function PersonalInfo() {
	const me = useMe();

	const [firstName, setFirstName] = useInput(me.first_name);
	const [lastName, setLastName] = useInput(me.last_name);
	const [email, setEmail] = useInput(me.email);
	const [username, setUsername] = useInput(me.username);

	const updateAccountMutation = api.user.update.useMutation();

	async function clickUpdate() {
		try {
			await updateAccountMutation.mutateAsync({
				first_name: firstName,
				last_name: lastName,
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
			<Button primary large glow text="Update Info" onClick={clickUpdate} />
		</div>
	);
}
