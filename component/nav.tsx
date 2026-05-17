"use client";

import { useState } from "react";

const links = ["Work", "Solutions", "Products", "Journal", "Careers", "About", "Contact"];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6">
      <nav className="mx-auto max-w-[956px] rounded-2xl border border-white/10 bg-[#0c0c0c]/90 px-4 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-7">
        <div className="flex items-center justify-between gap-5 [font-family:Satoshi,Inter,sans-serif]">
          <a
            href="#"
            className="shrink-0 text-[30px] font-black leading-none tracking-[-0.04em] text-white sm:text-[32px]"
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
            className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-transform ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-white transition-transform ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
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
            <div className="mt-5 border-t border-white/10 pt-4 [font-family:Satoshi,Inter,sans-serif]">
              <div className="grid gap-1">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                    className="rounded-xl px-3 py-3 text-[14px] font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white tracking-[-0.02em]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="#start-project"
                  className="block w-full rounded-full bg-white px-6 py-3 text-center text-[14px] font-medium leading-none text-black transition-colors hover:bg-gray-100"
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
