import Image from "next/image";
import CustomLink from "@/components/common/CustomLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <CustomLink href="/" title="Home" description="Go to the top page" />
        <CustomLink href="/about" title="About" description="Go to the about page" />
        <CustomLink href="/login" title="Login" description="Go to the Login page" />
      </div>
      <h1>Welcome to Next.js</h1>
    </main>
  );
}
