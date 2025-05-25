import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {getRedirectLink, getSignUpLink} from '../../../lib/util/auth/login';
import Input from '../../common/inputs/input/Input';
import block from '../../../styles/bem';
import Button from '../../common/button/Button';
import {useInput} from '../../../lib/util/hooks/useInput';
import {api} from '@/trpc/react';

const b = block('login');

export default function Login() {
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const loginMutation = api.auth.login.useMutation();

	async function login(e) {
		e.preventDefault();

		if (loginMutation.isPending) {
			return;
		}

		try {
			await loginMutation.mutateAsync({
				email,
				password,
			});

			const redirect = getRedirectLink();
			window.location.href = redirect || '/';
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<div className={b()}>
			<form onSubmit={login}>
				<Input type="email" onChange={setEmail} value={email} name="email" legend="Email" />
				<Input onChange={setPassword} type="password" value={password} name="password" legend="Password" />
				<Link to="/forgot">Forgot password</Link>
				<Button loading={loginMutation.isPending} type="submit" error={error} large primary text="Log In" />
			</form>
			<p>
				Don't have an account? <Link to={getSignUpLink()}>Sign up</Link>
			</p>
		</div>
	);
}
