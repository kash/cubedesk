import ButtonError from '@/components/common/inputs/Error';
import PasswordStrength from '@/components/common/PasswordStrength';
import {Button} from '@/components/ui/button';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {api} from '@/util/api';
import {validateStrongPassword} from '@/util/auth/password';
import {useInput} from '@/util/hooks/useInput';
import {toastSuccess} from '@/util/toast';
import React, {useState} from 'react';

export default function Password() {
	const fieldId = React.useId();

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
			setError(err instanceof Error ? err.message : 'Could not update password');
		}
	}

	return (
		<div>
			<Field className="mb-2">
				<FieldLabel htmlFor={`${fieldId}-1`}>{'Current Password'}</FieldLabel>
				<Input
					type="password"
					value={oldPassword}
					onChange={setOldPassword}
					id={`${fieldId}-1`}
				/>
			</Field>
			<Field className="mb-2">
				<FieldLabel htmlFor={`${fieldId}-2`}>{'New Password'}</FieldLabel>
				<Input
					type="password"
					value={password}
					onChange={setPassword}
					id={`${fieldId}-2`}
				/>
			</Field>
			<PasswordStrength password={password} />
			<div className="mt-5 flex flex-col items-start">
				<Button
					variant="default"
					onClick={changePassword}
					disabled={updatePasswordMutation.isPending}
					aria-busy={updatePasswordMutation.isPending}
				>
					{'Change Password'}
					{updatePasswordMutation.isPending ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
