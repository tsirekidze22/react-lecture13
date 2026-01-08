import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <section className="flex h-screen">
      <aside className="border h-full w-[300px]">
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </aside>
      <main className="border h-full w-full">
        <Outlet />
      </main>
    </section>
  );
};

export default DashboardLayout;
