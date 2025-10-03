// src/components/Historico.tsx
import { useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";
import { Trash } from "phosphor-react";

export function Historico() {
  const { transacoes, removerTransacao } = useContext(DashboardContext);

  return (
    <div className="p-4 sm:p-6 md:p-10 rounded-2xl shadow bg-white mt-6 mx-4 md:mx-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-6">
        Histórico de Transações
      </h2>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-4">
        {transacoes.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            Nenhuma transação cadastrada ainda
          </div>
        ) : (
          transacoes.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-xl shadow flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Descrição:</span>
                <span className="text-gray-800">{item.descricao}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Valor:</span>
                <span
                  className={`font-medium ${
                    item.tipo === "entrada" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.tipo === "entrada" ? "+" : "-"} {item.valor} KZ
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Tipo:</span>
                <span className="capitalize">{item.tipo}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Data:</span>
                <span>{item.data.split(",")[0]}</span> {/* Remove a vírgula */}
                <button
                  onClick={() => removerTransacao(item.id)}
                  className="cursor-pointer text-gray-500 p-1 rounded hover:bg-red-100 transition-colors ml-2"
                >
                  <Trash size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-base text-left border-collapse border">
          <thead>
            <tr className="border bg-gray-100 text-gray-800">
              <th className="border py-2 px-4">Descrição</th>
              <th className="border py-2 px-4">Valor</th>
              <th className="border py-2 px-4">Tipo</th>
              <th className="border py-2 px-4">Data</th>
            </tr>
          </thead>
          <tbody>
            {transacoes.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  Nenhuma transação cadastrada ainda
                </td>
              </tr>
            ) : (
              transacoes.map((item) => (
                <tr key={item.id} className="border hover:bg-gray-50">
                  <td className="py-2 px-4 border">{item.descricao}</td>
                  <td
                    className={`border py-2 px-4 font-medium ${
                      item.tipo === "entrada"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.tipo === "entrada" ? "+" : "-"} {item.valor} KZ
                  </td>
                  <td className="py-2 px-4 border capitalize">{item.tipo}</td>
                  <td className="py-2 px-4 flex items-center justify-between">
                    <span>{item.data.split(",")[0]}</span>{" "}
                    {/* Remove a vírgula */}
                    <button
                      onClick={() => removerTransacao(item.id)}
                      className="cursor-pointer text-gray-500 p-1 rounded hover:bg-red-100 transition-colors ml-2"
                    >
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
