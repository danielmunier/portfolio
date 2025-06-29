import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Munier - Desenvolvedor Fullstack",
  description: "Desenvolvedor Fullstack apaixonado por construir apps escaláveis, performáticos e com código limpo. Especialista em Next.js, React, TypeScript e Node.js.",
  keywords: ["desenvolvedor", "fullstack", "react", "next.js", "typescript", "node.js", "portfólio"],
  authors: [{ name: "Daniel Munier" }],
  openGraph: {
    title: "Daniel Munier - Desenvolvedor Fullstack",
    description: "Desenvolvedor Fullstack apaixonado por construir apps escaláveis, performáticos e com código limpo.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Munier - Desenvolvedor Fullstack",
    description: "Desenvolvedor Fullstack apaixonado por construir apps escaláveis, performáticos e com código limpo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
