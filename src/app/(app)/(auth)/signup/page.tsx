'use client';

import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import PasswordStrength from '@/components/common/password_strength/PasswordStrength';
import {Button} from '@/components/ui/button';
import {getLoginLink, getRedirectLink} from '@/lib/util/auth/login';
import {validateStrongPassword} from '@/lib/util/auth/password';
import {useInput} from '@/lib/util/hooks/useInput';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import Link from 'next/link';
import React, {useState} from 'react';

const b = block('login');

export default function SignUp() {
	const [firstName, setFirstName] = useInput('');
	const [lastName, setLastName] = useInput('');
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [username, setUsername] = useInput('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const createAccount = api.auth.signup.useMutation();

	async function signUp(e: React.FormEvent) {
		e.preventDefault();
		setError('');

		if (loading || createAccount.isPending) {
			return;
		}

		const validate = validateStrongPassword(password);

		if (!validate.isStrong) {
			setError(validate.errorMessage);
			return;
		}

		setLoading(true);

		try {
			await createAccount.mutateAsync({
				firstName: firstName.trim(),
				lastName: lastName.trim(),
				email: email.trim(),
				username: username.trim(),
				password,
			});
			window.location.href = getRedirectLink();
		} catch (e: any) {
			setError(e.message || 'Signup failed');
		} finally {
			setLoading(false);
		}
	}

	const disabled =
		!firstName.trim() ||
		!lastName.trim() ||
		!email.trim() ||
		!password.trim() ||
		!username.trim();

	return (
		<div className={b()}>
			<form onSubmit={signUp}>
				<div className={b('row', {split: true})}>
					<InputWrapper label="First Name">
						<Input onChange={setFirstName} value={firstName} />
					</InputWrapper>
					<InputWrapper label="Last Name">
						<Input onChange={setLastName} value={lastName} />
					</InputWrapper>
				</div>
				<InputWrapper label="Email">
					<Input onChange={setEmail} type="email" value={email} />
				</InputWrapper>
				<InputWrapper label="Username">
					<Input
						onChange={setUsername}
						autoCorrect="off"
						autoCapitalize="none"
						value={username}
						name="username"
					/>
				</InputWrapper>
				<InputWrapper label="Password">
					<Input onChange={setPassword} type="password" value={password} />
				</InputWrapper>
				<PasswordStrength password={password} />
				<div>
					<Button
						loading={loading || createAccount.isPending}
						type="submit"
						disabled={disabled}
						size="lg"
					>
						Sign up
					</Button>
					{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
				</div>
			</form>
			<p>
				Already have an account? <Link href={getLoginLink()}>Log in</Link>
			</p>
		</div>
	);
}
