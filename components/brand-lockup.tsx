import Image from "next/image";
import Link from "next/link";

type BrandLockupProps = {
  className?: string;
  href?: string;
  showTagline?: boolean;
};

export function BrandLockup({
  className = "",
  href = "/",
  showTagline = true,
}: BrandLockupProps) {
  return (
    <Link href={href} className={`inline-flex items-center ${className}`.trim()}>
      <div className="flex items-center gap-3">
        <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0b2a5b_0%,#1e5eff_50%,#7dd3fc_100%)] shadow-[0_18px_36px_rgba(30,94,255,0.22)] ring-1 ring-white/70">
          <div className="absolute inset-[1px] rounded-[15px] bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.72),transparent_40%),linear-gradient(160deg,rgba(255,255,255,0.12),rgba(11,42,91,0.12))]" />
          <div className="relative size-10 scale-[2.35]">
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
            Automexia
          </p>
          <div className="flex items-center gap-2">
            <span className="truncate text-lg font-semibold tracking-tight text-slate-950">
              Automexia AI
            </span>
            <span className="hidden rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-700 md:inline-flex">
              Lead OS
            </span>
          </div>
          {showTagline ? (
            <p className="hidden text-xs text-slate-500 md:block">
              Enterprise-grade Instagram automation and lead conversion.
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
