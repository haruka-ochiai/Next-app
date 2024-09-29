'use client'

import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
    const handleLogout = async () => {
        try {
            await signOut({ redirect: false });
            alert('ログアウトに成功しました');
            window.location.href = '/login'; // ここでリダイレクト
        } catch (error) {
            alert('ログアウトに失敗しました');
            console.error('Logout error:', error);
        }
    };
  return (
        <header className="bg-white shadow">
            <nav className="container mx-auto p-4">
            <ul className="flex space-x-4">
                <li><Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
                <li><Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link></li>
                <li><Link href="/login" className="text-blue-500 hover:text-blue-700">ログイン</Link></li>
                <li><Link href="/signup" className="text-blue-500 hover:text-blue-700">新規登録</Link></li>
                <li>
                <button onClick={() => signOut()}
                className="text-blue-500 hover:text-blue-700 focus: outline-none">ログアウト</button>
                </li>
            </ul>
            </nav>
        </header>
    );
}
