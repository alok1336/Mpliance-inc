import { prisma } from "@/lib/prisma";

export default async function QuoteRequestsPage() {
  const quoteRequests =
    await prisma.quoteRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Quote Requests
        </h1>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Message
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {quoteRequests.map(
              (request) => (
                <tr
                  key={request.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {request.name}
                  </td>

                  <td className="p-4">
                    {request.productName}
                  </td>

                  <td className="p-4">
                    {request.email}
                  </td>

                  <td className="p-4">
                    {request.phone}
                  </td>

                  <td className="max-w-xs p-4">
                    {request.message ||
                      "-"}
                  </td>

                  <td className="p-4">
                    {new Date(
                      request.createdAt
                    ).toLocaleDateString()}
                  </td>
                </tr>
              )
            )}

            {quoteRequests.length ===
              0 && (
              <tr>
                <td
                  colSpan={6}
                  className="p-8 text-center text-gray-500"
                >
                  No quote requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}