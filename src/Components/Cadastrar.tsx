import { useState, useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";

export function Cadastrar() {
  const { adicionarTransacao, saldo } = useContext(DashboardContext);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState<"entrada" | "saida">("entrada");
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (tipo === "saida" && valor > saldo) {
      setErro("Saldo insuficiente!");
      return;
    }
    adicionarTransacao({ descricao, valor, tipo });
    setDescricao("");
    setValor(0);
    setTipo("entrada");
  }

  function handleCancelar() {
    setDescricao("");
    setValor(0);
    setTipo("entrada");
    setErro("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow rounded-2xl mt-6  mr-10 ml-10"
    >
      <h2 className="text-xl font-bold mb-4  text-center">
        Cadastrar Transação
      </h2>
      <label htmlFor="descrição">Descrição</label>
      <input
        id="descrição"
        type="text"
        placeholder="Ex Salário"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />
      <label htmlFor="valor"> </label>
      Valor
      <div className="relative w-full mb-3">
        <input
          type="number"
          placeholder="0"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          className="border p-2 w-full pr-12 rounded"
          required
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">
          KZ
        </span>
      </div>
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value as "entrada" | "saida")}
        className="border p-2 w-full mb-3"
      >
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
      {erro && <p className="text-red-600 mb-3">{erro}</p>}
      <div className="flex  gap-2">
        <button
          onClick={handleCancelar}
          className="bg-red-700 py-2 w-full rounded text-white cursor-pointer hover:bg-red-600"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}
