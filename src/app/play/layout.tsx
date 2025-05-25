import React from 'react';
import PlayWrapper from '../../components/play/PlayWrapper';

export default function PlayLayout({children}: {children: React.ReactNode}) {
  return <PlayWrapper>{children}</PlayWrapper>;
}