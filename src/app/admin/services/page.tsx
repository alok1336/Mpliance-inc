
import { prisma } from "@/lib/prisma";

export default async function ServiceRequestsPage() {
  const requests =
    await prisma.serviceRequest.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Service Requests
        </h1>

        <p className="mt-2 text-gray-600">
          Manage customer repair,
          AMC, installation and
          support requests.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Type
              </th>

              <th className="p-4 text-left">
                Hospital
              </th>

              <th className="p-4 text-left">
                Equipment
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-t"
              >
                <td className="p-4">
                  {request.user.name}
                </td>

                <td className="p-4">
                  {request.user.email}
                </td>

                <td className="p-4">
                  {request.type}
                </td>

                <td className="p-4">
                  {request.hospitalName ||
                    "-"}
                </td>

                <td className="p-4">
                  {request.equipmentName ||
                    "-"}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      request.status ===
                      "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : request.status ===
                            "IN_PROGRESS"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>

                <td className="p-4">
                  {new Date(
                    request.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {requests.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="p-8 text-center text-gray-500"
                >
                  No service requests
                  found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}