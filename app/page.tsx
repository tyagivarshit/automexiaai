"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState , useEffect} from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [openDemo, setOpenDemo] = useState(false);
    const demoFlow = [
  { role: "user", text: "Price kya hai?" },
  { role: "ai", text: "Plans ₹999/month se start hote hain 😊" },
  { role: "user", text: "Demo mil sakta hai?" },
  { role: "ai", text: "Haan! Aap demo book kar sakte ho 🚀" },
];

const [messages, setMessages] = useState<
  { role: string; text: string }[]
>([]);

useEffect(() => {
  let i = 0;

  const interval = setInterval(() => {
    if (i >= demoFlow.length) {
      clearInterval(interval);
      return;
    }

    const msg = demoFlow[i];
    if (msg) {
      setMessages((prev) => [...prev, msg]);
    }

    i++;
  }, 1500);

  return () => clearInterval(interval);
}, []);
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Automexia AI</h1>

          <nav className="hidden md:flex gap-8 text-sm">
              <a href="/features">Features</a>
              <a href="#pricing" className="hover:text-[#1E5EFF]">Pricing</a>
            <a href="/contact">Contact</a>
            </nav>

          <Link
          href="https://www.automexiaai.in/auth/register"
          className="px-4 py-2 bg-[#1E5EFF] text-white rounded-lg hover:bg-[#0B2A5B] transition">
            Get Started
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Turn Leads Into{" "}
              <span className="bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] text-transparent bg-clip-text">
                Revenue
              </span>{" "}
              — Automatically
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Automexia AI handles Instagram replies, follow-ups, and conversions — so you never lose a lead again.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
              href="https://www.automexiaai.in/auth/register"
              className="px-4 py-2 bg-[#1E5EFF] text-white rounded-lg hover:bg-[#0B2A5B] transition">
                Start Free Trial
              </Link>
              <button className="px-6 py-3 rounded-xl border hover:bg-gray-100 transition">
                Watch Demo
              </button>
            </div>
          </motion.div>

         {/* DASHBOARD */}
<motion.div initial="hidden" animate="show" variants={fadeUp}>
  <div className="bg-white border rounded-2xl shadow-xl p-6 space-y-4">

    {/* Chat Demo */}
    <div className="space-y-3 h-48 overflow-hidden">
      {messages.map((msg, i) => {
        if (!msg) return null;

        return (
          <div
            key={i}
            className={`p-3 rounded-xl text-sm max-w-[70%] ${
              msg.role === "user"
                ? "bg-gray-100 ml-auto text-right"
                : "bg-blue-50 mr-auto"
            }`}
          >
            {msg.role === "user" ? "Customer: " : "AI: "}
            {msg.text}
          </div>
        );
      })}
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-gray-50 rounded-xl text-sm">Leads: 128</div>
      <div className="p-4 bg-gray-50 rounded-xl text-sm">Converted: 42</div>
    </div>

  </div>
