"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/">Home</a>
            <a href="/pricing">Pricing</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/" className="px-4 py-2 bg-[#1E5EFF] text-white rounded-lg">
            Get Started
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6 md:px-16 text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Powerful Features Built for Conversion
          </h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Automexia AI helps you capture, engage, and convert leads automatically — without manual effort.
          </p>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-16 py-20 space-y-24">

        {/* Feature 1 */}
        <Feature
          title="Instagram Automation"
          desc="Automatically reply to comments, convert them into DMs, and guide users through your funnel."
          points={[
            "Auto comment replies",
            "Comment → DM conversion",
            "Custom reply flows",
          ]}
        />

        {/* Feature 2 */}
        <Feature
          reverse
          title="AI Conversations"
          desc="Human-like conversations powered by AI that understand context and intent."
          points={[
            "Smart responses",
            "Context-aware replies",
            "Natural conversations",
          ]}
        />

        {/* Feature 3 */}
        <Feature
          title="CRM & Lead Management"
          desc="Track, manage, and organize all your leads in one place."
          points={[
            "Lead tracking dashboard",
            "Conversation history",
            "Conversion tracking",
          ]}
        />

        {/* Feature 4 */}
        <Feature
          reverse
          title="Chat Panel"
          desc="Take control anytime by switching from AI to manual chat."
          points={[
            "Manual override",
            "Team access",
            "Real-time chat control",
          ]}
        />

        {/* Feature 5 */}
        <Feature
          title="Follow-Up Automation"
          desc="Never lose a lead with intelligent follow-ups."
          points={[
            "AI follow-ups",
            "Custom sequences",
            "Timed responses",
          ]}
        />

        {/* Feature 6 */}
        <Feature
          reverse
          title="Booking & Scheduling"
          desc="Let users book directly through chat without friction."
          points={[
            "Auto scheduling",
            "Calendar integration",
            "Time slot management",
          ]}
        />

      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-6 md:px-16 py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            "User comments on your post",
            "AI instantly replies & DM starts",
            "Lead gets converted automatically",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl">
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] text-white text-center">
        <h2 className="text-3xl font-semibold">
          Ready to Automate Your Leads?
        </h2>

        <a
          href="/"
          className="inline-block mt-8 px-8 py-4 bg-white text-[#1E5EFF] rounded-xl"
        >
          Get Started
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-6 md:px-16 py-12 bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between">
          <p>© 2026 Automexia AI</p>
          <div className="flex gap-6">
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

/* FEATURE COMPONENT */
function Feature({ title, desc, points, reverse = false }: any) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      
      {/* TEXT */}
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-4 text-gray-600">{desc}</p>

        <ul className="mt-6 space-y-2 text-sm text-gray-600">
          {points.map((p: string, i: number) => (
            <li key={i}>✔ {p}</li>
          ))}
        </ul>
      </div>

      {/* VISUAL */}
      <div className="bg-gray-100 h-60 rounded-2xl flex items-center justify-center">
        Feature Preview
      </div>
    </div>
  );
}