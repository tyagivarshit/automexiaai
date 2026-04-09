import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLockup } from "@/components/brand-lockup";

const APP_URL = "https://app.automexiaai.in/auth/register";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="px-6 pb-8 pt-4 md:px-10">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-200/70 bg-white/80 px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl md:px-10 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <BrandLockup showTagline={false} />
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Premium automation for Instagram-first businesses that want faster
              replies, cleaner lead pipelines, and a brand that feels bigger
              than its team size.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:max-w-md md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200/70 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Automexia AI. Built for fast lead conversion.</p>

          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-950 transition hover:text-[#1E5EFF]"
          >
            Open platform
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
