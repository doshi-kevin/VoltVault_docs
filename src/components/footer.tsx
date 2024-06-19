import Link from "next/link";
import ThemeMode from "./theme-mode";

export default function Footer() {
  return (
    <footer className="h-16 border-t-2 dark:border-zinc-800 border-zinc-200 flex flex-row items-center justify-between bg-inherit z-50 text-sm text-center mt-5">
      <div className="flex flex-row items-center justify-between w-[62%] max-[1250px]:w-[90%] max-[800px]:flex-col max-[800px]:gap-3 max-[800px]:pt-12 max-[800px]:pb-4  mx-auto">
        <div>
          A product by by{" "}
          <Link
            className="font-semibold underline  underline-offset-2"
            href={process.env.GITHUB_USER_URL ?? ""}
          >
            IIT Bombay
          </Link>
          . Hosted on{" "}
          <Link
            className="font-semibold underline underline-offset-2"
            href="https://voltvault-eight.vercel.app"
          >
            Vercel
          </Link>
          .The source code is available on{" "}
          <Link
            className="font-semibold underline underline-offset-2"
            href={process.env.GITHUB_PROJECT_URL ?? "https://github.com/doshi-kevin/IITB-docs/tree/models_components"}
          >
            GitHub
          </Link>
          .
        </div>
        <ThemeMode />
      </div>
    </footer>
  );
}
