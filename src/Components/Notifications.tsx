import { useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";
import { Trash } from "phosphor-react";

export function Notifications() {
  const { notificacoes, removerNotificacao } = useContext(DashboardContext);

  if (notificacoes.length === 0)
    return <p className="text-gray-500 p-6">Nenhuma notificação.</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Notificações</h2>
      <div className="flex flex-col gap-2">
        {notificacoes.map((n) => (
          <div
            key={n.id}
            className={`p-3 rounded shadow text-white flex justify-between items-center ${
              n.tipo === "entrada" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <span className="cursor-pointer">{n.mensagem}</span>
            <button
              className="cursor-pointer text-white p-1 rounded hover:bg-red-100 hover:text-red-500 transition-colors"
              onClick={() => removerNotificacao(n.id)}
            >
              <Trash size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
