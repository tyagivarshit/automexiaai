"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type DemoMessage = {
  role: "user" | "ai";
  text: string;
};

const APP_URL = "https://app.automexiaai.in/auth/register";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const demoFlow: DemoMessage[] = [
  { role: "user", text: "Price kya hai?" },
  { role: "ai", text: "Plans Rs 999/month se start hote hain." },
  { role: "user", text: "Demo mil sakta hai?" },
  { role: "ai", text: "Haan, aap demo book kar sakte ho." },
];

const featureCards = [
  "Instagram Automation",
  "AI Conversations",
  "CRM + Leads",
  "Chat Panel",
  "Follow-Ups Engine",
  "Booking System",
];

const useCases = [
  {
    title: "Capture Every Lead",
    desc: "Never miss a message or inquiry again.",
  },
  {
    title: "Instant AI Replies",
    desc: "Respond in seconds, 24/7 automatically.",
  },
  {
    title: "Convert Faster",
    desc: "Smart follow-ups that close more deals.",
  },
  {
    title: "Scale Without Hiring",
    desc: "Handle 1000+ chats with zero extra effort.",
  },
];

const industries = [
  "Creators",
  "Agencies",
  "Coaches",
  "E-commerce",
  "Real Estate",
  "Local Businesses",
  "Sales Teams",
];

const testimonials = [
  "Automexia helped us respond instantly to every inquiry. Our conversions increased without hiring more people.",
  "We stopped missing leads completely. The AI handles conversations better than expected.",
  "Follow-ups used to take hours. Now everything runs automatically and results are clearly better.",
];

const faqItems = [
  {
    q: "How does AI reply work?",
    a: "Smart automation replies instantly with context-aware responses.",
  },
  {
    q: "Can I manually reply?",
    a: "Yes, your team can jump into chats anytime.",
  },
  {
    q: "Is it safe?",
    a: "Yes, the platform is designed around secure workflows and controlled access.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "Rs 999",
    note: "Starter plan",
    featured: false,
    cta: "Get Started",
    items: [
      "Instagram Automation",
      "Comment to DM",
      "Custom Replies",
      "Basic Lead Capture",
    ],
  },
  {
    name: "Pro",
    price: "Rs 2999",
    note: "per month",
    featured: true,
    cta: "Upgrade Now",
    items: [
      "Instagram Automation",
      "Comment to DM",
      "Custom Replies",
      "CRM + Leads Dashboard",
      "AI Smart Replies",
      "Chat Panel",
      "AI Follow-Ups",
      "Custom Follow-Ups",
    ],
  },
  {
    name: "Elite",
    price: "Rs 4999",
    note: "Advanced plan",
    featured: false,
    cta: "Get Started",
    items: [
      "Instagram Automation",
      "Comment to DM",
      "Custom Replies",
      "CRM + Leads Dashboard",
      "AI Smart Replies",
      "Chat Panel",
      "AI Follow-Ups",
      "Custom Follow-Ups",
      "Booking & Scheduling",
      "Advanced AI Optimization",
    ],
  },
];

