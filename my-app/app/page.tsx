import Image from "next/image";
import Link from 'next/link';
import getAllUsers from "@/lib/getAllUsers";

export default async function Home() {
  return(
    <main>
      <h1>home page</h1>
      <p>
        <Link href='/about'>Users</Link>
      </p>
    </main>
  )
}
