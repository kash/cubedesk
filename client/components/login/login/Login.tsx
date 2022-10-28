import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {gql} from '@apollo/client/core';
import {getRedirectLink, getSignUpLink} from '../../../util/auth/login';
import Input from '../../common/inputs/input/Input';
import {useMutation} from '@apollo/client';
import {UserAccount} from '../../../@types/generated/graphql';
import block from '../../../styles/bem';
import Button from '../../common/button/Button';
import {useInput} from '../../../util/hooks/useInput';

const b = block('login');

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

	async function login(e) {
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
			setError(err.message);
		}
	}

	return (
		<div className={b()}>
			<form onSubmit={login}>
				<Input type="email" onChange={setEmail} value={email} name="email" legend="Email" />
				<Input onChange={setPassword} type="password" value={password} name="password" legend="Password" />
				<Link to="/forgot">Forgot password</Link>
				<Button loading={authUserData?.loading} type="submit" error={error} large primary text="Log In" />
			</form>
			<p>
				Don't have an account? <Link to={getSignUpLink()}>Sign up</Link>
			</p>
		</div>
	);
}
