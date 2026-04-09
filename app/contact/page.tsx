"use client";

const APP_URL = "https://app.automexiaai.in/auth/register";

export default function Contact() {
  return (
    <main className="overflow-x-hidden bg-transparent text-gray-900">
      <section className="px-6 pb-16 pt-36 text-center md:px-16 md:pt-40">
        <h1 className="text-4xl font-semibold md:text-5xl">Let us Talk</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Questions, partnerships, or demo requests. We are here to help you
          grow faster with Automexia AI.
        </p>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="space-y-6 rounded-2xl border bg-white p-8 shadow-lg">
            <h2 className="text-xl font-semibold">Contact Information</h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500">Email</p>
                <a
                  href="mailto:contact@automexiaai.in"
                  className="font-medium text-[#1E5EFF] hover:underline"
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
                <p className="font-medium">24x7 Support Available</p>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              We usually respond within a few hours.
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-xl font-semibold">Send us a message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border px-4 py-3"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-xl border px-4 py-3"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1E5EFF] py-3 text-white transition hover:bg-[#0B2A5B]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] px-6 py-20 text-center text-white md:px-16">
        <div className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold">
            Ready to automate your leads?
          </h2>

          <p className="mt-4 text-white/80">
            Start using Automexia AI and never miss a lead again.
          </p>

          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-4 font-medium text-[#1E5EFF] transition hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
