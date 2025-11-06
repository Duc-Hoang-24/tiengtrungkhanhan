// app/NavbarWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Footer from './components/BottomSections';

export default function FooterWrapper() {
  const pathname = usePathname();
  const hideFooter = /^\/hsk[1-6]/.test(pathname); // or your condition

  if (hideFooter) {
    return null;
  }

  return <Footer />;
}