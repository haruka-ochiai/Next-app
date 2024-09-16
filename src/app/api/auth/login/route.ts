import { NextResponse } from "next/server";
import { compare } from 'bcryptjs';
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    if ( !email || !password) {
        return NextResponse.json({ message: 'メールアドレスとパスワードを入力してください'}, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({message: 'ユーザーが見つかりません'}, {status: 401 });
        }

        const isPasswordValid = await compare(password, user.password);

        if(!isPasswordValid) {
            return NextResponse.json({ message: 'パスワードが間違っています'}, {status: 401});
        }

        return NextResponse.json({ message: 'ログインに成功しました', user: {id: user.id, email:user.email, username: user.username}}, {status:200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'サーバーエラーが発生しました'}, { status: 500 })
    }
}