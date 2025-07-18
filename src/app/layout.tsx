import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 

import Footer from "@/components/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seu Nome | Portfólio de Desenvolvimento",
  description: "Portfólio de [Seu Nome], desenvolvedor front-end especializado em React, Next.js e criação de interfaces de usuário dinâmicas e responsivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow bg-gradient-to-b from-gray-900 to-gray-800">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}