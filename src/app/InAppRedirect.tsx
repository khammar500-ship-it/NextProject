"use client";

import { useEffect } from "react";

export default function InAppRedirect() {
  useEffect(() => {
    const isInApp = /FBAN|FBAV|Messenger|Instagram/i.test(navigator.userAgent);

    if (isInApp) {
      window.location.href = "googlechrome://" + window.location.href;
    }
  }, []);

  return null;
}