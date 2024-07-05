import { NextResponse } from "next/server";
import { hash } from 'bcryptjs';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
        return NextResponse.json({ message: 'すべてのフィールドを入力してください'}, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        return NextResponse.json({ message: '登録に成功しました', user: newUser}, {status:201})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'サーバーエラーが発生しました'}, { status: 500 })
    }
}