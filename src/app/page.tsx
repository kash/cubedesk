'use client';

import DefaultTimer from '../components/timer/DefaultTimer';
import { useMe } from '../lib/util/hooks/useMe';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const me = useMe();
  
  // Redirect to home page if not logged in
  useEffect(() => {
    if (!me && typeof window !== 'undefined') {
      redirect('/home');
    }
  }, [me]);

  if (!me) {
    return null;
  }
  
  return <DefaultTimer />;
}