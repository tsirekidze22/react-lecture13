import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLaout";
import Loading from "./components/reusable/Loading";

// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Profile from "./pages/dashboard/Profile";
// import Settings from "./pages/dashboard/Settings";
// import DashboardHome from "./pages/dashboard/DashboardHome";
// import DashboardLayout from "./layouts/DashboardLayout";

const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const DashboardHome = lazy(() => import("./pages/dashboard/DashboardHome"));
const Profile = lazy(() => import("./pages/dashboard/Profile"));
const Settings = lazy(() => import("./pages/dashboard/Settings"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// const CompanyInfo = lazy(() => import("./pages/dashboard/CompanyInfo"))

// tree shaking
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <CompanyInfo/> */}
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
      </Suspense>
    </>
  );
}

export default App;
