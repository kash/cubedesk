import ButtonError from '@/components/common/inputs/Error';
import {AuthFormLink, useAuthForm} from '@/components/login/AuthFormContext';
import {Button} from '@/components/ui/button';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {api} from '@/util/api';
import {getRedirectLink, getSignUpLink} from '@/util/auth/login';
import {cn} from '@/util/cn';
import {useInput} from '@/util/hooks/useInput';
import React, {useState} from 'react';

export default function Login() {
	const fieldId = React.useId();
	const auth = useAuthForm();

	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const logInMutation = api.auth.logIn.useMutation();

	async function login(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (logInMutation.isPending) {
			return;
		}

		try {
			await logInMutation.mutateAsync({
				email,
				password,
			});

			const redirect = auth?.redirectTo ?? getRedirectLink();
			window.location.href = redirect || '/';
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to log in');
		}
	}

	return (
		<div
			className={cn('box-border', {
				'w-full': !!auth,
				'bg-module w-[95%] max-w-[400px] rounded-[5px] p-[25px]': !auth,
			})}
		>
			<form onSubmit={login}>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-1`}>{'Email'}</FieldLabel>
					<Input
						type="email"
						onChange={setEmail}
						value={email}
						name="email"
						id={`${fieldId}-1`}
					/>
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-2`}>{'Password'}</FieldLabel>
					<Input
						onChange={setPassword}
						type="password"
						value={password}
						name="password"
						id={`${fieldId}-2`}
					/>
				</Field>
				<AuthFormLink
					className="text-text mb-[15px] inline-block text-[0.9rem] underline opacity-70"
					view="forgot"
					to="/forgot"
				>
					Forgot password
				</AuthFormLink>
				<div className="flex flex-col items-start">
					<Button
						variant="default"
						type="submit"
						size="lg"
						disabled={logInMutation.isPending}
						aria-busy={logInMutation.isPending}
					>
						{'Log In'}
						{logInMutation.isPending ? <Spinner aria-hidden="true" /> : null}
					</Button>
					<ButtonError text={error} />
				</div>
			</form>
			<p className="text-text mt-[25px] mb-0 text-[0.9rem]">
				Don't have an account?{' '}
				<AuthFormLink
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					view="signup"
					to={getSignUpLink()}
				>
					Sign up
				</AuthFormLink>
			</p>
		</div>
	);
}
