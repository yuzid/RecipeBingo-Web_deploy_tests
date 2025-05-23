import { useNavigate } from "react-router-dom";

function NavbarDashboard() {

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-green-600">
      <h1 className="text-2xl font-bold text-white">RecipeBingo Admin</h1>
      <ul className="hidden md:flex space-x-6 items-center text-white">
        {/* Tambahkan item menu di sini jika diperlukan */}
      </ul>
    </nav>
  );
}

export default NavbarDashboard;
