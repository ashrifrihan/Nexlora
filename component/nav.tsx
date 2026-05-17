"use client";

import { useState } from "react";

const links = ["Work", "Solutions", "Products", "Journal", "Careers", "About", "Contact"];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-0 lg:top-6 lg:px-4">
      <nav className="mx-auto max-w-none border-b border-white/5 bg-black px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-12 sm:py-10 lg:max-w-[956px] lg:rounded-2xl lg:border lg:border-white/10 lg:bg-[#0c0c0c]/90 lg:px-7 lg:py-4 lg:shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between gap-5 [font-family:Satoshi,Inter,sans-serif]">
          <a
            href="#"
            className="shrink-0 text-[42px] font-black leading-none tracking-[-0.06em] text-white transition-transform duration-300 hover:scale-[1.02] sm:text-[56px] lg:text-[32px] lg:tracking-[-0.04em]"
            aria-label="Nexlora home"
          >
            nexlora
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                className="text-[14px] font-medium leading-none text-white/90 transition-colors hover:text-white tracking-[-0.02em]"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#start-project"
              className="rounded-full bg-white px-6 py-3 text-[14px] font-medium leading-none text-black transition-colors hover:bg-gray-100"
            >
              Start a Project
            </a>
          </div>

          <button
            type="button"
            className="group grid h-14 w-16 place-items-center rounded-xl text-white transition-transform duration-300 ease-out hover:scale-105 active:scale-95 sm:h-16 sm:w-20 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative block h-8 w-12 sm:h-10 sm:w-[88px]">
              <span
                className={`absolute left-0 top-0 h-1 w-12 rounded-full bg-white transition-all duration-300 ease-out group-hover:w-10 sm:w-[88px] sm:group-hover:w-20 ${
                  isOpen ? "translate-y-3.5 rotate-45 sm:translate-y-[18px]" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3.5 h-1 w-12 rounded-full bg-white transition-all duration-300 ease-out group-hover:translate-x-1 sm:top-[18px] sm:w-[88px] ${
                  isOpen ? "translate-x-3 opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-1 w-12 rounded-full bg-white transition-all duration-300 ease-out group-hover:w-10 sm:w-[88px] sm:group-hover:w-20 ${
                  isOpen ? "-translate-y-3.5 -rotate-45 sm:-translate-y-[18px]" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="mt-8 border-t border-white/10 pt-6 [font-family:Satoshi,Inter,sans-serif] sm:mt-10 sm:pt-8">
              <div className="grid gap-1">
                {links.map((link, index) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                    className={`rounded-xl px-2 py-3 text-[24px] font-bold tracking-[-0.04em] text-white/90 transition-all duration-300 ease-out hover:translate-x-2 hover:bg-white/5 hover:text-white sm:text-[34px] ${
                      isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDelay: isOpen ? `${index * 35}ms` : "0ms" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div
                className={`mt-6 border-t border-white/10 pt-6 transition-all duration-300 ease-out sm:mt-8 sm:pt-8 ${
                  isOpen ? "translate-y-0 opacity-100 delay-150" : "-translate-y-2 opacity-0"
                }`}
              >
                <a
                  href="#start-project"
                  className="block w-full rounded-full bg-white px-6 py-4 text-center text-[16px] font-bold leading-none tracking-[-0.02em] text-black transition-all duration-300 hover:scale-[1.01] hover:bg-gray-100 active:scale-[0.98] sm:py-5 sm:text-[18px]"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
