"use client";

export default function Contact() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/">Home</a>
            <a href="/privacy-policy">Privacy</a>
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
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 mb-10">
            Have questions or need help? We’re here to support you.
          </p>

          {/* Contact Card */}
          <div className="bg-white border rounded-2xl shadow-lg p-8">

            <div className="space-y-4">
              <p className="text-lg font-medium">Email</p>
              <p className="text-[#1E5EFF] font-semibold">
                support@automexiaai.in
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              We typically respond within 24 hours.
            </div>

          </div>

          {/* Extra Trust Line */}
          <p className="mt-8 text-sm text-gray-500">
            For business inquiries or partnerships, feel free to reach out anytime.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to automate your leads?
        </h2>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-[#1E5EFF] rounded-xl font-medium hover:bg-gray-100 transition"
        >
          Get Started 
        </a>
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