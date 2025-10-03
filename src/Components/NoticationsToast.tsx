import { useEffect, useRef, useState, useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";
import { Trash } from "phosphor-react";

export function FloatNotifications() {
  const { notificacoes } = useContext(DashboardContext);
  const [flutuantes, setFlutuantes] = useState<
    { id: number; mensagem: string; tipo: string }[]
  >([]);

  const ultimoIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (notificacoes.length === 0) return;

    const nova = notificacoes[0];

    if (nova && nova.id !== ultimoIdRef.current) {
      ultimoIdRef.current = nova.id;
      setFlutuantes((prev) => [...prev, nova]);

      setTimeout(() => {
        setFlutuantes((prev) => prev.filter((f) => f.id !== nova.id));
      }, 5000);
    }
  }, [notificacoes]);

  return (
    <div className="fixed top-4 right-4 flex flex-col gap-2 z-50 mt-10">
      {flutuantes.map((n) => (
        <div
          key={n.id}
          className={`p-3 rounded shadow text-white flex justify-between items-center min-w-[250px] ${
            n.tipo === "entrada" ? "bg-green-500" : "bg-red-500"
          } animate-slide-in`}
        >
          <span>{n.mensagem}</span>
          <button
            onClick={() =>
              setFlutuantes((prev) => prev.filter((f) => f.id !== n.id))
            }
            className="cursor-pointer text-white p-1 rounded hover:bg-red-100 hover:text-red-500 transition-colors"
          >
            <Trash size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
