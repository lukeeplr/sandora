import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from 'next/font/google'
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
        {children}
      </body>
    </html>
  );
}
