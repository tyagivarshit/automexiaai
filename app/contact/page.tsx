"use client";

export default function Contact() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

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

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Let’s Talk 👋
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Questions, partnerships, or demo requests — we’re here to help you grow faster with Automexia AI.
        </p>
      </section>

      {/* ================= CONTACT GRID ================= */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT: CONTACT INFO */}
          <div className="bg-white border rounded-2xl shadow-lg p-8 space-y-6">

            <h2 className="text-xl font-semibold">Contact Information</h2>

            <div className="space-y-4 text-sm">

              <div>
                <p className="text-gray-500">Email</p>
                <a
                  href="mailto:contact@automexiaai.in"
                  className="text-[#1E5EFF] font-medium hover:underline"
                >
                  contact@automexiaai.in
                </a>
              </div>

              <div>
                <p className="text-gray-500">Phone / WhatsApp</p>
                <p className="font-medium">+91 7037262098</p>
              </div>

              <div>
                <p className="text-gray-500">Support</p>
                <p className="font-medium">24×7 Support Available</p>
              </div>

            </div>

            <div className="text-sm text-gray-500">
              ⚡ We usually respond within a few hours
            </div>

          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white border rounded-2xl shadow-lg p-8">

            <h2 className="text-xl font-semibold mb-6">
              Send us a message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-3 rounded-xl"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-4 py-3 rounded-xl"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border px-4 py-3 rounded-xl"
              />

              <button
                type="submit"
                className="w-full py-3 bg-[#1E5EFF] text-white rounded-xl hover:bg-[#0B2A5B] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] text-white text-center relative overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold">
            Ready to automate your leads?
          </h2>

          <p className="mt-4 text-white/80">
            Start using Automexia AI and never miss a lead again.
          </p>

          <a
            href="/"
            className="inline-block mt-6 px-8 py-4 bg-white text-[#1E5EFF] rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Get Started
          </a>
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