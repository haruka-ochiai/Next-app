import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label:"Password", type: "password" },
            },
            authorize: async (credentials) => {
                const user = { id:1, name: "test", email: "test@example.com" }

                if (credentials.email === "test@example.com" && credentials?.password === "password") {
                    return user;
                }else {
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET
};