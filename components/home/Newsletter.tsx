"use client";

import { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("You're on the list — welcome to the community!");
    setEmail("");
  }

  return (
    <section className="bg-brand-dark py-16 sm:py-20">
      <div className="container-edge flex flex-col items-center text-center">
        <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
          BEAUTY INSPO. <span className="text-brand-blue">EXCLUSIVE OFFERS.</span> NEW ARRIVALS.
        </h2>
        <p className="mt-4 max-w-md text-sm text-white/60">Join the Lion of Judah beauty community.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full flex-1 border border-white/25 bg-transparent px-4 py-3.5 text-sm text-white placeholder-white/40 focus:border-brand-blue focus:outline-none"
          />
          <button type="submit" className="btn-primary shrink-0">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
