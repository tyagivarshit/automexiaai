"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  Database,
  MessageCircle,
  MessageSquare,
  Repeat,
} from "lucide-react";
import type { ReactNode } from "react";

const APP_URL = "https://app.automexiaai.in/auth/register";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

type DemoFlowItem = {
  role: "user" | "ai";
  text: string;
};

type FeatureSectionProps = {
  demoFlow: DemoFlowItem[];
  desc: string;
  icon: ReactNode;
  points: string[];
  reverse?: boolean;
  title: string;
};

const featureSections: FeatureSectionProps[] = [
  {
    icon: <MessageCircle />,
    title: "Instagram Automation",
    desc: "Automatically reply to comments and convert them into DMs.",
    points: [
      "Auto comment replies",
      "Comment to DM conversion",
      "Custom reply flows",
    ],
    demoFlow: [
      { role: "user", text: "Price?" },
      { role: "ai", text: "Check DM." },
      { role: "user", text: "Got it!" },
      { role: "ai", text: "Sent full details." },
    ],
  },
  {
    reverse: true,
    icon: <Bot />,
    title: "AI Conversations",
    desc: "Human-like AI conversations that understand intent.",
    points: ["Smart responses", "Context-aware replies", "Natural conversations"],
    demoFlow: [
      { role: "user", text: "Is this available?" },
      { role: "ai", text: "Yes, limited slots are left." },
      { role: "user", text: "How to book?" },
      { role: "ai", text: "Let me guide you." },
    ],
  },
  {
    icon: <Database />,
    title: "CRM & Lead Management",
    desc: "Track, manage, and convert all your leads.",
    points: [
      "Lead tracking dashboard",
      "Conversation history",
      "Conversion tracking",
    ],
    demoFlow: [
      { role: "ai", text: "New lead added." },
      { role: "ai", text: "Status: Interested." },
      { role: "ai", text: "Follow-up scheduled." },
    ],
  },
  {
    reverse: true,
    icon: <MessageSquare />,
    title: "Chat Panel",
    desc: "Take manual control anytime with a powerful chat interface.",
    points: ["Manual override", "Team access", "Real-time chat control"],
    demoFlow: [
      { role: "user", text: "Need help fast." },
      { role: "ai", text: "Connecting human agent..." },
      { role: "user", text: "Okay." },
      { role: "ai", text: "Agent joined chat." },
    ],
  },
  {
    icon: <Repeat />,
    title: "Follow-Up Automation",
    desc: "Automatically follow up with leads.",
    points: ["AI follow-ups", "Custom sequences", "Timed responses"],
    demoFlow: [
      { role: "ai", text: "Hey, still interested?" },
      { role: "user", text: "Yes." },
      { role: "ai", text: "Let us continue." },
    ],
  },
  {
    reverse: true,
    icon: <Calendar />,
    title: "Booking & Scheduling",
    desc: "Let users book directly through chat.",
    points: ["Auto scheduling", "Calendar integration", "Time slot management"],
    demoFlow: [
      { role: "user", text: "Book a call." },
      { role: "ai", text: "Available at 5 PM." },
      { role: "user", text: "Done." },
      { role: "ai", text: "Booked successfully." },
    ],
  },
];

export default function Features() {
  return (
    <main className="overflow-x-hidden bg-transparent text-gray-900">
      <section className="px-6 pb-20 pt-36 text-center md:px-16 md:pt-40">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Powerful Features Built for Conversion
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Automexia AI helps you capture, engage, and convert leads
            automatically.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl space-y-32">
          {featureSections.map((feature) => (
            <FeatureSection key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] px-6 py-20 text-center text-white md:px-16">
        <h2 className="text-3xl font-semibold">Ready to Automate Your Leads?</h2>

        <a
          href={APP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-[#1E5EFF]"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}

function FeatureSection({
  demoFlow,
  desc,
  icon,
  points,
  reverse = false,
  title,
}: FeatureSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid items-center gap-16 md:grid-cols-2"
    >
      <div className={reverse ? "md:order-2" : ""}>
        <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-[#1E5EFF]">
          {icon}
        </div>

        <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
        <p className="mt-4 text-gray-600">{desc}</p>

        <ul className="mt-6 space-y-2 text-sm text-gray-600">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span className="text-[#1E5EFF]">+</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className={`relative ${reverse ? "md:order-1" : ""}`}>
        <div className="absolute inset-0 rounded-3xl bg-blue-200/30 blur-2xl" />

        <div className="relative h-64 space-y-2 overflow-hidden rounded-2xl border bg-white p-6 shadow-xl">
          {demoFlow.map((msg, index) => (
            <motion.div
              key={`${msg.role}-${index}`}
              initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.4 }}
              className={`max-w-[70%] rounded-lg p-2 text-sm ${
                msg.role === "user"
                  ? "ml-auto bg-gray-100 text-right"
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
