export default function DealerRegistrationPage() {
return ( <main className="mx-auto max-w-4xl px-4 py-16"> <h1 className="mb-8 text-4xl font-bold">
Dealer Registration </h1>


  <form className="space-y-4 rounded-xl bg-white p-8 shadow">
    <input
      type="text"
      placeholder="Company Name"
      className="w-full rounded border p-3"
    />

    <input
      type="text"
      placeholder="Contact Person"
      className="w-full rounded border p-3"
    />

    <input
      type="email"
      placeholder="Email"
      className="w-full rounded border p-3"
    />

    <input
      type="text"
      placeholder="Phone Number"
      className="w-full rounded border p-3"
    />

    <input
      type="text"
      placeholder="GST Number"
      className="w-full rounded border p-3"
    />

    <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
      Register as Dealer
    </button>
  </form>
</main>


);
}
