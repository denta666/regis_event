import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-red-500 min-h-screen w-full grid grid-cols-2 items-center">
      {/* kiri */}
      <div>
        <div className="min-h-screen bg-gray-100">Logo</div>
      </div>

      {/* kanan */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
