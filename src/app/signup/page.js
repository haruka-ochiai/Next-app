'use client'

import React, { useState } from "react";

const SignUpPage = () => {
    const [formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    });

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
                <h1>新規登録</h1>
            </div>
        </main>
    )
    }

export default SignUpPage