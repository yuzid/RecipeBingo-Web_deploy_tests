import { Outlet, Link } from 'react-router-dom';
import NavbarDashboard from '../components/NavbarDashboard';

function DashboardPage() {
  return (
    <>
    <NavbarDashboard/>
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-md px-6 py-8">
        <h2 className="text-2xl font-bold text-green-600 mb-8">Dashboard</h2>
        <nav className="space-y-4">
          <Link to="overview" className="block text-gray-700 hover:text-green-600">📊 Overview</Link>
          <Link to="apikeylist" className="block text-gray-700 hover:text-green-600">🍳 List ApiKey</Link>
          <Link to="account" className="block text-gray-700 hover:text-green-600">⚙️ Account Settings</Link>
          <a href="#logout" className="block text-red-500 hover:text-red-600">
            🚪 Logout
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <Outlet /> {}
      </main>
    </div>
    </>
  );
}

export default DashboardPage;
