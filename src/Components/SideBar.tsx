import { ClockCounterClockwise, Gear, ListDashes } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="p-10 bg-gray-800 text-white w-60  ">
      <ul className="flex flex-col gap-10">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2 mb-4 hover:text-gray-300 cursor-pointer"
        >
          <ListDashes size={24} />
          <span>Dasboard</span>
        </NavLink>
        <NavLink
          to="/historico"
          className="flex items-center gap-2 mb-4 hover:text-gray-300 cursor-pointer"
        >
          <ClockCounterClockwise size={24} />
          <span>Histórico</span>
        </NavLink>
        <NavLink
          to="/configuração"
          className="flex items-center gap-2 mb-4 hover:text-gray-300 cursor-pointer"
        >
          <Gear size={24} />
          <span>Configurações</span>{" "}
        </NavLink>
      </ul>
    </aside>
  );
}
