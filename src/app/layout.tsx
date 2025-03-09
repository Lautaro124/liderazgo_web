import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/typography.utils";
import ReduxProvider from "@/redux/provider.component";
import { Header } from "@/components/header.component";

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
      <ReduxProvider>
        <body className={`${poppins.className} antialiased bg-gray-50`}>
          <Header />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
