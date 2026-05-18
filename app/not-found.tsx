import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-black px-6 py-20 text-white [font-family:Satoshi,Inter,sans-serif]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.13),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%,rgba(255,255,255,0.03))]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <section
        className="relative flex w-full max-w-5xl flex-col items-center justify-center text-center"
        aria-labelledby="not-found-title"
      >
        <p
          className="select-none bg-[linear-gradient(90deg,rgba(255,255,255,0.92),rgba(255,255,255,0.14))] bg-clip-text text-[clamp(8rem,30vw,24rem)] font-bold leading-none tracking-[-0.09em] text-transparent"
          aria-hidden="true"
        >
          404
        </p>

        <div className="-mt-[clamp(4.4rem,11vw,9rem)] w-full max-w-[31rem] rounded-[1.15rem] border border-white/10 bg-[#07080b]/78 px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.74),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:px-9 sm:py-9">
          <h1
            id="not-found-title"
            className="text-[clamp(1.35rem,3vw,1.8rem)] font-semibold leading-tight tracking-[-0.04em] text-white"
          >
            Oops, page not found
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm font-normal leading-6 tracking-[-0.01em] text-white/54 sm:text-[0.95rem]">
            The page you are looking for may have moved, been renamed, or no longer exists.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white px-5 text-sm font-semibold leading-none tracking-[-0.02em] text-black shadow-[0_12px_36px_rgba(255,255,255,0.13)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff3120] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black"
          >
            Back to homepage
            <span className="ml-2" aria-hidden="true">
              -&gt;
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
