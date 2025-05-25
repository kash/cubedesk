'use client';

import Account from '../../components/account/Account';
import {ReactNode} from 'react';

export default function AccountLayout({children}: {children: ReactNode}) {
  return <Account>{children}</Account>;
}