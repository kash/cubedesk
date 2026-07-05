import Button from '@/components/common/Button';
import Input from '@/components/common/inputs/input/Input';
import PasswordStrength from '@/components/common/PasswordStrength';
import {api} from '@/util/api';
import {getRedirectLink} from '@/util/auth/login';
import {validateStrongPassword} from '@/util/auth/password';
import {useInput} from '@/util/hooks/useInput';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

enum ForgotStage {
	EnterEmail,
	EnterCode,
	NewPassword,
}

export default function Forgot() {
	const [stage, setStage] = useState<ForgotStage>(ForgotStage.EnterEmail);
	const [code, setCode] = useInput('');
	const [email, setEmail] = useInput('');
	const [newPassword, setNewPassword] = useInput('');
	const [confirmPassword, setConfirmPassword] = useInput('');
	const [error, setError] = useState('');

	const forgotCodeMutation = api.forgotPassword.sendCode.useMutation();
	const checkForgotMutation = api.forgotPassword.checkCode.useMutation();
	const updatePassMutation = api.forgotPassword.updatePassword.useMutation();

	const loading =
		forgotCodeMutation.isPending || checkForgotMutation.isPending || updatePassMutation.isPending;
	const err =
		forgotCodeMutation.error?.message ||
		checkForgotMutation.error?.message ||
		updatePassMutation.error?.message ||
		error;

	async function nextStage(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (loading) {
			return;
		}

		switch (stage) {
			case ForgotStage.EnterEmail: {
				if (!email.trim()) {
					setError('Please enter in your email');
					return;
				}

				await forgotCodeMutation.mutateAsync({email: email.trim()});
				setStage(ForgotStage.EnterCode);
				break;
			}
			case ForgotStage.EnterCode: {
				if (!code) {
					setError('Please enter in a code');
					return;
				}

				const valid = await checkForgotMutation.mutateAsync({email: email.trim(), code});
				if (!valid) {
					setError('Invalid code');
					return;
				}

				setStage(ForgotStage.NewPassword);
				break;
			}
			case ForgotStage.NewPassword: {
				const validate = validateStrongPassword(newPassword, confirmPassword);

				if (!validate.isStrong) {
					setError(validate.errorMessage);
					return;
				}

				await updatePassMutation.mutateAsync({email: email.trim(), code, password: newPassword});
				window.location.href = getRedirectLink();
				return;
			}
		}
	}

	let body: React.ReactNode = null;
	switch (stage) {
		case 0: {
			body = (
				<div>
					<Input onChange={setEmail} value={email} name="email" legend="Email" />
					<Button
						loading={loading}
						type="submit"
						error={error}
						large
						primary
						text="Get Code"
					/>
				</div>
			);
			break;
		}
		case 1: {
			body = (
				<div>
					<p className="text-text mt-0 mb-[15px] text-center text-[0.9rem] leading-[1.4rem]">
						Please check your email. You should have gotten a code to reset your
						password.
					</p>
					<Input onChange={setCode} value={code} name="code" legend="Code" />
					<Button
						loading={loading}
						type="submit"
						error={error}
						large
						primary
						text="Check Code"
					/>
				</div>
			);
			break;
		}
		case 2: {
			body = (
				<div>
					<p className="text-text mt-0 mb-[15px] text-center text-[0.9rem] leading-[1.4rem]">
						Please check your email. You should have gotten a code to reset your
						password.
					</p>
					<Input
						type="password"
						value={newPassword}
						legend="New Password"
						name="newPassword"
						onChange={setNewPassword}
					/>
					<Input
						type="password"
						value={confirmPassword}
						legend="Confirm Password"
						name="confirmPassword"
						onChange={setConfirmPassword}
					/>
					<PasswordStrength confirmPassword={confirmPassword} password={newPassword} />
					<Button
						loading={loading}
						type="submit"
						error={err}
						large
						primary
						text="Change Password & Log in"
					/>
				</div>
			);
			break;
		}
	}

	return (
		<div className="bg-module box-border w-[95%] max-w-[400px] rounded-[5px] p-[25px]">
			<form onSubmit={nextStage}>{body}</form>
			<p className="text-text mt-[25px] mb-0 text-[0.9rem]">
				You can also{' '}
				<Link
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					to="/signup"
				>
					sign up
				</Link>{' '}
				or{' '}
				<Link
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					to="/login"
				>
					login
				</Link>
				.
			</p>
		</div>
	);
}
