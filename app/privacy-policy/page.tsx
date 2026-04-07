"use client";

import { Shield, Database, Lock, User, Globe, Cookie , MessageCircle} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50/40 text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600">
          Your privacy matters. Here’s how we protect and use your data.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Last Updated: April 7, 2026
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-4xl mx-auto space-y-10">

          <GlassSection icon={<Database />} title="Information We Collect">
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email, and contact details</li>
              <li>Account & authentication data</li>
              <li>Usage logs and activity</li>
              <li>Automation & conversation data</li>
              <li>Device, browser, IP info</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<User />} title="How We Use Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate and improve our platform</li>
              <li>Automate conversations</li>
              <li>Enhance user experience</li>
              <li>Analyze performance</li>
              <li>Provide support</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Data Security">
            <p>
              We use encryption, secure servers, and strict access controls to
              protect your data.
            </p>
          </GlassSection>

          <GlassSection icon={<Lock />} title="Your Rights">
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<Globe />} title="International Transfers">
            <p>
              Your data may be processed globally depending on our infrastructure providers.
            </p>
          </GlassSection>

          <GlassSection icon={<Cookie />} title="Cookies & Tracking">
            <p>
              We use cookies to improve experience and analyze traffic.
            </p>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Third-Party Services">
            <p>
              We integrate with external services like APIs and analytics tools.
            </p>
          </GlassSection>

          <GlassSection icon={<Database />} title="Data Retention">
            <p>
              Data is retained only as long as necessary for service functionality and compliance.
            </p>
          </GlassSection>

          <GlassSection icon={<User />} title="Children’s Privacy">
            <p>
              Our services are not intended for users under 13.
            </p>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Policy Updates">
            <p>
              We may update this policy periodically.
            </p>
          </GlassSection>

          <GlassSection icon={<MessageCircle />} title="Contact Us">
            <p>
              Email:{" "}
              <a
                href="mailto:contact@automexiaai.in"
                className="text-[#1E5EFF] hover:underline"
              >
                contact@automexiaai.in
              </a>
            </p>
          </GlassSection>

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

/* GLASS CARD */
function GlassSection({ title, icon, children }: any) {
  return (
    <div className="relative bg-white/70 backdrop-blur-xl border rounded-2xl p-6 shadow-lg hover:shadow-xl transition">

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