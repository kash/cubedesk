import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {gql} from '@apollo/client/core';
import {getRedirectLink, getSignUpLink} from '@/util/auth/login';
import Input from '@/components/common/inputs/input/Input';
import {useMutation} from '@apollo/client';
import {UserAccount} from '@/@types/generated/graphql';
import Button from '@/components/common/button/Button';
import {useInput} from '@/util/hooks/useInput';

const AUTHENTICATE_USER_MUTATION = gql`
	mutation Mutate($email: String!, $password: String!) {
		authenticateUser(email: $email, password: $password) {
			id
		}
	}
`;

export default function Login() {
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const [authUser, authUserData] = useMutation<
		{authenticateUser: UserAccount},
		{
			email: string;
			password: string;
		}
	>(AUTHENTICATE_USER_MUTATION);

	async function login(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (authUserData?.loading) {
			return;
		}

		try {
			await authUser({
				variables: {
					email,
					password,
				},
			});

			const redirect = getRedirectLink();
			window.location.href = redirect || '/';
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to log in');
		}
	}

	return (
		<div className="box-border w-[95%] max-w-[400px] rounded-[5px] bg-module p-[25px]">
			<form onSubmit={login}>
				<Input type="email" onChange={setEmail} value={email} name="email" legend="Email" />
				<Input onChange={setPassword} type="password" value={password} name="password" legend="Password" />
				<Link className="mb-[15px] inline-block text-[0.9rem] text-text underline opacity-70" to="/forgot">
					Forgot password
				</Link>
				<Button loading={authUserData?.loading} type="submit" error={error} large primary text="Log In" />
			</form>
			<p className="mb-0 mt-[25px] text-[0.9rem] text-text">
				Don't have an account?{' '}
				<Link className="mb-0 inline-block text-[0.9rem] text-text underline opacity-70" to={getSignUpLink()}>
					Sign up
				</Link>
			</p>
		</div>
	);
}
