"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
const router = useRouter();

const [loading, setLoading] =
useState(false);

const [form, setForm] = useState({
name: "",
email: "",
password: "",
});

async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();


setLoading(true);

try {
  const res = await fetch(
    "/api/register",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(form),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    return;
  }

  alert(
    "Account created successfully"
  );

  router.push("/login");
} catch (error) {
  alert("Something went wrong");
} finally {
  setLoading(false);
}


}

return ( <main className="flex min-h-screen items-center justify-center bg-[#020817] p-6">

  <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

    <h1 className="mb-2 text-center text-4xl font-bold text-white">
      Create Account
    </h1>

    <p className="mb-8 text-center text-slate-400">
      Join Mpliance INC
    </p>

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        type="text"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="w-full rounded-2xl border border-white/10 bg-slate-900 p-4 text-white outline-none"
      />

      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        className="w-full rounded-2xl border border-white/10 bg-slate-900 p-4 text-white outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password:
              e.target.value,
          })
        }
        className="w-full rounded-2xl border border-white/10 bg-slate-900 p-4 text-white outline-none"
      />

      <button
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white"
      >
        {loading
          ? "Creating..."
          : "Create Account"}
      </button>
    </form>

    <p className="mt-6 text-center text-slate-400">
      Already have an account?{" "}
      <Link
        href="/login"
        className="text-cyan-400"
      >
        Login
      </Link>
    </p>
  </div>
</main>


);
}
