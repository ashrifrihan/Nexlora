"use client";

import { useState } from "react";

const links = ["Work", "Solutions", "Products", "Journal", "Careers", "About", "Contact"];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-0 lg:top-6 lg:px-4">
      <nav className="mx-auto max-w-none border-b border-white/10 bg-black px-6 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-12 sm:py-5 lg:max-w-[956px] lg:animate-[nav-drop-in_760ms_cubic-bezier(0.16,1,0.3,1)_120ms_both] lg:rounded-2xl lg:border lg:border-white/10 lg:bg-[#0c0c0c]/90 lg:px-7 lg:py-4 lg:shadow-[0_18px_60px_rgba(0,0,0,0.45)] motion-reduce:lg:animate-none">
        <div className="flex items-center justify-between gap-5 [font-family:Satoshi,Inter,sans-serif]">
          <a
            href="#"
            className="shrink-0 text-[30px] font-black italic leading-none tracking-[-0.06em] text-white transition-transform duration-300 hover:scale-[1.02] sm:text-[38px] lg:text-[32px] lg:not-italic lg:tracking-[-0.04em]"
            aria-label="Nexlora home"
          >
            nexlora
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-[10px] px-4 py-3 text-[14px] font-medium leading-none tracking-[-0.02em] text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#start-project"
              className="start-project-button flex items-center justify-center gap-2.5 rounded-[10px] bg-white px-[18px] py-[12px] text-[14px] font-semibold leading-none text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start a Project
            </a>
          </div>

          <button
            type="button"
            className="group grid h-11 w-11 place-items-center rounded-full text-white transition-transform duration-300 ease-out hover:scale-105 active:scale-95 sm:h-12 sm:w-12 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative block h-7 w-7">
              <span
                className={`absolute left-1/2 h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
                  isOpen
                    ? "top-1/2 w-[31px] -translate-x-1/2 -translate-y-1/2 rotate-45"
                    : "top-[5px] w-7 -translate-x-1/2 group-hover:w-6"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-200 ease-out ${
                  isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100 group-hover:translate-x-[-46%]"
                }`}
              />
              <span
                className={`absolute left-1/2 h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
                  isOpen
                    ? "top-1/2 w-[31px] -translate-x-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-[5px] w-7 -translate-x-1/2 group-hover:w-6"
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
            <div className="mt-5 border-t border-white/10 pt-6 [font-family:Satoshi,Inter,sans-serif] sm:mt-7 sm:pt-7">
              <div className="grid gap-3 px-1">
                {links.map((link, index) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                    className={`w-fit rounded-lg px-0 py-1.5 text-[18px] font-medium leading-tight tracking-[-0.03em] text-white/90 transition-all duration-300 ease-out hover:translate-x-1.5 hover:text-white sm:text-[22px] ${
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
                className={`mt-8 transition-all duration-300 ease-out sm:mt-10 ${
                  isOpen ? "translate-y-0 opacity-100 delay-150" : "-translate-y-2 opacity-0"
                }`}
              >
                <a
                  href="#start-project"
                  className="start-project-button flex min-h-14 w-full items-center justify-center rounded-2xl bg-white px-5 text-center text-[17px] font-semibold leading-none tracking-[-0.02em] text-black sm:min-h-16 sm:text-[18px]"
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Start a Project
                </a>

                <div className="mt-5 flex items-center justify-center text-[14px] font-medium tracking-[-0.02em] text-white/85 sm:text-[15px]">
                  <a
                    href="mailto:hello@nexlora.com"
                    className="transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    hello@nexlora.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
