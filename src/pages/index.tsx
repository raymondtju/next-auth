import Head from "next/head";
import { Inter } from "next/font/google";
import LoginButton from "@/components/LoginButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <h1 className="underline">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href="/auth/signin" className="btn">
          SignIn
        </Link>
      </main>
    </>
  );
}
