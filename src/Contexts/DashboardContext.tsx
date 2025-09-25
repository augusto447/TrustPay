import { createContext, type ReactNode } from "react";
import type { CardsProps } from "../Components/Cards";
import { ChartLine, CurrencyDollar } from "phosphor-react";
import { format } from "date-fns";

interface DasboardContextProviderProps {
  children: ReactNode;
}

interface DasboardContextTypes {
  cards: CardsProps[];
  historico: HistoricoTypes[];
}

interface HistoricoTypes {
  id: number;
  descricao: String;
  valor: number;
  tipo: "entrada" | "saida";
  data: string;
}

export const DashboardContext = createContext({} as DasboardContextTypes);

export function DashboardContextProvider({
  children,
}: DasboardContextProviderProps) {
  const cards: CardsProps[] = [
    {
      id: 1,
      title: "Saldo Actual",
      value: "$500",
      icon: <CurrencyDollar size={24} />,
    },
    {
      id: 2,
      title: "Receitas",
      value: "$2000",
      icon: <CurrencyDollar size={24} />,
    },
    {
      id: 3,
      title: "Despesas",
      value: "$1200",
      icon: <CurrencyDollar size={24} />,
    },
    {
      id: 4,
      title: "Transações",
      value: 25,
      icon: <ChartLine size={24} />,
    },
  ];

  const historico: HistoricoTypes[] = [
    {
      id: 1,
      descricao: "Salário",
      valor: 2000,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 2,
      descricao: "Supermercado",
      valor: 350,
      tipo: "saida",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 3,
      descricao: "Energia elétrica",
      valor: 120,
      tipo: "saida",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 4,
      descricao: "Venda de produto",
      valor: 500,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
  ];

  return (
    <DashboardContext.Provider value={{ cards, historico }}>
      {children}
    </DashboardContext.Provider>
  );
}
