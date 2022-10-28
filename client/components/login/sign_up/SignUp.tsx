import React, {useState} from 'react';
import Input from '../../common/inputs/input/Input';
import {Link} from 'react-router-dom';
import {gql} from '@apollo/client/core';
import {validateStrongPassword} from '../../../util/auth/password';
import PasswordStrength from '../../common/password_strength/PasswordStrength';
import {getLoginLink, getRedirectLink} from '../../../util/auth/login';
import block from '../../../styles/bem';
import {useInput} from '../../../util/hooks/useInput';
import {useMutation} from '@apollo/client';
import {UserAccount} from '../../../@types/generated/graphql';
import Button from '../../common/button/Button';

const b = block('login');

const CREATE_USER_ACCOUNT_MUTATION = gql`
	mutation Mutate($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!) {
		createUserAccount(
			first_name: $firstName
			last_name: $lastName
			email: $email
			username: $username
			password: $password
		) {
			id
		}
	}
`;

export default function SignUp() {
	const [firstName, setFirstName] = useInput('');
	const [lastName, setLastName] = useInput('');
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [username, setUsername] = useInput('');
	const [error, setError] = useState('');

	const [createAccount, createAccountData] = useMutation<
		{createUserAccount: UserAccount},
		{
			firstName: string;
			lastName: string;
			username: string;
			email: string;
			password: string;
		}
	>(CREATE_USER_ACCOUNT_MUTATION);

	async function signUp(e) {
		e.preventDefault();
		setError('');

		if (createAccountData?.loading) {
			return;
		}

		const validate = validateStrongPassword(password);

		if (!validate.isStrong) {
			setError(validate.errorMessage);
			return;
		}

		try {
			await createAccount({
				variables: {
					firstName: firstName.trim(),
					lastName: lastName.trim(),
					email: email.trim(),
					username: username.trim(),
					password,
				},
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
					loading={createAccountData?.loading}
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
