




export function Histórico() {
  return (
    <div>
      <h1 >Histórico de transações</h1>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="p-2 border">Data</th>
            <th className="p-2 border">Descrição</th>
            <th className="p-2 border">Valor</th>
            <th className="p-2 border">Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">23/09/2025</td>
            <td className="p-2 border">Salário</td>
            <td className="p-2 border">500</td>
            <td className="p-2 border">Entrada</td>
          </tr>
          <tr>
            <td className="p-2 border">22/09/2025</td>
            <td className="p-2 border">Mercado</td>
            <td className="p-2 border">50</td>
            <td className="p-2 border">Saída</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
