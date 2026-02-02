import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main style={{ padding: "30px", flex: 1 }}>
        {/* هنا كيتبدّل المحتوى */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
