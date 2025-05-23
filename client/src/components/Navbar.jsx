import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-green-600">RecipeBingo</h1>
      <ul className="hidden md:flex space-x-6 items-center text-gray-700">
        <li>
          <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          Login
          </button>
        </li>
      </ul>
      <button className="md:hidden text-green-600 text-2xl">☰</button>
    </nav>
  );
}


export default Navbar;
