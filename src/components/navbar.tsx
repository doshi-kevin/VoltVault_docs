import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Command, MenuIcon, Triangle } from "lucide-react";
import Search from "./search";
import Anchor from "./anchor";

export function Navbar() {
  return (
    <nav className="h-14 border-b-2 dark:border-zinc-800 border-zinc-200 flex flex-row items-center sticky top-0 bg-inherit z-50 pl-4 max-[800px]:pl-1 max-[800px]:pr-2 dark:bg-zinc-950 bg-white">
      <div className="flex flex-row items-center justify-between w-[64%] pl-1 max-[1350px]:w-[97%]  mx-auto">
        <div className="flex flex-row items-center gap-8 ">
          <Link
            href="/"
            className="text-lg font-bold whitespace-nowrap flex flex-row gap-2"
          >
            <Command />
            <span className="max-[800px]:hidden">VoltVault Documentation</span>
          </Link>
          <div className="flex flex-row items-center gap-4 text-zinc-400">
            <Anchor absolute className="text-sm" href="/docs/introduction">
              Documentation
            </Anchor>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Search />
          <Button className="md:hidden" variant="ghost" size="icon">
            <MenuIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
