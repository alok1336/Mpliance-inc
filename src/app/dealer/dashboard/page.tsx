import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DealerDashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/dealer/login");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your products, quotations and subscriptions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold">
            Products
          </h2>

          <p className="mt-4 text-4xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold">
            Quotations
          </h2>

          <p className="mt-4 text-4xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold">
            Subscription
          </h2>

          <p className="mt-4 text-lg font-semibold">
            {session.user.dealerTier || "Free"}
          </p>
        </div>
      </div>
    </div>
  );
}