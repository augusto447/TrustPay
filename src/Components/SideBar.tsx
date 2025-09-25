import {
  ClockCounterClockwise,
  Gear,
  ListDashes,
  PlusCircle,
  SignOut,
} from "phosphor-react";
import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="p-7 bg-gray-800 text-white w-60 shadom ">
      <ul className="flex flex-col gap-6">
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
          to="/configuracao"
          className="flex items-center gap-2 mb-4 hover:text-gray-300 cursor-pointer"
        >
          <Gear size={24} />
          <span>Configurações</span>{" "}
        </NavLink>
        <NavLink
          to="/registrar-transacao"
          className="flex items-center gap-2 mb-4  hover:text-gray-300 cursor-pointer"
        >
          <PlusCircle size={24} />
          <span> Transação </span>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-2 mb-4 hover:text-gray-300 cursor-pointer"
        >
          <SignOut size={24} />
          <span>Log out</span>
        </NavLink>
      </ul>
    </aside>
  );
}
