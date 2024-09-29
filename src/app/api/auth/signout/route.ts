import { signOut } from "next-auth/react"

const handleLogout = async () => {
    await signOut();
};