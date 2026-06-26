import { prisma } from "@/lib/prisma";
import DashboardStats from "@/components/admin/DashboardStats";

export default async function DashboardPage() {
  const [
    products,
    categories,
    users,
    services,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.category.count(),
    prisma.user.count(),
    prisma.serviceRequest.count(),
  ]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h2>

      <DashboardStats
        products={products}
        categories={categories}
        users={users}
        services={services}
      />
    </div>
  );
}