import React from 'react';
import Admin from '../../components/admin/Admin';
import {usePathname} from 'next/navigation';

export default function AdminLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  return <Admin path={pathname}>{children}</Admin>;
}