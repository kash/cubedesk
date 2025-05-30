import React, {useCallback, useState} from 'react';
import Input from '../../common/inputs/input/Input';
import Link from 'next/link';
import PasswordStrength from '../../common/password_strength/PasswordStrength';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import {useInput} from '../../../lib/util/hooks/useInput';
import {getRedirectLink} from '../../../lib/util/auth/login';
import block from '../../../styles/bem';
import {Button} from '@/components/ui/button';
import {api} from '@/trpc/react';

const b = block('login');

export default function Forgot() {
	const [email, setEmail] = useInput('');
	const [error, setError] = useState('');

	const forgotPasswordMutation = api.auth.forgotPassword.useMutation();

	const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
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
			setError(
				'Forgot password functionality is not yet implemented. Please contact support.',
			);
		} catch (e: unknown) {
			setError(e.message);
		}
	}, [forgotPasswordMutation, email]);

	return (
		<div className={b()}>
			<form onSubmit={handleSubmit}>
				<Input type="email" onChange={setEmail} value={email} name="email" legend="Email" />
				<div>
					<Button loading={forgotPasswordMutation.isPending} type="submit" size="lg">
						Reset Password
					</Button>
					{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
				</div>
			</form>
			<p>
				You can also <Link href="/signup">sign up</Link> or <Link href="/login">login</Link>
				.
			</p>
		</div>
	);
}
