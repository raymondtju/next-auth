import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  console.log("session", session);
  if (session) {
    return (
      <>
        Signed in as {session.user && session.user.email} <br />
        <button className="btn" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button className="btn" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