</motion.div>
</div> 

      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Everything You Need to Convert Leads
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {[
              "Instagram Automation",
              "AI Conversations",
              "CRM + Leads",
              "Chat Panel",
              "Follow-Ups Engine",
              "Booking System",
            ].map((title, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl border hover:shadow-xl transition bg-white">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Powerful automation to boost conversions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= USE CASE ================= */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Built for Growth Businesses
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {["Coaches","Agencies","Real Estate","E-commerce","Local"].map((u,i)=>(
              <div key={i} className="p-6 bg-white rounded-xl border">{u}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Trusted by Growing Businesses</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "“Automexia doubled our lead conversions.”",
              "“We never miss a lead now.”",
              "“AI follow-ups are insane!”",
            ].map((t,i)=>(
              <div key={i} className="p-6 bg-white border rounded-xl">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEMO ================= */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-semibold">See Automexia AI in Action</h2>
        <div className="mt-10 max-w-4xl mx-auto border rounded-2xl overflow-hidden">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            Demo Video / GIF Here
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">FAQ</h2>

          <div className="mt-12 space-y-6">
            {[
              {q:"How does AI reply work?",a:"Smart automation replies instantly."},
              {q:"Can I manually reply?",a:"Yes anytime."},
              {q:"Is it safe?",a:"Yes fully compliant."},
            ].map((item,i)=>(
              <div key={i} className="p-6 border rounded-xl">
                <h3>{item.q}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="px-6 md:px-16 py-28 bg-gradient-to-b from-white to-blue-50/40">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold">
      Simple, Transparent Pricing
    </h2>
    <p className="mt-4 text-gray-600">
      Choose the plan that fits your growth stage
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-20">

      {/* BASIC */}
      <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold">Basic</h3>

        <p className="mt-4 text-3xl font-bold">₹999</p>
        <p className="text-sm text-gray-500">Starter plan</p>

        <ul className="mt-6 space-y-3 text-sm text-gray-600">
          <li>✔ Instagram Automation</li>
          <li>✔ Comment → DM</li>
          <li>✔ Custom Replies</li>
        </ul>

        <button className="mt-8 w-full py-3 rounded-xl border hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

      {/* PRO (HIGHLIGHTED) */}
      <div className="relative p-8 rounded-2xl border-2 border-[#1E5EFF] bg-white shadow-xl scale-105">

        {/* Badge */}
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E5EFF] text-white text-xs px-3 py-1 rounded-full">
          Most Popular
        </span>

        <h3 className="text-xl font-semibold">Pro</h3>

        <p className="mt-4 text-3xl font-bold text-[#1E5EFF]">₹2999</p>
        <p className="text-sm text-gray-500">per month</p>

        <ul className="mt-6 space-y-3 text-sm text-gray-600">
          <li>✔ Everything in Basic</li>
          <li>✔ CRM + Leads</li>
          <li>✔ AI Replies</li>
          <li>✔ Chat Panel</li>
          <li>✔ AI Follow-Ups</li>
          <li>✔ Custom Follow-Ups</li>
        </ul>

        <button className="mt-8 w-full py-3 rounded-xl bg-[#1E5EFF] text-white hover:bg-[#0B2A5B] transition">
          Upgrade Now
        </button>
      </div>

      {/* ELITE */}
      <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold">Elite</h3>

        <p className="mt-4 text-3xl font-bold">₹4999</p>
        <p className="text-sm text-gray-500">Advanced plan</p>

        <ul className="mt-6 space-y-3 text-sm text-gray-600">
          <li>✔ Everything in Pro</li>
          <li>✔ Booking & Scheduling</li>
          <li>✔ Advanced AI</li>
        </ul>

        <button className="mt-8 w-full py-3 rounded-xl border hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

    </div>
  </div>
</section>
      {/* ================= CTA ================= */}
{/* ================= CTA ================= */}
<section className="px-6 md:px-16 py-20 bg-gradient-to-r from-[#0B2A5B] via-[#1E5EFF] to-[#4DA3FF] text-white text-center relative overflow-hidden">
  
  {/* Glow background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full"></div>

  <div className="relative max-w-3xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
      Start Converting Leads Automatically
    </h2>

    {/* Subtext */}
    <p className="mt-4 text-white/80 text-sm md:text-base">
      Automate replies, follow-ups, and conversions — all in one place.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      
      <Link
          href="https://www.automexiaai.in/auth/register"
          className="px-8 py-4 border border-white/40 rounded-xl hover:bg-white/10 transition">
            Start Free Trial
      </Link>

      <button
      onClick={() => setOpenDemo(true)}
      className="px-8 py-4 border border-white/40 rounded-xl hover:bg-white/10 transition">
        Book Demo
      </button>

    </div>

    {/* Legal */}
    <p className="mt-6 text-xs md:text-sm text-white/70 leading-relaxed">
      By continuing, you agree to our{" "}
      <a href="/terms" className="underline hover:text-white">
        Terms
      </a>{" "}
      and{" "}
      <a href="/privacy-policy" className="underline hover:text-white">
        Privacy Policy
      </a>.
    </p>

  </div>
</section>


    {/* tera pura UI */}

    {/* ================= POPUP ================= */}
    {openDemo && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

        <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-xl">

          <button
            onClick={() => setOpenDemo(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold text-center">
            Book a Demo
          </h2>

          <form
  onSubmit={async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const formData = {
      name: form.get("name"),
      email: form.get("email"),
    };

    await fetch("/api/demo", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    alert("Demo request submitted 🚀");
    setOpenDemo(false);
  }}
  className="mt-6 space-y-4"
>

  <input
    name="name"
    type="text"
    placeholder="Your Name"
    required
    className="w-full border px-4 py-3 rounded-xl"
  />

  <input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    className="w-full border px-4 py-3 rounded-xl"
  />

  <button
    type="submit"
    className="w-full py-3 bg-[#1E5EFF] text-white rounded-xl"
  >
    Submit
  </button>

</form>

        </div>
      </div>
    )}
    </main>
  );
}