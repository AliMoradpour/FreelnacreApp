import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <header className="bg-secondary-0 py-4 px-8">App Header</header>
      <div className="bg-secondary-0 row-start-1 row-span-2">app sidebar</div>
      <main className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
