import {
  AlertTriangle,
  Ban,
  CreditCard,
  FileText,
  Globe,
  MessageCircle,
  RefreshCw,
  Shield,
  User,
} from "lucide-react";
import type { ReactNode } from "react";

type GlassSectionProps = {
  children: ReactNode;
  highlight?: boolean;
  icon: ReactNode;
  title: string;
};

export default function Terms() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-white to-blue-50/40 text-gray-900">
      <section className="px-6 pb-12 pt-36 text-center md:px-16 md:pt-40">
        <h1 className="text-4xl font-semibold md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-gray-600">
          Please read these terms carefully before using Automexia AI.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Last Updated: April 7, 2026
        </p>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <GlassSection icon={<FileText />} title="Acceptance of Terms">
            By using our services, you agree to comply with these Terms and all
            applicable laws.
          </GlassSection>

          <GlassSection icon={<User />} title="Use of Service">
            <ul className="list-disc space-y-2 pl-6">
              <li>Use the platform legally and responsibly</li>
              <li>Avoid misuse of automation features</li>
              <li>You are responsible for your account activity</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Account Responsibility">
            You are responsible for maintaining account security and all
            activities under it.
          </GlassSection>

          <GlassSection icon={<RefreshCw />} title="Service Modifications">
            We may modify, suspend, or discontinue services at any time.
          </GlassSection>

          <GlassSection
            icon={<CreditCard />}
            title="Payment & Billing"
            highlight
          >
            Payments for paid plans must be completed on time. All payments are
            non-refundable unless stated otherwise.
          </GlassSection>

          <GlassSection
            icon={<AlertTriangle />}
            title="Limitation of Liability"
            highlight
          >
            We are not liable for indirect, incidental, or business losses
            arising from platform usage.
          </GlassSection>

          <GlassSection icon={<Globe />} title="Third-Party Integrations">
            Integrations such as Instagram APIs are subject to third-party terms
            and policies.
          </GlassSection>

          <GlassSection icon={<Ban />} title="Termination">
            We may suspend or terminate accounts that violate these Terms.
          </GlassSection>

          <GlassSection icon={<Shield />} title="Intellectual Property">
            All platform content, branding, and technology belong to Automexia
            AI.
          </GlassSection>

          <GlassSection icon={<RefreshCw />} title="Changes to Terms">
            We may update these Terms periodically. Continued use implies
            acceptance.
          </GlassSection>

          <GlassSection icon={<MessageCircle />} title="Contact Information">
            Email:{" "}
            <a
              href="mailto:support@automexiaai.in"
              className="text-[#1E5EFF] hover:underline"
            >
              support@automexiaai.in
            </a>
          </GlassSection>

          <div className="pt-6 text-center text-sm text-gray-500">
            We operate in compliance with applicable laws and industry
            standards.
          </div>
        </div>
      </section>
    </main>
  );
}

function GlassSection({
  children,
  highlight = false,
  icon,
  title,
}: GlassSectionProps) {
  return (
    <div
      className={`relative rounded-2xl border p-6 shadow-lg backdrop-blur-xl transition hover:shadow-xl ${
        highlight ? "border-blue-200 bg-blue-50/80" : "bg-white/70"
      }`}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-blue-100 text-[#1E5EFF]">
        {icon}
      </div>

      <h2 className="mb-3 text-xl font-semibold">{title}</h2>

      <div className="text-sm leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}
