import StatCard from "./StatCard";

interface Props {
  products: number;
  categories: number;
  users: number;
  services: number;
}

export default function DashboardStats({
  products,
  categories,
  users,
  services,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <StatCard
        title="Products"
        value={products}
      />

      <StatCard
        title="Categories"
        value={categories}
      />

      <StatCard
        title="Users"
        value={users}
      />

      <StatCard
        title="Service Requests"
        value={services}
      />
    </div>
  );
}