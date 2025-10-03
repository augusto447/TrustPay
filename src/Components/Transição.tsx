// src/Pages/Transacoes.tsx
import { useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";
import { Trash } from "phosphor-react";
import { Cadastrar } from "../Components/Cadastrar";

export function Transacoes() {
  const { transacoes, removerTransacao, notificacoes, removerNotificacao } =
    useContext(DashboardContext);

  return (
    <div className="p-6">
      {/* Notificações conectadas ao contexto */}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {notificacoes.map((n) => (
          <div
            key={n.id}
            className={`p-3 rounded shadow text-white flex justify-between items-center ${
              n.tipo === "entrada" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <span>{n.mensagem}</span>
            <button onClick={() => removerNotificacao(n.id)}>
              <Trash size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Formulário de cadastro */}
      <Cadastrar />

      {/* Lista de transações */}
      <div className="mt-6 bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Transações</h2>
        {transacoes.length === 0 && (
          <p className="text-gray-500">Nenhuma transação cadastrada.</p>
        )}
        {transacoes.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center mb-2 p-2 border rounded"
          >
            <div>
              <p className="font-semibold">{t.descricao}</p>
              <p className="text-gray-500 text-sm">{t.data}</p>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`font-bold ${
                  t.tipo === "entrada" ? "text-green-500" : "text-red-500"
                }`}
              >
                {t.valor.toLocaleString("pt-AO", {
                  style: "currency",
                  currency: "AOA",
                })}
              </span>
              <button onClick={() => removerTransacao(t.id)}>
                <Trash size={20} className="text-gray-500 hover:text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
