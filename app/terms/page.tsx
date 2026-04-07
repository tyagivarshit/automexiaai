"use client";

import {
  Shield,
  FileText,
  CreditCard,
  AlertTriangle,
  User,
  RefreshCw,
  Globe,
  Ban,
  MessageCircle,
} from "lucide-react";

export default function Terms() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50/40 text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/">Home</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/contact">Contact</a>
          </nav>

          <a
            href="/"
            className="px-4 py-2 bg-[#1E5EFF] text-white rounded-lg"
          >
            Back to Home
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-12 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-gray-600">
          Please read these terms carefully before using Automexia AI.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Last Updated: April 7, 2026
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-4xl mx-auto space-y-10">

          <GlassSection icon={<FileText />} title="Acceptance of Terms">
            By using our services, you agree to comply with these Terms and all applicable laws.
          </GlassSection>

          <GlassSection icon={<User />} title="Use of Service">
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the platform legally and responsibly</li>
              <li>Avoid misuse of automation features</li>
              <li>You are responsible for your account activity</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Account Responsibility">
            You are responsible for maintaining account security and all activities under it.
          </GlassSection>

          <GlassSection icon={<RefreshCw />} title="Service Modifications">
            We may modify, suspend, or discontinue services at any time.
          </GlassSection>

          <GlassSection icon={<CreditCard />} title="Payment & Billing" highlight>
            Payments for paid plans must be completed on time. All payments are non-refundable unless stated otherwise.
          </GlassSection>

          <GlassSection icon={<AlertTriangle />} title="Limitation of Liability" highlight>
            We are not liable for indirect, incidental, or business losses arising from platform usage.
          </GlassSection>

          <GlassSection icon={<Globe />} title="Third-Party Integrations">
            Integrations (e.g., Instagram APIs) are subject to third-party terms and policies.
          </GlassSection>

          <GlassSection icon={<Ban />} title="Termination">
            We may suspend or terminate accounts that violate these Terms.
          </GlassSection>

          <GlassSection icon={<Shield />} title="Intellectual Property">
            All platform content, branding, and technology belong to Automexia AI.
          </GlassSection>

          <GlassSection icon={<RefreshCw />} title="Changes to Terms">
            We may update these Terms periodically. Continued use implies acceptance.
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

          {/* TRUST LINE */}
          <div className="text-center text-sm text-gray-500 pt-6">
            We operate in compliance with applicable laws and industry standards.
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-12 bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <p>© 2026 Automexia AI</p>

          <div className="flex gap-6">
            <a href="/">Home</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

/* GLASS SECTION */
function GlassSection({ title, icon, children, highlight = false }: any) {
  return (
    <div
      className={`relative backdrop-blur-xl border rounded-2xl p-6 shadow-lg transition hover:shadow-xl ${
        highlight ? "bg-blue-50/80 border-blue-200" : "bg-white/70"
      }`}
    >
      {/* ICON */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-[#1E5EFF] mb-4">
        {icon}
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      {/* CONTENT */}
      <div className="text-gray-700 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}