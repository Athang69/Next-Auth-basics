"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

function RealHome(){
  const session = useSession();
  return <div>
    {session.status === "authenticated" && <button className="cursor-pointer" onClick={()=> signOut()}>Sign Out</button>}
    {session.status === "unauthenticated" && <button onClick={()=> signIn()}>Sign In</button>}
  </div>
}
