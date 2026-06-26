"use client";

import { useState } from "react";

interface Props {
productName: string;
isOpen: boolean;
onClose: () => void;
}

export default function QuoteModal({
productName,
isOpen,
onClose,
}: Props) {
const [loading, setLoading] =
useState(false);

const [form, setForm] = useState({
name: "",
email: "",
phone: "",
message: "",
});

async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();

setLoading(true);

try {
  const response = await fetch(
    "/api/quote-requests",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        ...form,
        productName,
      }),
    }
  );

  const data =
    await response.json();

  if (data.success) {
    alert(
      "Quote request submitted successfully"
    );

    onClose();
  }
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}


}

if (!isOpen) return null;

return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"> <div className="w-full max-w-lg rounded-xl bg-white p-6"> <div className="mb-4 flex items-center justify-between"> <h2 className="text-2xl font-bold">
Request Quote </h2>

      <button onClick={onClose}>
        ✕
      </button>
    </div>

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        placeholder="Name"
        className="w-full rounded border p-3"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        className="w-full rounded border p-3"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        placeholder="Phone"
        className="w-full rounded border p-3"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
      />

      <textarea
        rows={4}
        placeholder="Message"
        className="w-full rounded border p-3"
        value={form.message}
        onChange={(e) =>
          setForm({
            ...form,
            message:
              e.target.value,
          })
        }
      />

      <button
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 text-white"
      >
        {loading
          ? "Submitting..."
          : "Submit Quote Request"}
      </button>
    </form>
  </div>
</div>


);
}
