"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, PlusCircle, Search } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Add",
    href: "/add",
    icon: PlusCircle,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex h-20 w-full max-w-md -translate-x-1/2 items-center justify-around border-t border-line bg-surface">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1"
          >
            <Icon
              className={`h-7 w-7 ${
                active ? "text-primary" : "text-text-sub"
              }`}
            />

            <span
              className={`text-xs ${
                active ? "text-primary" : "text-text-sub"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}