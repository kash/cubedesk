import React, {useState} from 'react';
import Input from '../../common/inputs/input/Input';
import {Link} from 'react-router-dom';
import PasswordStrength from '../../common/password_strength/PasswordStrength';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import {useInput} from '../../../lib/util/hooks/useInput';
import {getRedirectLink} from '../../../lib/util/auth/login';
import block from '../../../styles/bem';
import Button from '../../common/button/Button';
import {api} from '@/trpc/react';

const b = block('login');

export default function Forgot() {
	const [email, setEmail] = useInput('');
	const [error, setError] = useState('');

	const forgotPasswordMutation = api.auth.forgotPassword.useMutation();

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');

		if (forgotPasswordMutation.isPending) {
			return;
		}

		if (!email.trim()) {
			setError('Please enter your email');
			return;
		}

		try {
			await forgotPasswordMutation.mutateAsync({
				email: email.trim(),
			});
			setError('Forgot password functionality is not yet implemented. Please contact support.');
		} catch (e) {
			setError(e.message);
		}
	}

	return (
		<div className={b()}>
			<form onSubmit={handleSubmit}>
				<Input 
					type="email" 
					onChange={setEmail} 
					value={email} 
					name="email" 
					legend="Email" 
				/>
				<Button 
					loading={forgotPasswordMutation.isPending} 
					type="submit" 
					error={error} 
					large 
					primary 
					text="Reset Password" 
				/>
			</form>
			<p>
				You can also <Link to="/signup">sign up</Link> or <Link to="/login">login</Link>.
			</p>
		</div>
	);
}
