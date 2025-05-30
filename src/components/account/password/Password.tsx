import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import {api} from '@/trpc/react';
import React, {useCallback, useState} from 'react';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import {useInput} from '../../../lib/util/hooks/useInput';
import {toastSuccess} from '../../../lib/util/toast';
import PasswordStrength from '../../common/password_strength/PasswordStrength';

export default function Password() {
	const [oldPassword, setOldPassword] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const updatePasswordMutation = api.auth.updatePassword.useMutation();

	const changePassword = useCallback(async () => {
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
	}, [updatePasswordMutation, password, oldPassword]);

	return (
		<div>
			<InputWrapper label="Current Password">
				<Input
					type="password"
					value={oldPassword}
					onChange={setOldPassword}
				/>
			</InputWrapper>
			<InputWrapper label="New Password">
				<Input type="password" value={password} onChange={setPassword} />
			</InputWrapper>
			<PasswordStrength password={password} />
			<div>
				<Button
					size="lg"
					loading={updatePasswordMutation.isPending}
					onClick={changePassword}
				>
					Change Password
				</Button>
				{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
			</div>
		</div>
	);
}
