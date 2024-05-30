'use client'
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {

    const pathname = usePathname()

    console.log('pathname', pathname)
  return (
    <div className="md:flex-between flex flex-col w-full md:flex-row gap-5">
      {headerLinks.map((link) => (
        <Link key={link.label} href={link.route} className={pathname === link.route ? 'text-primary-500  p-medium-16 whitespace-nowrap' : ''}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
