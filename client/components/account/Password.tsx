import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
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
			setError(t('auth.password.weak'));
			return;
		}

		try {
			await updatePasswordMutation.mutateAsync({
				old_password: oldPassword,
				new_password: password,
			});

			toastSuccess(t('auth.password.updated'));
		} catch (err) {
			setError(err instanceof Error ? err.message : t('auth.password.updateFailed'));
		}
	}

	return (
		<div className="flex flex-col gap-5">
			<Field>
				<FieldLabel htmlFor={`${fieldId}-1`}>{t('auth.password.current')}</FieldLabel>
				<Input
					type="password"
					value={oldPassword}
					onChange={setOldPassword}
					id={`${fieldId}-1`}
				/>
			</Field>
			<Field>
				<FieldLabel htmlFor={`${fieldId}-2`}>{t('auth.newPassword')}</FieldLabel>
				<Input
					type="password"
					value={password}
					onChange={setPassword}
					id={`${fieldId}-2`}
				/>
				<PasswordStrength password={password} />
			</Field>
			<div className="flex flex-col items-start">
				<Button
					variant="default"
					onClick={changePassword}
					disabled={updatePasswordMutation.isPending}
					aria-busy={updatePasswordMutation.isPending}
				>
					{t('auth.password.change')}
					{updatePasswordMutation.isPending ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
