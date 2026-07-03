import React, {useState} from 'react';
import {validateStrongPassword} from '@/util/auth/password';
import PasswordStrength from '@/components/common/PasswordStrength';
import Input from '@/components/common/inputs/input/Input';
import Button from '@/components/common/Button';
import {useInput} from '@/util/hooks/useInput';
import {api} from '@/util/api';
import {toastSuccess} from '@/util/toast';

export default function Password() {
	const [oldPassword, setOldPassword] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const updatePasswordMutation = api.user.updatePassword.useMutation();

	async function changePassword() {
		if (updatePasswordMutation.isPending) {
			return;
		}

		const validate = validateStrongPassword(password);
		if (!validate.number1Check || !validate.cap1Check || !validate.char8Check) {
			setError('Weak password');
			return;
		}

		try {
			await updatePasswordMutation.mutateAsync({
				old_password: oldPassword,
				new_password: password,
			});

			toastSuccess('Successfully updated password');
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<div>
			<Input
				type="password"
				value={oldPassword}
				legend="Current Password"
				onChange={setOldPassword}
			/>
			<Input type="password" value={password} legend="New Password" onChange={setPassword} />
			<PasswordStrength password={password} />
			<Button
				primary
				glow
				large
				text="Change Password"
				error={error}
				loading={updatePasswordMutation.isPending}
				onClick={changePassword}
			/>
		</div>
	);
}
