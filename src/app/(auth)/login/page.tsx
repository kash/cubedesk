'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {getRedirectLink, getSignUpLink} from '../../../lib/util/auth/login';
import Input from '../../../components/common/inputs/input/Input';
import block from '../../../styles/bem';
import Button from '../../../components/common/button/Button';
import {useInput} from '../../../lib/util/hooks/useInput';
import { api } from '../../../trpc/react';

const b = block('login');

export default function Login() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const authUser = api.userAccount.authenticateUser.useMutation();

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
        <Input type="email" onChange={setEmail} value={email} name="email" legend="Email" />
        <Input onChange={setPassword} type="password" value={password} name="password" legend="Password" />
        <Link href="/forgot">Forgot password</Link>
        <Button loading={loading || authUser.isPending} type="submit" error={error} large primary text="Log In" />
      </form>
      <p>
        Don't have an account? <Link href={getSignUpLink()}>Sign up</Link>
      </p>
    </div>
  );
}