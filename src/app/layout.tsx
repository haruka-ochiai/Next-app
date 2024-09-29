import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js app</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
