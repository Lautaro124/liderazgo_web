import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/typography.utils";

export const metadata: Metadata = {
  title: "Curso de Liderazgo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-gray-50`}>{children}</body>
    </html>
  );
}
