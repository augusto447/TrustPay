import { Bell, Moon, Sun, User } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Configurations() {
  return (
    <div className="flex flex-col mx-4 sm:mx-6 md:mx-10 lg:mx-20">
      <h1 className="text-center mt-3 text-2xl mb-6 font-bold">
        Configurações
      </h1>

      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* Tema */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-white shadow p-3 md:p-4 rounded-2xl gap-2">
          <button className="flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
            <Sun size={28} />
            <span>Tema</span>
          </button>
          <button className="flex items-center gap-2 bg-gray-200 p-2 rounded-2xl cursor-pointer w-full sm:w-auto justify-center sm:justify-end">
            <Moon size={24} className="text-gray-500" />
            <Sun size={28} className="text-yellow-500 bg-white rounded-2xl" />
          </button>
        </div>

        {/* Notificações */}
        <NavLink
          to={"/notifications"}
          className="flex items-center gap-2 bg-white shadow p-3 md:p-4 rounded-2xl cursor-pointer w-full justify-center sm:justify-start"
        >
          <Bell size={28} className="text-blue-500 dark:text-gray-200" />
          <span>Notificações</span>
        </NavLink>

        {/* Perfil */}
        <NavLink
          to={"/profile"}
          className="flex items-center gap-2 bg-white shadow p-3 md:p-4 rounded-2xl cursor-pointer w-full justify-center sm:justify-start"
        >
          <User size={28} className="text-green-500" />
          <span>Perfil</span>
        </NavLink>
      </div>
    </div>
  );
}
