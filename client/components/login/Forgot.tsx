import ButtonError from '@/components/common/inputs/Error';
import PasswordStrength from '@/components/common/PasswordStrength';
import {AuthFormLink, useAuthForm} from '@/components/login/AuthFormContext';
import {Button} from '@/components/ui/button';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {api} from '@/util/api';
import {getRedirectLink} from '@/util/auth/login';
import {validateStrongPassword} from '@/util/auth/password';
import {cn} from '@/util/cn';
import {useInput} from '@/util/hooks/useInput';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

enum ForgotStage {
	EnterEmail,
	EnterCode,
	NewPassword,
}

export default function Forgot() {
	const fieldId = React.useId();
	const {t} = useTranslation();
	const auth = useAuthForm();

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
		forgotCodeMutation.isPending ||
		checkForgotMutation.isPending ||
		updatePassMutation.isPending;
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
					setError(t('auth.pleaseEnterInYourEmail'));
					return;
				}

				await forgotCodeMutation.mutateAsync({email: email.trim()});
				setStage(ForgotStage.EnterCode);
				break;
			}
			case ForgotStage.EnterCode: {
				if (!code) {
					setError(t('auth.pleaseEnterInACode'));
					return;
				}

				const valid = await checkForgotMutation.mutateAsync({email: email.trim(), code});
				if (!valid) {
					setError(t('auth.invalidCode'));
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

				await updatePassMutation.mutateAsync({
					email: email.trim(),
					code,
					password: newPassword,
				});
				window.location.href = auth?.redirectTo ?? getRedirectLink();
				return;
			}
		}
	}

	let body: React.ReactNode = null;
	switch (stage) {
		case 0: {
			body = (
				<div className="flex flex-col gap-5">
					<Field>
						<FieldLabel htmlFor={`${fieldId}-1`}>{t('auth.email')}</FieldLabel>
						<Input onChange={setEmail} value={email} name="email" id={`${fieldId}-1`} />
					</Field>
					<div className="flex flex-col items-start">
						<Button
							variant="default"
							type="submit"
							size="lg"
							disabled={loading}
							aria-busy={loading}
						>
							{t('auth.getCode')}
							{loading ? <Spinner aria-hidden="true" /> : null}
						</Button>
						<ButtonError text={error} />
					</div>
				</div>
			);
			break;
		}
		case 1: {
			body = (
				<div className="flex flex-col gap-5">
					<p className="text-text m-0 text-center text-[0.9rem] leading-[1.4rem]">
						{t('auth.passwordReset.checkEmail')}
					</p>
					<Field>
						<FieldLabel htmlFor={`${fieldId}-2`}>{t('auth.code')}</FieldLabel>
						<Input onChange={setCode} value={code} name="code" id={`${fieldId}-2`} />
					</Field>
					<div className="flex flex-col items-start">
						<Button
							variant="default"
							type="submit"
							size="lg"
							disabled={loading}
							aria-busy={loading}
						>
							{t('auth.checkCode')}
							{loading ? <Spinner aria-hidden="true" /> : null}
						</Button>
						<ButtonError text={error} />
					</div>
				</div>
			);
			break;
		}
		case 2: {
			body = (
				<div className="flex flex-col gap-5">
					<p className="text-text m-0 text-center text-[0.9rem] leading-[1.4rem]">
						{t('auth.passwordReset.checkEmail')}
					</p>
					<Field>
						<FieldLabel htmlFor={`${fieldId}-3`}>{t('auth.newPassword')}</FieldLabel>
						<Input
							type="password"
							value={newPassword}
							name="newPassword"
							onChange={setNewPassword}
							id={`${fieldId}-3`}
						/>
					</Field>
					<Field>
						<FieldLabel htmlFor={`${fieldId}-4`}>
							{t('auth.confirmPassword')}
						</FieldLabel>
						<Input
							type="password"
							value={confirmPassword}
							name="confirmPassword"
							onChange={setConfirmPassword}
							id={`${fieldId}-4`}
						/>
						<PasswordStrength
							confirmPassword={confirmPassword}
							password={newPassword}
						/>
					</Field>
					<div className="flex flex-col items-start">
						<Button
							variant="default"
							type="submit"
							size="lg"
							disabled={loading}
							aria-busy={loading}
						>
							{t('auth.changePasswordLogIn')}
							{loading ? <Spinner aria-hidden="true" /> : null}
						</Button>
						<ButtonError text={err} />
					</div>
				</div>
			);
			break;
		}
	}

	return (
		<div
			className={cn('box-border', {
				'w-full': !!auth,
				'bg-module w-[95%] max-w-[400px] rounded-[5px] p-[25px]': !auth,
			})}
		>
			<form onSubmit={nextStage}>{body}</form>
			<p className="text-text mt-[25px] mb-0 text-[0.9rem]">
				{t('auth.also')}{' '}
				<AuthFormLink
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					view="signup"
					to="/signup"
				>
					{t('auth.signUpLower')}
				</AuthFormLink>{' '}
				or{' '}
				<AuthFormLink
					className="text-text mb-0 inline-block text-[0.9rem] underline opacity-70"
					view="login"
					to="/login"
				>
					{t('auth.logInLower')}
				</AuthFormLink>
				.
			</p>
		</div>
	);
}
