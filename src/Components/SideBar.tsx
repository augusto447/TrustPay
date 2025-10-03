import {
  ClockCounterClockwise,
  Gear,
  ListDashes,
  PlusCircle,
  SignOut,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";
import { useNavigate } from "react-router-dom";

export function SideBar() {
  const { logout } = useContext(DashboardContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // controla visibilidade

  function handleLogout() {
    logout();
    navigate("/login");
  }

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  // Se a sidebar estiver escondida, não mostra o conteúdo, só o ícone
  return (
    <aside className={`p-7 bg-gray-800 text-white shadow min-h-screen`}>
      <ul className="flex flex-col gap-10">
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          <ListDashes size={24} />
          {isOpen && (
            <NavLink to="/dashboard">
              <span>Dashboard</span>
            </NavLink>
          )}
        </li>

        {isOpen && (
          <>
            <NavLink
              to="/historico"
              className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
            >
              <ClockCounterClockwise size={24} />
              <span>Histórico</span>
            </NavLink>
            <NavLink
              to="/configuracao"
              className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
            >
              <Gear size={24} />
              <span>Configurações</span>
            </NavLink>
            <NavLink
              to="/registrar-transacao"
              className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
            >
              <PlusCircle size={24} />
              <span>Transação</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
            >
              <SignOut size={24} />
              <span>Log out</span>
            </button>
          </>
        )}
      </ul>
    </aside>
  );
}
