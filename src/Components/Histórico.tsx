import { useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";
import { Trash } from "phosphor-react";

export function Historico() {
  const { historico } = useContext(DashboardContext);

  return (
    <div className="p-10 rounded-2xl  shadow bg-white mt-10 ml-10 mr-10">
      <h2 className="text-2xl text-center font-bold mb-4">Histórico de Transações</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse border">
          <thead>
            <tr className="border bg-gray-100 text-gray-800">
              <th className=" border  py-2 px-4">Descrição</th>
              <th className=" border py-2 px-4">Valor</th>
              <th className=" border py-2 px-4">Tipo</th>
              <th className="py-2 px-4">Data</th>
            </tr>
          </thead>
          <tbody>
            {historico.map((item) => (
              <tr key={item.id} className="border-b border hover:bg-gray-50">
                <td className="py-2 px-4 border">{item.descricao}
               
                </td>
                <td
                  className={` border py-2  px-4 font-medium  ${
                    item.tipo === "entrada" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.tipo === "entrada" ? "+" : "-"}${item.valor}
                </td>
                <td className="py-2 px-4 border capitalize">{item.tipo}</td>
                <td className="py-2 px-4 flex items-center justify-between">    {item.data}  <button className="cursor-pointer text-gray-500 hover:bg-red-500 "><Trash size={20}/></button>  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
