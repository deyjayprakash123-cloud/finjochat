import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinjoChat - AI Chatbot Landing Page",
  description: "A modern, animated landing page for an AI Chatbot built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
