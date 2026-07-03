import React, {useState} from 'react';
import Input from '@/components/common/inputs/input/Input';
import {Link} from 'react-router-dom';
import {validateStrongPassword} from '@/util/auth/password';
import PasswordStrength from '@/components/common/PasswordStrength';
import {getLoginLink, getRedirectLink} from '@/util/auth/login';
import {useInput} from '@/util/hooks/useInput';
import {api} from '@/util/api';
import Button from '@/components/common/Button';

export default function SignUp() {
	const [firstName, setFirstName] = useInput('');
	const [lastName, setLastName] = useInput('');
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
				first_name: firstName.trim(),
				last_name: lastName.trim(),
				email: email.trim(),
				username: username.trim(),
				password,
			});
			window.location.href = getRedirectLink();
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Failed to sign up');
		}
	}

	const disabled =
		!firstName.trim() ||
		!lastName.trim() ||
		!email.trim() ||
		!password.trim() ||
		!username.trim();

	return (
		<div className="bg-module box-border w-[95%] max-w-[400px] rounded-[5px] p-[25px]">
			<form onSubmit={signUp}>
				<div className="grid grid-cols-2 gap-5">
					<Input onChange={setFirstName} value={firstName} legend="First Name" />
					<Input onChange={setLastName} value={lastName} legend="Last Name" />
				</div>
				<Input onChange={setEmail} type="email" value={email} legend="Email" />
				<Input
					onChange={setUsername}
					autoCorrect="off"
					autoCapitalize="none"
					value={username}
					name="username"
					legend="Username"
				/>
				<Input onChange={setPassword} type="password" value={password} legend="Password" />
				<PasswordStrength password={password} />
				<Button
					loading={createAccountMutation.isPending}
					type="submit"
					disabled={disabled}
					error={error}
					primary
					large
					text="Sign up"
				/>
			</form>
			<p className="text-text mt-[25px] mb-0 text-[0.9rem]">
				Already have an account?{' '}
				<Link
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					to={getLoginLink()}
				>
					Log in
				</Link>
			</p>
		</div>
	);
}
