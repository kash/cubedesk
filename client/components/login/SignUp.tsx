import ButtonError from '@/components/common/inputs/Error';
import PasswordStrength from '@/components/common/PasswordStrength';
import {AuthFormLink, useAuthForm} from '@/components/login/AuthFormContext';
import {Button} from '@/components/ui/button';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {api} from '@/util/api';
import {getLoginLink, getRedirectLink} from '@/util/auth/login';
import {validateStrongPassword} from '@/util/auth/password';
import {cn} from '@/util/cn';
import {useInput} from '@/util/hooks/useInput';
import React, {useState} from 'react';

export default function SignUp() {
	const fieldId = React.useId();
	const auth = useAuthForm();

	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [username, setUsername] = useInput('');
	const [error, setError] = useState('');

	const createAccountMutation = api.user.create.useMutation();

	async function signUp(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError('');

		if (createAccountMutation.isPending) {
			return;
		}

		const validate = validateStrongPassword(password);

		if (!validate.isStrong) {
			setError(validate.errorMessage);
			return;
		}

		try {
			await createAccountMutation.mutateAsync({
				email: email.trim(),
				username: username.trim(),
				password,
			});
			window.location.href = auth?.redirectTo ?? getRedirectLink();
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Failed to sign up');
		}
	}

	const disabled = !email.trim() || !password.trim() || !username.trim();

	return (
		<div
			className={cn('box-border', {
				'w-full': !!auth,
				'bg-module w-[95%] max-w-[400px] rounded-[5px] p-[25px]': !auth,
			})}
		>
			<form onSubmit={signUp}>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-1`}>{'Email'}</FieldLabel>
					<Input onChange={setEmail} type="email" value={email} id={`${fieldId}-1`} />
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-2`}>{'Username'}</FieldLabel>
					<Input
						onChange={setUsername}
						autoCorrect="off"
						autoCapitalize="none"
						value={username}
						name="username"
						id={`${fieldId}-2`}
					/>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-3`}>{'Password'}</FieldLabel>
					<Input
						onChange={setPassword}
						type="password"
						value={password}
						id={`${fieldId}-3`}
					/>
				</Field>
				<PasswordStrength password={password} />
				<div className="mt-4 flex flex-col items-start">
					<Button
						variant="default"
						type="submit"
						size="lg"
						disabled={disabled || createAccountMutation.isPending}
						aria-busy={createAccountMutation.isPending}
					>
						{'Sign up'}
						{createAccountMutation.isPending ? <Spinner aria-hidden="true" /> : null}
					</Button>
					<ButtonError text={error} />
				</div>
			</form>
			<p className="text-text mt-[25px] mb-0 text-[0.9rem]">
				Already have an account?{' '}
				<AuthFormLink
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					view="login"
					to={getLoginLink()}
				>
					Log in
				</AuthFormLink>
			</p>
		</div>
	);
}
