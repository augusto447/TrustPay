import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { SideBar } from "../Components/SideBar";
import { Footer } from "@/Components/Footer";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="flex gap-4 p-4 min-h-screen">
        <SideBar />

        <main className="bg-gray-300 w-screen">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
