'use client'

import React from "react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginPage = () => {
    // フォームデータを保持
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const router = useRouter();

    // 入力フィールドの値が変化したときに呼び出される関数
    const handleChange = (e) => {
        // 入力フィールドの名前と値を取得
        const { name, value } = e.target;
        // フォームデータを更新
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // フォームが送信された時に呼び出される関数
    const handleSubmit = async(e) => {
        // デフォルトのフォーム送信動作をキャンセル
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('ログインに成功しました');
                router.push('/posts');
            } else {
                alert('ログインに失敗しました');
            }
        }catch (error) {
            console.error('Error:', error);
            alert('エラーが発生しました');
            }
        }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="mb-4">ログイン</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">メールアドレス：</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">パスワード：</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            ログイン
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default LoginPage;