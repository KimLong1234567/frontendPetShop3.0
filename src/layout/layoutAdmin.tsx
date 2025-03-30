import { Outlet } from "react-router-dom";
import AdminSideBar from "../admin/pages/adminSideBar/sideBar";
import Header from "../admin/pages/header/header";

function LayoutAdmin() {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Sidebar - Chiếm 2/12 cột, cố định chiều cao */}
      <aside className="col-span-2 bg-gray-800 text-white h-full">
        <AdminSideBar />
      </aside>

      {/* Main Content - Chiếm 10/12 cột */}
      <main className="col-span-10 flex flex-col h-full">
        {/* Header - Cố định trên cùng */}
        <header className="bg-purple-100 shadow-md p-4">
          <Header />
        </header>

        {/* Outlet - Phần nội dung */}
        <section className="flex-1 overflow-auto p-6 bg-gray-100">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default LayoutAdmin;
