import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from 'next/font/google'
import NavBar from "@/components/shared/NavBar";
import { Toaster } from "sonner";
const monstserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['500', '600', '700']
})


export const metadata: Metadata = {
  title: "Sandora",
  description: "Teste Prático | Sandora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${monstserrat.className} antialiased`}
      >
        <NavBar />
          <main className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {children}
          </main>
          <Toaster />
      </body>
    </html>
  );
}
