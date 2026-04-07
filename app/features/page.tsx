"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Bot,
  Database,
  Calendar,
  MessageSquare,
  Repeat,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/">Home</a>
            <a href="/privacy-policy">Policy</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/" className="px-4 py-2 bg-[#1E5EFF] text-white rounded-lg">
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 md:px-16 text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Powerful Features Built for Conversion
          </h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Automexia AI helps you capture, engage, and convert leads automatically.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-7xl mx-auto space-y-32">

          <Feature
            icon={<MessageCircle />}
            title="Instagram Automation"
            desc="Automatically reply to comments and convert them into DMs."
            points={[
              "Auto comment replies",
              "Comment → DM conversion",
              "Custom reply flows",
            ]}
            demoFlow={[
              { role: "user", text: "Price?" },
              { role: "ai", text: "Check DM 😊" },
              { role: "user", text: "Got it!" },
              { role: "ai", text: "Sent full details 🚀" },
            ]}
          />

          <Feature
            reverse
            icon={<Bot />}
            title="AI Conversations"
            desc="Human-like AI conversations that understand intent."
            points={[
              "Smart responses",
              "Context-aware replies",
              "Natural conversations",
            ]}
            demoFlow={[
              { role: "user", text: "Is this available?" },
              { role: "ai", text: "Yes! Limited slots left." },
              { role: "user", text: "How to book?" },
              { role: "ai", text: "Let me guide you 👇" },
            ]}
          />

          <Feature
            icon={<Database />}
            title="CRM & Lead Management"
            desc="Track, manage, and convert all your leads."
            points={[
              "Lead tracking dashboard",
              "Conversation history",
              "Conversion tracking",
            ]}
            demoFlow={[
              { role: "ai", text: "New Lead Added" },
              { role: "ai", text: "Status: Interested" },
              { role: "ai", text: "Follow-up scheduled" },
            ]}
          />

          <Feature
            reverse
            icon={<MessageSquare />}
            title="Chat Panel"
            desc="Take manual control anytime with a powerful chat interface."
            points={[
              "Manual override",
              "Team access",
              "Real-time chat control",
            ]}
            demoFlow={[
              { role: "user", text: "Need help fast" },
              { role: "ai", text: "Connecting human agent..." },
              { role: "user", text: "Okay" },
              { role: "ai", text: "Agent joined chat 👋" },
            ]}
          />

          <Feature
            icon={<Repeat />}
            title="Follow-Up Automation"
            desc="Automatically follow up with leads."
            points={[
              "AI follow-ups",
              "Custom sequences",
              "Timed responses",
            ]}
            demoFlow={[
              { role: "ai", text: "Hey! Still interested?" },
              { role: "user", text: "Yes" },
              { role: "ai", text: "Let’s continue 👇" },
            ]}
          />

          <Feature
            reverse
            icon={<Calendar />}
            title="Booking & Scheduling"
            desc="Let users book directly through chat."
            points={[
              "Auto scheduling",
              "Calendar integration",
              "Time slot management",
            ]}
            demoFlow={[
              { role: "user", text: "Book a call" },
              { role: "ai", text: "Available at 5 PM" },
              { role: "user", text: "Done" },
              { role: "ai", text: "Booked successfully ✅" },
            ]}
          />

        </div>
      </section>

      {/* CTA */}
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

    </main>
  );
}

/* FEATURE COMPONENT */
function Feature({ title, desc, icon, points, demoFlow, reverse = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-16 items-center"
    >

      {/* TEXT */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1E5EFF]">
          {icon}
        </div>

        <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
        <p className="mt-4 text-gray-600">{desc}</p>

        <ul className="mt-6 space-y-2 text-sm text-gray-600">
          {points.map((p: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-[#1E5EFF]">✔</span> {p}
            </li>
          ))}
        </ul>
      </div>

      {/* DEMO */}
      <div className={`relative ${reverse ? "md:order-1" : ""}`}>
        <div className="absolute inset-0 bg-blue-200/30 blur-2xl rounded-3xl"></div>

        <div className="relative bg-white border rounded-2xl shadow-xl p-6 h-64 overflow-hidden space-y-2">
          {demoFlow.map((msg: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.4 }}
              className={`p-2 text-sm rounded-lg max-w-[70%] ${
                msg.role === "user"
                  ? "bg-gray-100 ml-auto text-right"
                  : "bg-blue-50"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
  