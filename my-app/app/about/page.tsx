import Image from "next/image";
import Link from 'next/link';
import getAllUsers from "@/lib/getAllUsers";

export default async function About() {
    const userData: Promise<User[]> = getAllUsers();
  const users = await userData
  console.log('hello');
  

  const content = (
    <section>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
      <br />
      {users.map(user=>{
        return(
          <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <br />
          </>
        )
      })}
    </section>
  )
  return content;
}
