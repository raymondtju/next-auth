import Link from "next/link";
import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

function SignIn() {
  const { data: session } = useSession();
  const [email, setEmail] = React.useState("");
  console.log(email);
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <label className="input-group">
        <span>Email</span>
        <input
          type="text"
          placeholder="info@site.com"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <Link
        href="/api/auth/signin"
        onClick={(e) => {
          e.preventDefault();
          signIn("email", { email });
        }}
      >
        Sign In
      </Link>
    </div>
  );
}

export default SignIn;
