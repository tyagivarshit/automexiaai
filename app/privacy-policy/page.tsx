"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
          </nav>

          <a
            href="/"
            className="px-4 py-2 bg-[#1E5EFF] text-white rounded-lg hover:bg-[#0B2A5B] transition"
          >
            Back to Home
          </a>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <section className="pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-500 text-sm mb-8">
            Last Updated: April 7, 2026
          </p>

          <p className="mb-6 leading-relaxed">
            This Privacy Policy describes how Automexia AI ("we", "our", or "us")
            collects, uses, and protects your information when you use our platform.
            By accessing or using our services, you agree to the terms outlined here.
          </p>

          {/* SECTION */}
          <Section title="1. Information We Collect">
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details such as name, email, and contact information</li>
              <li>Account credentials and authentication data</li>
              <li>Usage data including interactions, logs, and activity</li>
              <li>Automation data such as messages processed via AI systems</li>
              <li>Device, browser, and IP address information</li>
            </ul>
          </Section>

          <Section title="2. How We Use Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate and maintain our platform</li>
              <li>To automate conversations and improve AI performance</li>
              <li>To personalize user experience</li>
              <li>To analyze trends and optimize services</li>
              <li>To provide customer support</li>
            </ul>
          </Section>

          <Section title="3. Legal Basis for Processing">
            <p>
              We process your data based on legitimate interests, contractual necessity,
              and your consent where required.
            </p>
          </Section>

          <Section title="4. Data Sharing">
            <p>
              We do not sell your data. We may share information with trusted third-party
              providers (hosting, analytics, APIs) strictly for service operation.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              Our platform integrates with third-party services such as Instagram APIs
              and analytics tools. These services have their own privacy policies.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We use industry-standard security measures including encryption and access
              control to protect your data.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              Data is retained only as long as necessary for service functionality and
              legal compliance.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Request data portability</li>
            </ul>
          </Section>

          <Section title="9. Cookies & Tracking">
            <p>
              We use cookies and similar technologies to enhance user experience and
              analyze traffic.
            </p>
          </Section>

          <Section title="10. International Transfers">
            <p>
              Your data may be processed in different countries depending on our
              infrastructure providers.
            </p>
          </Section>

          <Section title="11. Children’s Privacy">
            <p>
              Our services are not intended for users under the age of 13.
            </p>
          </Section>

          <Section title="12. Policy Updates">
            <p>
              We may update this Privacy Policy periodically. Changes will be reflected
              on this page.
            </p>
          </Section>

          <Section title="13. Contact Information">
            <p>Email: contact@automexiaai.in</p>
          </Section>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
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

/* REUSABLE SECTION */
function Section({ title, children }: any) {
  return (
    <div className="mt-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#1E5EFF]">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}