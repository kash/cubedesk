'use client';

import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import {Button} from '@/components/ui/button';
import {getRedirectLink, getSignUpLink} from '@/lib/util/auth/login';
import {useInput} from '@/lib/util/hooks/useInput';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import Link from 'next/link';
import React, {useState} from 'react';

const b = block('login');

export default function Login() {
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const authUser = api.auth.login.useMutation();

	async function login(e: React.FormEvent) {
		e.preventDefault();

		if (loading || authUser.isPending) {
			return;
		}

		setLoading(true);
		setError('');

		try {
			await authUser.mutateAsync({
				email,
				password,
			});

			const redirect = getRedirectLink();
			window.location.href = redirect || '/';
		} catch (err: any) {
			setError(err.message || 'Login failed');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className={b()}>
			<form onSubmit={login}>
				<InputWrapper label="Email">
					<Input type="email" onChange={setEmail} value={email} name="email" />
				</InputWrapper>
				<InputWrapper label="Password">
					<Input
						onChange={setPassword}
						type="password"
						value={password}
						name="password"
					/>
				</InputWrapper>
				<Link href="/forgot">Forgot password</Link>
				<div>
					<Button loading={loading || authUser.isPending} type="submit" size="lg">
						Log In
					</Button>
					{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
				</div>
			</form>
			<p>
				Don't have an account? <Link href={getSignUpLink()}>Sign up</Link>
			</p>
		</div>
	);
}
