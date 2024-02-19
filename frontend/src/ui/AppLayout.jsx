import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
    <Sidebar />
      <main className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
