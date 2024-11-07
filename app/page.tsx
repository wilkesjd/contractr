import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-righteous-regular)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="/contractr.svg"
          alt="contractr logo"
          width={500}
          height={50}
          priority
        />
        

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/sign-in"
          >
            Login
          </a>
          <a
            className="rounded-full border border-solid border-black/[.5] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/sign-up"
          >
            Register
          </a>
        </div>
      </main>
    </div>
  );
}
