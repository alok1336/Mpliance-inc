import { prisma } from "@/lib/prisma";
import DeleteSubscriberButton from "@/components/admin/DeleteSubscriberButton";

export default async function NewsletterPage() {
  const subscribers =
    await prisma.newsletterSubscriber.findMany({
      orderBy: {
        subscribedAt: "desc",
      },
    });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Newsletter Subscribers
        </h1>

        <p className="mt-2 text-gray-600">
          Total Subscribers:{" "}
          {subscribers.length}
        </p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Subscribed
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {subscribers.map(
              (subscriber) => (
                <tr
                  key={subscriber.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {subscriber.email}
                  </td>

                  <td className="p-4">
                    {new Date(
                      subscriber.subscribedAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <DeleteSubscriberButton
                      id={subscriber.id}
                    />
                  </td>
                </tr>
              )
            )}

            {subscribers.length ===
              0 && (
              <tr>
                <td
                  colSpan={3}
                  className="p-8 text-center text-gray-500"
                >
                  No subscribers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}