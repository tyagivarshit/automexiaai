import {
  Cookie,
  Database,
  Globe,
  Lock,
  MessageCircle,
  Shield,
  User,
} from "lucide-react";
import type { ReactNode } from "react";

type GlassSectionProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

export default function PrivacyPolicy() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-white to-blue-50/40 text-gray-900">
      <section className="px-6 pb-12 pt-36 text-center md:px-16 md:pt-40">
        <h1 className="text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-gray-600">
          Your privacy matters. Here is how we protect and use your data.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Last Updated: April 7, 2026
        </p>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <GlassSection icon={<Database />} title="Information We Collect">
            <ul className="list-disc space-y-2 pl-6">
              <li>Name, email, and contact details</li>
              <li>Account and authentication data</li>
              <li>Usage logs and activity</li>
              <li>Automation and conversation data</li>
              <li>Device, browser, and IP information</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<User />} title="How We Use Information">
            <ul className="list-disc space-y-2 pl-6">
              <li>Operate and improve our platform</li>
              <li>Automate conversations</li>
              <li>Enhance user experience</li>
              <li>Analyze performance</li>
              <li>Provide support</li>
            </ul>
          </GlassSection>

          <GlassSection
            icon={<Shield />}
            title="Instagram & Facebook Integration"
          >
            <p>
              Automexia AI uses Instagram Graph API and Facebook APIs to enable
              automation features such as replying to messages, managing
              conversations, and capturing leads.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access limited to messages and basic profile data</li>
              <li>Used only for automation and communication</li>
              <li>No selling or misuse of user data</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<Lock />} title="Permissions & Access">
            <p>
              Our application requests permissions only to perform automation
              tasks such as reading messages and sending replies on behalf of
              the user.
            </p>

            <p className="mt-3">
              Users can revoke access anytime through their account or Facebook
              settings.
            </p>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Data Protection">
            <p>
              We implement industry-standard security measures including
              encryption, secure servers, and restricted access to protect user
              data.
            </p>

            <p className="mt-3">
              Data is stored only as long as necessary for service functionality
              and legal compliance.
            </p>
          </GlassSection>

          <GlassSection icon={<Lock />} title="Your Rights">
            <ul className="list-disc space-y-2 pl-6">
              <li>Access your data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
            </ul>
          </GlassSection>

          <GlassSection icon={<Globe />} title="International Transfers">
            <p>
              Your data may be processed globally depending on our
              infrastructure providers.
            </p>
          </GlassSection>

          <GlassSection icon={<Cookie />} title="Cookies & Tracking">
            <p>We use cookies to improve experience and analyze traffic.</p>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Third-Party Services">
            <p>
              We integrate with external services like APIs and analytics
              tools.
            </p>
          </GlassSection>

          <GlassSection icon={<Database />} title="Data Retention">
            <p>
              Data is retained only as long as necessary for service
              functionality and compliance.
            </p>
          </GlassSection>

          <GlassSection icon={<User />} title="Children's Privacy">
            <p>Our services are not intended for users under 13.</p>
          </GlassSection>

          <GlassSection icon={<Shield />} title="Policy Updates">
            <p>We may update this policy periodically.</p>
          </GlassSection>

          <GlassSection icon={<MessageCircle />} title="Contact Us">
            <p>
              Email:{" "}
              <a
                href="mailto:contact@automexiaai.in"
                className="text-[#1E5EFF] hover:underline"
              >
                contact@automexiaai.in
              </a>
            </p>
          </GlassSection>
        </div>
      </section>
    </main>
  );
}

function GlassSection({ children, icon, title }: GlassSectionProps) {
  return (
    <div className="relative rounded-2xl border bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:shadow-xl">
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-blue-100 text-[#1E5EFF]">
        {icon}
      </div>

      <h2 className="mb-3 text-xl font-semibold">{title}</h2>

      <div className="text-sm leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}
