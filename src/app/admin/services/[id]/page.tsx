
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ServiceRequestStatusForm from "@/components/admin/ServiceRequestStatusForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceRequestPage({
  params,
}: Props) {
  const { id } = await params;

  const request =
    await prisma.serviceRequest.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });

  if (!request) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Service Request Details
        </h1>
      </div>

      <div className="rounded-xl bg-white p-8 shadow">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">
              Customer
            </h3>

            <p>{request.user.name}</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Email
            </h3>

            <p>{request.user.email}</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Request Type
            </h3>

            <p>{request.type}</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Status
            </h3>

            <p>{request.status}</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Hospital
            </h3>

            <p>
              {request.hospitalName ||
                "-"}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Equipment
            </h3>

            <p>
              {request.equipmentName ||
                "-"}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-2 font-semibold">
            Description
          </h3>

          <p className="rounded-lg bg-slate-50 p-4">
            {request.description}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-2 font-semibold">
            Created At
          </h3>

          <p>
            {new Date(
              request.createdAt
            ).toLocaleString()}
          </p>
        </div>
      </div>

      <ServiceRequestStatusForm
        requestId={request.id}
        currentStatus={
          request.status
        }
      />
    </div>
  );
}