export default function Home() {
  const [openDemo, setOpenDemo] = useState(false);
  const [messages, setMessages] = useState<DemoMessage[]>([]);

  useEffect(() => {
    setMessages([]);

    let index = 0;
    const interval = setInterval(() => {
      const message = demoFlow[index];

      if (!message) {
        clearInterval(interval);
        return;
      }

      setMessages((prev) => [...prev, message]);
      index += 1;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden bg-transparent text-gray-900">
      <section className="relative px-6 pb-20 pt-36 md:px-16 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm">
              Revenue Automation
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Turn Leads Into{" "}
              <span className="bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] bg-clip-text text-transparent">
                Revenue
              </span>{" "}
              Automatically
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              Automexia AI handles Instagram replies, follow-ups, and
              conversions so you never lose a lead again.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#1E5EFF] px-5 py-3 text-center text-white shadow-[0_18px_36px_rgba(30,94,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0B2A5B]"
              >
                Start Free Trial
              </a>

              <button
                type="button"
                onClick={() => setOpenDemo(true)}
                className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 transition hover:bg-gray-100"
              >
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="space-y-3 overflow-hidden rounded-2xl bg-slate-50/70 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
                  <span>Live AI Demo</span>
                  <span>24/7</span>
                </div>

                <div className="space-y-3">
                  {messages.map((msg, index) => (
                    <div
                      key={`${msg.role}-${index}`}
                      className={`max-w-[72%] rounded-2xl p-3 text-sm ${
                        msg.role === "user"
                          ? "ml-auto bg-gray-100 text-right"
                          : "mr-auto bg-blue-50"
                      }`}
                    >
                      {msg.role === "user" ? "Customer: " : "AI: "}
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  Leads: 128
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  Converted: 42
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Everything You Need to Convert Leads
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {featureCards.map((title, index) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border bg-white p-6 transition hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Powerful automation built to boost conversions.
                </p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Module {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Built for Anyone Who Wants More Leads and Sales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Whether you are a creator, business owner, or sales team, Automexia
            AI helps you capture, engage, and convert every lead automatically.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6 text-left transition hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <p className="text-sm text-gray-500">Trusted across industries</p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-full border bg-white px-4 py-2 text-sm text-gray-600 transition hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Businesses using Automexia AI are capturing more leads, responding
            faster, and converting better automatically.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((text) => (
              <div
                key={text}
                className="rounded-2xl border bg-white p-6 text-left shadow-sm transition hover:shadow-xl"
              >
                <p className="text-sm leading-relaxed text-gray-700">
                  &ldquo;{text}&rdquo;
                </p>

                <div className="mt-4 text-xs text-gray-400">Verified User</div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-sm text-gray-500">
              Helping businesses automate conversations and increase revenue
              across industries.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:px-16">
        <h2 className="text-3xl font-semibold md:text-4xl">
          See Automexia AI in Action
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Watch how AI automatically replies, follows up, and converts leads.
        </p>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border bg-white p-6 shadow-xl">
          <div className="h-64 space-y-3 overflow-hidden text-left">
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-demo-${index}`}
                className={`max-w-[75%] rounded-xl p-3 text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-gray-100 text-right"
                    : "mr-auto bg-blue-50"
                }`}
              >
                {msg.role === "user" ? "Customer: " : "AI: "}
                {msg.text}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <div className="size-2 rounded-full bg-gray-400 animate-bounce" />
            <div className="size-2 rounded-full bg-gray-400 animate-bounce delay-150" />
            <div className="size-2 rounded-full bg-gray-400 animate-bounce delay-300" />
            <span>AI is typing...</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold">FAQ</h2>

          <div className="mt-12 space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-xl border bg-white p-6">
                <h3>{item.q}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-gradient-to-b from-white to-blue-50/40 px-6 py-28 md:px-16"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-gray-600">
            Choose the plan that fits your growth stage.
          </p>

          <div className="mt-20 grid items-stretch gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl bg-white p-8 transition ${
                  plan.featured
                    ? "scale-105 border-2 border-[#1E5EFF] shadow-xl"
                    : "border hover:shadow-xl"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1E5EFF] px-3 py-1 text-xs text-white">
                    Most Popular
                  </span>
                ) : null}

                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p
                  className={`mt-4 text-3xl font-bold ${
                    plan.featured ? "text-[#1E5EFF]" : ""
                  }`}
                >
                  {plan.price}
                </p>
                <p className="text-sm text-gray-500">{plan.note}</p>

                <ul className="mt-6 flex-1 space-y-3 text-sm text-gray-600">
                  {plan.items.map((item) => (
                    <li key={item}>+ {item}</li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl py-3 transition ${
                    plan.featured
                      ? "bg-[#1E5EFF] text-white hover:bg-[#0B2A5B]"
                      : "border hover:bg-gray-100"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] px-6 py-20 text-center text-white md:px-16">
        <div className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Start Converting Leads Automatically
          </h2>

          <p className="mt-4 text-sm text-white/80 md:text-base">
            Automate replies, follow-ups, and conversions all in one place.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/40 px-8 py-4 transition hover:bg-white/10"
            >
              Start Free Trial
            </a>

            <button
              type="button"
              onClick={() => setOpenDemo(true)}
              className="rounded-xl border border-white/40 px-8 py-4 transition hover:bg-white/10"
            >
              Book Demo
            </button>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-white/70 md:text-sm">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {openDemo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setOpenDemo(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-black"
            >
              x
            </button>

            <h2 className="text-center text-2xl font-semibold">Book a Demo</h2>

            <p className="mt-2 text-center text-sm text-gray-500">
              Get a quick walkthrough of how Automexia AI can grow your
              business.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = new FormData(e.currentTarget);
                const formData = {
                  name: form.get("name"),
                  email: form.get("email"),
                  phone: form.get("phone"),
                  business: form.get("business"),
                };

                await fetch("/api/demo", {
                  method: "POST",
                  body: JSON.stringify(formData),
                });

                alert("Demo request submitted.");
                setOpenDemo(false);
              }}
              className="mt-6 space-y-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                name="business"
                type="text"
                placeholder="Business / Instagram Page (optional)"
                className="w-full rounded-xl border px-4 py-3"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1E5EFF] py-3 text-white transition hover:bg-[#0B2A5B]"
              >
                Book Demo
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
