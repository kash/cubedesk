import React, {useCallback, useState} from 'react';
import Link from 'next/link';
import {getRedirectLink, getSignUpLink} from '../../../lib/util/auth/login';
import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import block from '../../../styles/bem';
import {Button} from '@/components/ui/button';
import {useInput} from '../../../lib/util/hooks/useInput';
import {api} from '@/trpc/react';

const b = block('login');

export default function Login() {
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const loginMutation = api.auth.login.useMutation();

	const login = useCallback(async (e) => {
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
	}, [loginMutation, email, password]);

	return (
		<div className={b()}>
			<form onSubmit={login}>
				<InputWrapper label="Email">
					<Input type="email" onChange={setEmail} value={email} name="email" />
				</InputWrapper>
				<InputWrapper label="Password">
					<Input onChange={setPassword} type="password" value={password} name="password" />
				</InputWrapper>
				<Link href="/forgot">Forgot password</Link>
				<div>
					<Button loading={loginMutation.isPending} type="submit" size="lg">
						Log In
					</Button>
					{error && <p className="text-sm text-red-600 mt-1">{error}</p>}
				</div>
			</form>
			<p>
				Don't have an account? <Link href={getSignUpLink()}>Sign up</Link>
			</p>
		</div>
	);
}
