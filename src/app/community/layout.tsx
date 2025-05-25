import React from 'react';
import Community from '../../components/community/Community';

export default function CommunityLayout({children}: {children: React.ReactNode}) {
  return <Community>{children}</Community>;
}