"use client";

export default function Terms() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/">Home</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/contact">Contact</a>
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
            Terms & Conditions
          </h1>

          {/* STATIC DATE (NO HYDRATION ISSUE) */}
          <p className="text-gray-500 text-sm mb-8">
            Last Updated: April 7, 2026
          </p>

          <p className="mb-6 leading-relaxed">
            These Terms and Conditions ("Terms") govern your use of Automexia AI. 
            By accessing or using our platform, you agree to be bound by these Terms.
          </p>

          {/* SECTIONS */}

          <Section title="1. Acceptance of Terms">
            By using our services, you agree to comply with all applicable laws 
            and these Terms.
          </Section>

          <Section title="2. Use of Service">
            <ul className="list-disc pl-6 space-y-2">
              <li>You must use the platform legally and responsibly</li>
              <li>You must not misuse automation features</li>
              <li>You are responsible for your account activity</li>
            </ul>
          </Section>

          <Section title="3. Account Responsibility">
            You are responsible for maintaining the confidentiality of your account 
            and any activities that occur under it.
          </Section>

          <Section title="4. Service Modifications">
            We reserve the right to modify, suspend, or discontinue any part of the 
            service at any time without notice.
          </Section>

          <Section title="5. Payment & Billing">
            If you subscribe to paid plans, you agree to pay all applicable fees. 
            Payments are non-refundable unless stated otherwise.
          </Section>

          <Section title="6. Limitation of Liability">
            Automexia AI is not liable for any indirect, incidental, or business 
            losses arising from the use of our platform.
          </Section>

          <Section title="7. Third-Party Integrations">
            Our platform may integrate with third-party services (e.g., Instagram). 
            You are subject to their respective terms and policies.
          </Section>

          <Section title="8. Termination">
            We may suspend or terminate your account if you violate these Terms.
          </Section>

          <Section title="9. Intellectual Property">
            All content, branding, and technology belong to Automexia AI and 
            cannot be reused without permission.
          </Section>

          <Section title="10. Changes to Terms">
            We may update these Terms periodically. Continued use implies acceptance 
            of updated terms.
          </Section>

          <Section title="11. Contact Information">
            Email: support@automexiaai.in
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