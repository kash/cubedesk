import React, {useState} from 'react';
import Input from '../../common/inputs/input/Input';
import {Link} from 'react-router-dom';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import PasswordStrength from '../../common/password_strength/PasswordStrength';
import {getLoginLink, getRedirectLink} from '../../../lib/util/auth/login';
import block from '../../../styles/bem';
import {useInput} from '../../../lib/util/hooks/useInput';
import Button from '../../common/button/Button';
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

	async function signUp(e) {
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
		} catch (e) {
			setError(e.message);
		}
	}

	const disabled = !firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !username.trim();

	return (
		<div className={b()}>
			<form onSubmit={signUp}>
				<div className={b('row', {split: true})}>
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
					loading={signupMutation.isPending}
					type="submit"
					disabled={disabled}
					error={error}
					primary
					large
					text="Sign up"
				/>
			</form>
			<p>
				Already have an account? <Link to={getLoginLink()}>Log in</Link>
			</p>
		</div>
	);
}
