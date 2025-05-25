'use client';

import Settings from '../../components/settings/Settings';
import {ReactNode} from 'react';

export default function SettingsLayout({children}: {children: ReactNode}) {
  return <Settings>{children}</Settings>;
}