import { Bell, Moon, Sun, User } from "phosphor-react";

import { NavLink } from "react-router-dom";

export function Configurations() {
  return (
    <div className="flex  flex-col  ml-5 mr-5">
      <h1 className="text-center mt-3 text-2xl mb-6 font-bold">
        Configurações
      </h1>
      <div className="flex flex-col gap-6">
        <div className="flex items-center bg-white shadow p-2 rounded-2xl gap-2 justify-between">
          <button className="flex items-center gap-2 cursor-pointer">
            {" "}
            <Sun size={28} />
            <span>Tema</span>
          </button>
          <button className="flex items-center gap-2 bg-gray-200 p-2 rounded-2xl cursor-pointer">
            {" "}
            <Moon size={24} className="text-gray-500" />
            <Sun size={28} className="text-yellow-500 bg-white rounded-2xl" />
          </button>
        </div>

        <button className="cursor-pointer flex items-center  gap-2 bg-white shadow p-2 rounded-2xl">
          {" "}
          <Bell size={28} className="text-blue-500 dark:text-gray-200" />
          <NavLink to={"/notifications"}>
            {" "}
            <span>Notificações</span>{" "}
          </NavLink>
        </button>

        <button className="flex items-center gap-2  bg-white shadow p-2 rounded-2xl cursor-pointer">
          <User size={28} className="text-green-500" />
          <NavLink to={"/profile"}>
            <span> Perfil</span>
          </NavLink>
        </button>
      </div>
    </div>
  );
}
