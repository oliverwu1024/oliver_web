"use client";

import { useEffect } from "react";

export default function SkipIntro() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      document.documentElement.classList.add("skip-intro");
      // Scroll to contact section
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "instant" });
      // Clean up URL
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  return null;
}
