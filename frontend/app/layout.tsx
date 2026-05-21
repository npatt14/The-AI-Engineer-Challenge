import type { Metadata } from "next";
import { APP_TITLE } from "@/lib/copy";
import "./globals.css";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "A supportive mental coach. System 0b111.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
