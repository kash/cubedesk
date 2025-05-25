'use client';

import React, {useState} from 'react';
import Input from '../../../components/common/inputs/input/Input';
import Link from 'next/link';
import PasswordStrength from '../../../components/common/password_strength/PasswordStrength';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import {useInput} from '../../../lib/util/hooks/useInput';
import {getRedirectLink} from '../../../lib/util/auth/login';
import block from '../../../styles/bem';
import Button from '../../../components/common/button/Button';
import { api } from '../../../trpc/react';

const b = block('login');

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
  const [loading, setLoading] = useState(false);

  const forgotCode = api.userAccount.sendForgotPasswordCode.useMutation();
  const checkForgot = api.userAccount.checkForgotPasswordCode.useMutation();
  const updatePass = api.userAccount.updateForgotPassword.useMutation();

  const isLoading = loading || forgotCode.isPending || checkForgot.isPending || updatePass.isPending;
  const err = forgotCode.error?.message || checkForgot.error?.message || updatePass.error?.message || error;

  async function nextStage(e: React.FormEvent) {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      switch (stage) {
        case ForgotStage.EnterEmail: {
          if (!email.trim()) {
            setError('Please enter in your email');
            return;
          }

          await forgotCode.mutateAsync({email: email.trim()});
          setStage(ForgotStage.EnterCode);
          break;
        }
        case ForgotStage.EnterCode: {
          if (!code) {
            setError('Please enter in a code');
            return;
          }

          await checkForgot.mutateAsync({email: email.trim(), code});
          setStage(ForgotStage.NewPassword);
          break;
        }
        case ForgotStage.NewPassword: {
          const validate = validateStrongPassword(newPassword, confirmPassword);

          if (!validate.isStrong) {
            setError(validate.errorMessage);
            return;
          }

          await updatePass.mutateAsync({email: email.trim(), code, password: newPassword});
          window.location.href = getRedirectLink();
          return;
        }
      }
    } catch (e: any) {
      setError(e.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  let body = null;
  switch (stage) {
    case 0: {
      body = (
        <div className={b('section')}>
          <Input onChange={setEmail} value={email} name="email" legend="Email" />
          <Button loading={isLoading} type="submit" error={error} large primary text="Get Code" />
        </div>
      );
      break;
    }
    case 1: {
      body = (
        <div className={b('section')}>
          <p>Please check your email. You should have gotten a code to reset your password.</p>
          <Input onChange={setCode} value={code} name="code" legend="Code" />
          <Button loading={isLoading} type="submit" error={error} large primary text="Check Code" />
        </div>
      );
      break;
    }
    case 2: {
      body = (
        <div className={b('section')}>
          <p>Please check your email. You should have gotten a code to reset your password.</p>
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
          <Button loading={isLoading} type="submit" error={err} large primary text="Change Password & Log in" />
        </div>
      );
      break;
    }
  }

  return (
    <div className={b()}>
      <form onSubmit={nextStage}>{body}</form>
      <p>
        You can also <Link href="/signup">sign up</Link> or <Link href="/login">login</Link>.
      </p>
    </div>
  );
}