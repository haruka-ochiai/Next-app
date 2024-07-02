import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client/extension";
import { compare } from "bcryptjs";

const prisma = new PrismaClient()

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label:"Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (!credentials){
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email},
                })

                if (user && await compare(credentials.password, user.password)) {
                    return { id: user.id, name: user.username, email: user.email}
                }else {
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt" as const,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callback: {
        async jwt({ token, user }: { token: any, user: any }){
            if(user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: { session: any, token: any}) {
            session.user.id = token.id;
            return session;
        }
    }
};

export default NextAuth(authOptions)