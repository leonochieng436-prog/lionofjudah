import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Lion of Judah Beauty & Cosmetics collects, uses and protects personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-edge section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">Your Privacy</p>
        <h1 className="font-display text-4xl text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 20 August 2026</p>
      </div>

      <article className="prose prose-sm mx-auto mt-14 max-w-3xl text-ink/70">
        <p>This policy explains how Lion of Judah Beauty &amp; Cosmetics collects and uses personal data when you visit our website, contact us, or place an order.</p>
        <h2>Information we collect</h2>
        <p>We may collect your name, phone number, email address, delivery location, order details, payment confirmation and messages you send to us. We also receive limited technical information needed to operate and secure the website.</p>
        <h2>How we use your information</h2>
        <p>We use personal data to confirm and fulfil orders, arrange delivery, respond to enquiries, process returns, prevent fraud, improve our services and send marketing messages where you have agreed to receive them.</p>
        <h2>Sharing and retention</h2>
        <p>We share only the information needed with delivery partners, payment providers and service providers who help us operate the store. We do not sell your personal data. We retain information only for as long as reasonably necessary for these purposes, legal obligations and dispute resolution.</p>
        <h2>Your rights</h2>
        <p>Under Kenya&apos;s Data Protection Act, 2019 and applicable regulations, you may request access to, correction or deletion of your data, object to or restrict certain processing, withdraw consent, and request a copy of information we hold about you. Some rights are subject to lawful exceptions.</p>
        <h2>Cookies and communications</h2>
        <p>We may use essential storage or cookies to keep the website working and understand site usage. You can control non-essential cookies through your browser. You may opt out of marketing at any time by contacting us.</p>
        <h2>Contact us</h2>
        <p>For a privacy request, contact <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or visit us at {BUSINESS.address}. We will verify requests where appropriate and respond within the period required by applicable law.</p>
        <p>This policy is intended to reflect Kenya&apos;s Data Protection Act, 2019 and related regulations. It is general business information and not legal advice.</p>
      </article>
    </div>
  );
}