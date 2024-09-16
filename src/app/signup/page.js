'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const [formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    });
    const router = useRouter();

    // フォームの入力フィールドの値が変化したときに呼び出される関数
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            // 既存のデータ
            ...formData,
            // 入力フィールドの値を更新
            [name]: value
        })
    }

    const handleSubmit = async (e) => {

        // デフォルトの動作をキャンセルするためのメソッド
        e.preventDefault();

        // APIエンドポイントへのリクエスト作成
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
        });

        if(response.ok) {
            alert('登録に成功しました')
            router.push('/posts');
        }else {
            alert('登録に失敗しました')
        }
    } catch (error) {
        console.error('Error:', error);
        alert('エラーが発生しました')
    }
}
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="mb-4">新規登録</h1>
                <form onSubmit= { handleSubmit } className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">ユーザー名：</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={ formData.username }
                            onChange={ handleChange }
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">メールアドレス：</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange }
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
                            value={ formData.password }
                            onChange={ handleChange }
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div >
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >登録</button>
                    </div>
                </form>
            </div>
        </main>
    )
    }

export default SignUpPage