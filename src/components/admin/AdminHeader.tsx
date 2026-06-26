export default function AdminHeader() {
  return (
    <header className="bg-white border-b p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Admin Dashboard
      </h1>

      <div>
        <span className="text-gray-600">
          Administrator
        </span>
      </div>
    </header>
  );
}