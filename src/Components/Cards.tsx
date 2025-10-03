// src/components/Card.tsx
import { useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";
import {
  CurrencyDollar,
  ArrowCircleUp,
  ArrowCircleDown,
  ClipboardText,
} from "phosphor-react";

export function Cards() {
  const { saldo, receitas, despesas, transacoes } =
    useContext(DashboardContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0.5">
      {/* Saldo Atual */}
      <div className="bg-white shadow p-6 rounded-2xl text-center">
        <h2 className="flex justify-center items-center gap-2 text-gray-500">
          <CurrencyDollar size={22} className="text-blue-500" /> Saldo Atual
        </h2>
        <p className="text-2xl font-bold text-gray-800">
          {saldo} <span className="text-sm text-gray-500">KZ</span>
        </p>
      </div>

      {/* Receitas */}
      <div className="bg-white shadow p-6 rounded-2xl text-center">
        <h2 className="flex justify-center items-center gap-2 text-gray-500">
          <ArrowCircleUp size={22} className="text-green-500" /> Receitas
        </h2>
        <p className="text-2xl font-bold text-green-600">
          {receitas} <span className="text-sm text-gray-500">KZ</span>
        </p>
      </div>

      {/* Despesas */}
      <div className="bg-white shadow p-6 rounded-2xl text-center">
        <h2 className="flex justify-center items-center gap-2 text-gray-500">
          <ArrowCircleDown size={22} className="text-red-500" /> Despesas
        </h2>
        <p className="text-2xl font-bold text-red-600">
          {despesas} <span className="text-sm text-gray-500">KZ</span>
        </p>
      </div>

      {/* Total de Transações */}
      <div className="bg-white shadow p-6 rounded-2xl text-center">
        <h2 className="flex justify-center items-center gap-2 text-gray-500">
          <ClipboardText size={22} className="text-purple-500" /> Transações
        </h2>
        <p className="text-2xl font-bold text-gray-800">{transacoes.length}</p>
      </div>
    </div>
  );
}
