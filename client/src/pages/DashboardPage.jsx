import { Outlet, Link } from 'react-router-dom';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';

function DashboardPage() {
  return (
    <>
    <NavbarDashboard/>
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar/>

      <main className="flex-1 p-10">
        <Outlet /> {}
      </main>
    </div>
    </>
  );
}

export default DashboardPage;
