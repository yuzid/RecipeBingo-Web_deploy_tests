import { useNavigate } from "react-router-dom";

function NavbarLogin() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-green-600">
        <a href="/">RecipeBingo</a></h1>
      <ul className="hidden md:flex space-x-6 items-center text-gray-700">
      </ul>
      <button className="md:hidden text-green-600 text-2xl">☰</button>
    </nav>
  );
}


export default NavbarLogin;
