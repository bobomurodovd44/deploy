import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next js Auth",
  description: "Next js Auth App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-4">{children}</body>
    </html>
  );
}
