'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import {api} from '@/trpc/react';
import React, {useCallback} from 'react';
import {useInput} from '../../../lib/util/hooks/useInput';
import {useMe} from '../../../lib/util/hooks/useMe';
import {toastError} from '../../../lib/util/toast';

export default function PersonalInfoPage() {
	const me = useMe();

	const [firstName, setFirstName] = useInput(me.first_name);
	const [lastName, setLastName] = useInput(me.last_name);
	const [email, setEmail] = useInput(me.email);
	const [username, setUsername] = useInput(me.username);

	const updateAccountMutation = api.auth.updateUserAccount.useMutation();

	const clickUpdate = useCallback(async () => {
		try {
			await updateAccountMutation.mutateAsync({
				firstName,
				lastName,
				username,
				email,
			});

			window.location.reload();
		} catch (err) {
			toastError(err as Error);
		}
	}, [updateAccountMutation, firstName, lastName, username, email]);

	return (
		<div>
			<InputWrapper label="First Name">
				<Input value={firstName} onChange={setFirstName} name="firstName" />
			</InputWrapper>
			<InputWrapper label="Last Name">
				<Input value={lastName} onChange={setLastName} name="lastName" />
			</InputWrapper>
			<InputWrapper label="Username">
				<Input value={username} onChange={setUsername} name="username" />
			</InputWrapper>
			<InputWrapper label="Email">
				<Input value={email} onChange={setEmail} name="email" />
			</InputWrapper>
			<Button size="lg" loading={updateAccountMutation.isPending} onClick={clickUpdate}>
				Update Info
			</Button>
		</div>
	);
}
