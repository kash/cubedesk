import Button from '@/components/common/Button';
import Input from '@/components/common/inputs/input/Input';
import {api} from '@/util/api';
import {getRedirectLink, getSignUpLink} from '@/util/auth/login';
import {useInput} from '@/util/hooks/useInput';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
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

			const redirect = getRedirectLink();
			window.location.href = redirect || '/';
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to log in');
		}
	}

	return (
		<div className="bg-module box-border w-[95%] max-w-[400px] rounded-[5px] p-[25px]">
			<form onSubmit={login}>
				<Input type="email" onChange={setEmail} value={email} name="email" legend="Email" />
				<Input
					onChange={setPassword}
					type="password"
					value={password}
					name="password"
					legend="Password"
				/>
				<Link
					className="text-text mb-[15px] inline-block text-[0.9rem] underline opacity-70"
					to="/forgot"
				>
					Forgot password
				</Link>
				<Button
					loading={logInMutation.isPending}
					type="submit"
					error={error}
					large
					primary
					text="Log In"
				/>
			</form>
			<p className="text-text mt-[25px] mb-0 text-[0.9rem]">
				Don't have an account?{' '}
				<Link
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					to={getSignUpLink()}
				>
					Sign up
				</Link>
			</p>
		</div>
	);
}
