import logo from "../assets/logo.png";
import { Bell } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";

// Tipo do usuário
interface UserType {
  name: string;
  avatar?: string;     // avatar do signup normal
  photoURL?: string;   // foto do Google
}

// Componente Avatar
function Avatar({ user }: { user: UserType }) {
  if (user.photoURL || user.avatar) {
    // Se tiver imagem (Google ou avatar do signup), mostra a imagem
    return (
      <img
        className="h-8 w-8 rounded-full border-2 border-gray-300"
        src={user.photoURL || user.avatar}
        alt={user.name}
      />
    );
  }

  // fallback para iniciais
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-400 text-white font-bold">
      {initials}
    </div>
  );
}

// Componente Header completo
export function Header() {
  const { user } = useContext(DashboardContext);

  return (
    <nav className="flex items-center justify-between p-4 shadow bg-white">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <img className="h-10" src={logo} alt="logo" />
        <span className="font-bold text-xl">TrustPay</span>
      </div>

      {/* Menu direito */}
      <div className="flex items-center gap-4">
        {/* Botão de notificações */}
        <NavLink to="/notifications">
          <Bell size={24} className="cursor-pointer" />
        </NavLink>

        {/* Se tiver usuário logado */}
        {user ? (
          <div className="flex items-center gap-2">
            <Avatar user={user} />
            <span className="font-medium">{user.name}</span>
          </div>
        ) : (
          // Se não tiver usuário
          <NavLink to="/login" className="font-medium text-blue-600 hover:underline">
            Entrar
          </NavLink>
        )}
      </div>
    </nav>
  );
}
