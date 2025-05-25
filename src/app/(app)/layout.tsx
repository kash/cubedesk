'use client';

import React, { useEffect, useState } from 'react';
import { useMe } from '../../lib/util/hooks/useMe';
import { useGeneral } from '../../lib/util/hooks/useGeneral';
import Header from '../../components/layout/header/Header';
import Wrapper from '../../components/layout/wrapper/Wrapper';
import Banned from '../../components/layout/banned/Banned';
import { usePathname } from 'next/navigation';
import TopNav from '../../components/layout/top_nav/TopNav';
import { redirect } from 'next/navigation';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const me = useMe();
  const appLoaded = useGeneral('app_loaded');
  const [isRestricted, setIsRestricted] = useState(true);
  
  // Check if the current route requires authentication
  useEffect(() => {
    const publicRoutes = ['/demo', '/', '/about', '/privacy', '/terms'];
    const isPublic = publicRoutes.some(route => pathname === route);
    setIsRestricted(!isPublic);
  }, [pathname]);
  
  // Handle authentication check
  useEffect(() => {
    if (!me && isRestricted) {
      redirect('/login?redirect=' + encodeURIComponent(pathname));
    }
  }, [me, isRestricted, pathname]);

  // Check if user is banned
  if (me?.banned_forever || me?.banned_until) {
    return <Banned />;
  }

  // Check if standalone (for certain pages)
  const isStandalone = pathname === '/demo';
  
  if (isStandalone) {
    return (
      <div className="cd-app-standalone">
        <TopNav />
        {children}
      </div>
    );
  }

  return (
    <>
      <Header path={pathname} />
      {appLoaded ? (
        <Wrapper path={pathname}>
          {children}
        </Wrapper>
      ) : null}
    </>
  );
}