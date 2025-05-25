'use client';

import Landing from '../../components/landing/Landing';
import {ReactNode} from 'react';

export default function LandingLayout({children}: {children: ReactNode}) {
  return <Landing>{children}</Landing>;
}