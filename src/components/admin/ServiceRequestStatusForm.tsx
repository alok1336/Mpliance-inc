
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  requestId: string;
  currentStatus: string;
}

export default function ServiceRequestStatusForm({
  requestId,
  currentStatus,
}: Props) {
  const router = useRouter();

  const [status, setStatus] =
    useState(currentStatus);

  const [loading, setLoading] =
    useState(false);

  async function handleSave() {
    setLoading(true);

    try {
      const response = await fetch(
        `/api/service-requests/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        alert(
          "Status updated successfully"
        );

        router.refresh();
      } else {
        alert(
          data.error ||
            "Failed to update status"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update status"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h2 className="mb-4 text-xl font-semibold">
        Update Status
      </h2>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
          className="rounded-lg border p-3"
        >
          <option value="PENDING">
            PENDING
          </option>

          <option value="IN_PROGRESS">
            IN PROGRESS
          </option>

          <option value="COMPLETED">
            COMPLETED
          </option>

          <option value="CANCELLED">
            CANCELLED
          </option>
        </select>

        <button
          onClick={handleSave}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : "Save Status"}
        </button>
      </div>
    </div>
  );
}
