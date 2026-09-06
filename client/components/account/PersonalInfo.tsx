import {Button} from '@/components/ui/button';
import {Field} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {api} from '@/util/api';
import {useInput} from '@/util/hooks/useInput';
import {useMe} from '@/util/hooks/useMe';
import {toastError} from '@/util/toast';
import React from 'react';

export default function PersonalInfo() {
	const fieldId = React.useId();

	const me = useMe();

	const [email, setEmail] = useInput(me.email);
	const [username, setUsername] = useInput(me.username);

	const updateAccountMutation = api.user.update.useMutation();

	async function clickUpdate() {
		try {
			await updateAccountMutation.mutateAsync({
				username,
				email,
			});

			window.location.reload();
		} catch (err) {
			toastError(err);
		}
	}

	return (
		<div className="flex flex-col gap-5">
			<Field className="gap-2">
				<Label htmlFor={`${fieldId}-1`}>Username</Label>
				<Input
					value={username}
					onChange={setUsername}
					name="username"
					id={`${fieldId}-1`}
				/>
			</Field>
			<Field className="gap-2">
				<Label htmlFor={`${fieldId}-2`}>Email</Label>
				<Input value={email} onChange={setEmail} name="email" id={`${fieldId}-2`} />
			</Field>
			<Button className="self-start" onClick={clickUpdate}>
				{'Update Info'}
			</Button>
		</div>
	);
}
