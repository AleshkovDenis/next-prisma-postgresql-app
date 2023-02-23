import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <nav>
      <ul>{!session?.user && <Login />}</ul>
      <ul>{session?.user && <Logged image={session.user?.image || ''} />}</ul>
    </nav>
  );
}
