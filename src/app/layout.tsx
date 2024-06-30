import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

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
        <header className="bg-white shadow">
          <nav className="container mx-auto p-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
              <li><Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link></li>
              <li><Link href="/login" className="text-blue-500 hover:text-blue-700">ログイン</Link></li>
              <li><Link href="/signup" className="text-blue-500 hover:text-blue-700">新規登録</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
