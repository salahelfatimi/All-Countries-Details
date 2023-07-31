// providers.tsx
"use client"
import { ReactNode } from 'react'; // Import ReactNode type from React library
import { ThemeProvider } from 'next-themes';
import React, { useState, useEffect } from "react";

export default function Providers({ children }: { children: ReactNode }) {

  const [mounted, setMointed] = useState<boolean>(false);
  useEffect(() => {
    setMointed(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
