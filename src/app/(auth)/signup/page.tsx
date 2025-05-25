'use client';

import React, {useState} from 'react';
import Input from '../../../components/common/inputs/input/Input';
import Link from 'next/link';
import {validateStrongPassword} from '../../../lib/util/auth/password';
import PasswordStrength from '../../../components/common/password_strength/PasswordStrength';
import {getLoginLink, getRedirectLink} from '../../../lib/util/auth/login';
import block from '../../../styles/bem';
import {useInput} from '../../../lib/util/hooks/useInput';
import Button from '../../../components/common/button/Button';
import { api } from '../../../trpc/react';

const b = block('login');

export default function SignUp() {
  const [firstName, setFirstName] = useInput('');
  const [lastName, setLastName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [username, setUsername] = useInput('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const createAccount = api.userAccount.createUserAccount.useMutation();

  async function signUp(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (loading || createAccount.isPending) {
      return;
    }

    const validate = validateStrongPassword(password);

    if (!validate.isStrong) {
      setError(validate.errorMessage);
      return;
    }

    setLoading(true);

    try {
      await createAccount.mutateAsync({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        username: username.trim(),
        password,
      });
      window.location.href = getRedirectLink();
    } catch (e: any) {
      setError(e.message || 'Signup failed');
    } finally {
      setLoading(false);
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
          loading={loading || createAccount.isPending}
          type="submit"
          disabled={disabled}
          error={error}
          primary
          large
          text="Sign up"
        />
      </form>
      <p>
        Already have an account? <Link href={getLoginLink()}>Log in</Link>
      </p>
    </div>
  );
}