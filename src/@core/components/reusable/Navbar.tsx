"use client";

import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    title: "Дашбоард",
    href: `/ru`,
  },
  {
    id: 2,
    title: "Управление",
    href: `/ru/control-employees`,
  },
  {
    id: 3,
    title: "Все действия",
    href: `/ru/all-actions`,
  },
  {
    id: 4,
    title: "Отчетность",
    href: `/ru/reports`,
  },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="space-x-4">
      {navLinks?.map((item) => {
        const isActive = pathname.startsWith(item?.href);
        return (
          <Link
            key={item?.id}
            href={item?.href}
            className={`text-sm font-medium transition-colors ${
              isActive ? "text-main_black" : ""
            } `}
          >
            {item?.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
