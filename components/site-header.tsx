"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, ShieldCheck, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { BrandLockup } from "@/components/brand-lockup";

const APP_URL = "https://app.automexiaai.in/auth/register";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

function isActiveLink(pathname: string, href: string) {
  if (href.includes("#")) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobileMenuOpen = openPath === pathname;

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200/70 bg-white/80 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        <div className="flex items-center gap-3 px-4 py-3 md:px-6">
          <BrandLockup className="shrink-0" />

          <nav className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              {navLinks.map((link) => {
                const active = isActiveLink(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="size-3.5" />
              Always-on AI sales desk
            </div>

            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-[0_16px_34px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0B2A5B]"
            >
              Get Started
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() =>
              setOpenPath((current) => (current === pathname ? null : pathname))
            }
            className="ml-auto inline-flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-700 transition hover:text-slate-950 md:hidden"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
            mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-200/70 px-4 py-4">
              <div className="space-y-2 rounded-3xl bg-slate-50/90 p-2">
                {navLinks.map((link) => {
                  const active = isActiveLink(pathname, link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpenPath(null)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-white text-slate-950 shadow-sm"
                          : "text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-2xl border border-sky-200/80 bg-sky-50 px-4 py-3 text-sm text-sky-900">
                <Sparkles className="size-4 shrink-0" />
                Built to feel like a real revenue engine, not a generic bot tool.
              </div>

              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenPath(null)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white"
              >
                Launch Platform
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
