import React, {useState} from 'react';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import PasswordStrength from '../../common/password_strength/PasswordStrength';
import Input from '../../common/inputs/input/Input';
import Button from '../../common/button/Button';
import {useInput} from '../../../lib/util/hooks/useInput';
import {toastSuccess} from '../../../lib/util/toast';
import {api} from '@/trpc/react';

export default function Password() {
	const [oldPassword, setOldPassword] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const updatePasswordMutation = api.auth.updatePassword.useMutation();

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
				oldPassword,
				newPassword: password,
			});

			toastSuccess('Successfully updated password');
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<div>
			<Input type="password" value={oldPassword} legend="Current Password" onChange={setOldPassword} />
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
