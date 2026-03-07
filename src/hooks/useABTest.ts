"use client";

import { useEffect, useState } from "react";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

export function useABTest() {
  const [variant, setVariant] = useState<string | null>(null);

  useEffect(() => {
    let v = getCookie("cta_variant");

    if (!v) {
      v = Math.random() < 0.5 ? "A" : "B";

      document.cookie = `cta_variant=${v}; path=/; max-age=31536000`;
    }

    setVariant(v);
  }, []);

  return variant;
}