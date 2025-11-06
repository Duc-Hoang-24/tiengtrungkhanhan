// app/NavbarWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from './components/Sections';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar = /^\/hsk[1-6]/.test(pathname); // or your condition

  if (hideNavbar) {
    return null;
  }

  return <Navbar />;
}