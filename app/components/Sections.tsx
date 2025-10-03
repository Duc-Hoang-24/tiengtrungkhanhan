'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { label: "Trang Chủ", href: "/" },

  {
    label: "Khóa Học",
    children: [
      { label: "Giao Tiếp", href: "/khoa-hoc/giao-tiep" },
      { label: "Luyện Thi HSK", href: "/khoa-hoc/hsk" },
      { label: "Khóa 1-1", href: "/khoa-hoc/khoa1-1"}
    ],
  },
  {
    label: "Thư Viện",
    children: [
      { label: "Giáo trình", href: "/thu-vien/giaotrinh" },
      { label: "Ngữ pháp", href: "/thu-vien/nguphap" },
      { label: "Đề thi", href: "/thu-vien/khodethi"}
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  
  // Check if current path matches any children of a menu item
  const isActiveParent = (item: MenuItem): boolean => {
    if (item.href && pathname === item.href) return true;
    return item.children?.some(child => pathname === child.href) || false;
  };

  // Check if child item is currently active
  const isActiveChild = (href: string): boolean => {
    return pathname === href;
  };

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label)
  };

  return (
    <>
      <div className="md:hidden flex flex-row left-20 rounded-lg px-4 -top-0.5">
        <img src="/logo.png" alt="Logo" className="w-auto h-8 my-2 mr-1"/>
        <span className="text-md font-stretch-condensed font-bold mt-3">Tiếng Trung Khánh An</span>
      </div>
    <nav className='bg-amber-950 text-yellow-200 px-2 md:px-6 py-1 md:py-4 relative z-50'>
      <div className="hidden md:flex absolute flex flex-row md:left-5 lg:left-20 rounded-lg px-4 -top-0.5">
        <img src="/logo.png" alt="Logo" className="w-auto h-8 md:h-10 my-2 mr-2"/>
        <span className="md:text-lg lg:text-xl font-stretch-condensed font-bold mt-4">Tiếng Trung Khánh An</span>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-6 md:gap-x-12 lg:gap-x-24 xl:gap-x-36 font-bold">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="relative"
          >
            {item.children ? (
              <>
                <button
                onClick={() => toggleMenu(item.label)}
                onMouseEnter={() => setOpenMenu(item.label)}
                className='hover:text-red-300 flex items-center'
                >
                  <span 
                  className={`${ isActiveParent (item) ? 'underline underline-offset-4 decoration-3': ''}`}
                  >
                  {item.label}
                  </span>
                  <span className='ml-1 text-xs'>▼</span>
                </button>
                {openMenu === item.label && (
                  <ul
                    className="absolute -left-2.5 top-full mt-2 shadow-lg text-black"
                    onMouseLeave={() => setOpenMenu(null)}
                    onClick={() => setOpenMenu(null)}
                  >
                    <div className="w-auto sm:h-30 md:h-40 rounded-md bg-amber-100 flex items-center justify-center flex-col">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={`block px-4 py-2 rounded-lg pr-1 w-35 md:w-40 lg:w-50 h-10 hover:bg-amber-300 transition ${ isActiveChild(child.href) ? 'bg-amber-300 text-amber-900 font-semibold': ''
                              }`}
                            onClick={() => setOpenMenu(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </>
            ) : (
              <Link href={item.href!} className={`hover:text-red-300 ${pathname === item.href ? 'underline underline-offset-4 decoration-3': ''}`}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </>
  );
}
