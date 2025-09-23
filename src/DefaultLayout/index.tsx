import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { SideBar } from "../Components/SideBar";

export function DefaultLayout() {
  return (
    <div >
      <Header />
      <div className="flex gap-4 p-4 min-h-screen">
        <SideBar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
