import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/dealer/login");
  }

  if (session.user.role !== "DEALER") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1 className="text-xl font-bold">
            Dealer Dashboard
          </h1>

          <div className="text-sm text-slate-600">
            {session.user.email}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">
        {children}
      </main>
    </div>
  );
}