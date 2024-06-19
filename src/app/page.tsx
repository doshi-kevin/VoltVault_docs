import { buttonVariants } from "@/components/ui/button";
import { Triangle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center min-[800px]:p-24 pt-8 text-center max-[800px]:px-7 pb-8">
      <p className="mb-12 text-xl min-[800]:-mt-32">
        What is in VoltVault? All the tools you need to map a Power System Efficiently.
      </p>
      <h1 className="text-5xl font-bold mb-8 sm:text-7xl">
        The Moderm Power System Database 
      </h1>
      <p className="mb-8 text-xl ">
      Database for efficient Power System data management!
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/docs/introduction"
          className={buttonVariants({
            size: "lg",
          })}
        >
          Get Stared
        </Link>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-5 -mb-12 max-[800px]:mb-12">
        <Triangle className="w-4 h-4" /> 
      </span>
    </main>
  );
}
