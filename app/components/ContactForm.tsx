"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/34ba25f62bf64969f03740223490c06c", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-12">
        <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground">Message sent!</h3>
        <p className="text-muted text-center">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="group relative px-8 py-3 rounded-xl bg-accent text-white font-medium text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          <span className="relative z-10">Send another message</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="example@email.com"
          className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Write your message..."
          className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="group relative px-8 py-3 rounded-xl bg-accent text-white font-medium text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/25 self-start disabled:opacity-50"
      >
        <span className="relative z-10">
          {status === "sending" ? "Sending..." : "Send Message"}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
