"use client";

import { useEffect, useState } from "react";

export default function FormNextInput() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.origin + "/?submitted=true");
  }, []);

  return <input type="hidden" name="_next" value={url} />;
}
