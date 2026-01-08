import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLaout";

function App() {
  return (
    <>
      <Routes>
        {/* Main */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Dashboard  */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* <Route path="" element={<DashboardHome />} /> */}
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
