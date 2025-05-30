import React, {useCallback, useState} from 'react';
import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import Link from 'next/link';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import PasswordStrength from '../../common/password_strength/PasswordStrength';
import {getLoginLink, getRedirectLink} from '../../../lib/util/auth/login';
import block from '../../../styles/bem';
import {useInput} from '../../../lib/util/hooks/useInput';
import {Button} from '@/components/ui/button';
import {api} from '@/trpc/react';

const b = block('login');

export default function SignUp() {
	const [firstName, setFirstName] = useInput('');
	const [lastName, setLastName] = useInput('');
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [username, setUsername] = useInput('');
	const [error, setError] = useState('');

	const signupMutation = api.auth.signup.useMutation();

	const signUp = useCallback(async (e) => {
		e.preventDefault();
		setError('');

		if (signupMutation.isPending) {
			return;
		}

		const validate = validateStrongPassword(password);

		if (!validate.isStrong) {
			setError(validate.errorMessage);
			return;
		}

		try {
			await signupMutation.mutateAsync({
				firstName: firstName.trim(),
				lastName: lastName.trim(),
				email: email.trim(),
				username: username.trim(),
				password,
			});
			window.location.href = getRedirectLink();
		} catch (e: unknown) {
			setError(e.message);
		}
	}, [signupMutation, password, firstName, lastName, email, username]);

	const disabled = !firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !username.trim();

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
						loading={signupMutation.isPending}
						type="submit"
						disabled={disabled}
						size="lg"
					>
						Sign up
					</Button>
					{error && <p className="text-sm text-red-600 mt-1">{error}</p>}
				</div>
			</form>
			<p>
				Already have an account? <Link href={getLoginLink()}>Log in</Link>
			</p>
		</div>
	);
}
