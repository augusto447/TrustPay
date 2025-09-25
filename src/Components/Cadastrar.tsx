export function Cadastrar() {
  return (
    <div className="flex justify-center items-start mt-10">
      <form className="bg-white p-6 rounded-lg shadow-md w-250 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Cadastrar Transação</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="font-bold text-gray-700">Descrição</label>
          <input
            id="descricao"
            type="text"
            placeholder="Ex: Salário"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="valor" className="font-bold text-gray-700">Valor</label>
          <input
            id="valor"
            type="number"
            placeholder="Ex: 20.000"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-gray-700">Tipo</span>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="tipo" value="entrada" className="form-radio text-green-500" />
              Entrada
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="tipo" value="saida" className="form-radio text-red-500" />
              Saída
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="data" className="font-semibold text-gray-700">Data</label>
          <input
            id="data"
            type="date"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-between gap-4 mt-4 w-100">
          <button type="button" className="flex-1 bg-red-700 hover:bg-red-600 w-1 rounded text-white font-semibold">
            Cancelar
          </button>
          <button type="submit" className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
