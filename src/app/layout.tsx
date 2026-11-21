import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { FramerMotionProvider } from "@/components/FramerMotionProvider";

export const metadata: Metadata = {
  title: "Shin Eun-soo (신은수) | Cozy Pastel Scrapbook Tribute",
  description:
    "Website tribute estetik, manis, dan imut untuk aktris Korea Selatan Shin Eun-soo (신은수) dengan konsep Cozy Pastel Scrapbook & Liquid Glass.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="text-ink-dark antialiased selection:bg-pastel-pink selection:text-ink-dark">
        <LanguageProvider>
          <FramerMotionProvider>{children}</FramerMotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
