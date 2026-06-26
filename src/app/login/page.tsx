"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
const router = useRouter();

const [email, setEmail] =
useState("");

const [password, setPassword] =
useState("");

const [loading, setLoading] =
useState(false);

async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();


setLoading(true);

const result = await signIn(
  "credentials",
  {
    email,
    password,
    redirect: false,
  }
);

setLoading(false);

if (result?.error) {
  alert("Invalid credentials");
  return;
}

router.push("/");
router.refresh();


}

return ( <main className="flex min-h-screen items-center justify-center bg-[#020817] p-6">


  <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

    <h1 className="mb-2 text-center text-4xl font-bold text-white">
      Welcome Back
    </h1>

    <p className="mb-8 text-center text-slate-400">
      Login to your account
    </p>

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
        className="w-full rounded-2xl border border-white/10 bg-slate-900 p-4 text-white outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
        className="w-full rounded-2xl border border-white/10 bg-slate-900 p-4 text-white outline-none"
      />

      <button
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white"
      >
        {loading
          ? "Logging in..."
          : "Login"}
      </button>
    </form>

    <p className="mt-6 text-center text-slate-400">
      Don't have an account?{" "}
      <Link
        href="/register"
        className="text-cyan-400"
      >
        Register
      </Link>
    </p>
  </div>
</main>


);
}
