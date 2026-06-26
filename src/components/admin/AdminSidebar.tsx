"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Products",
    href: "/admin/products",
  },
  {
    label: "Categories",
    href: "/admin/categories",
  },
  {
    label: "Service Requests",
    href: "/admin/services",
  },
  {
    label: "Testimonials",
    href: "/admin/testimonials",
  },
  {
    label: "Newsletter",
    href: "/admin/newsletter",
  },
  {
    label: "Dealers",
    href: "/admin/dealers",
  },
  {
    label: "Fraud Reports",
    href: "/admin/fraud-reports",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold">
          Mpliance Admin
        </h2>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-lg px-4 py-3 transition ${
                  pathname === item.href
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}