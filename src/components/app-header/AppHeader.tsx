"use client";
import Link from "next/link";
import Logo from "../logo/Logo";
import { HEADER_ROUTES } from "@/shared/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AppHeader = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center  mx-auto border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-xs">
          {HEADER_ROUTES.map((route) => {
            return (
              <li key={route.path}>
                <Link
                  className={cn(
                    "text-white/70  rounded-sm px-2 py-1 hover:text-white focus:text-white transition",
                    {
                      "bg-black/10 text-white": route.path === pathname,
                    }
                  )}
                  href={route.path}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
