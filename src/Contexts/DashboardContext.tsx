import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CardsProps } from "../Components/Cards";
import { ChartLine, CurrencyDollar } from "phosphor-react";
import { format } from "date-fns";

interface DasboardContextProviderProps {
  children: ReactNode;
}
interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface DasboardContextTypes {
  cards: CardsProps[];
  historico: HistoricoTypes[];
  user: User | null;
  signup: (nome: string, email: string, password: string) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  setUser: (user: User | null) => void; // 👈
}

interface HistoricoTypes {
  id: number;
  descricao: string;
  valor: number;
  tipo: "entrada" | "saida";
  data: string;
}

export const DashboardContext = createContext({} as DasboardContextTypes);

export function DashboardContextProvider({
  children,
}: DasboardContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function signup(name: string, email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u: User) => u.email === email);
    if (exists) return false;
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    const newUsers: User = {
      name,
      email,
      password,
      avatar: `https://ui-avatars.com/api/?name=${initials}&background=random&rounded=true&size=128`, // gerador de avatar
    };

    users.push(newUsers);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUsers));

    setUser(newUsers);
    localStorage.setItem("user", JSON.stringify(newUsers));
    return true;
  }

  function login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const validUser = users.find(
      (u: User & { password: string }) =>
        u.email === email && u.password === password
    );
    if (validUser) {
      setUser(validUser);
      localStorage.setItem("validUser", JSON.stringify(validUser));
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

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
    {
      id: 5,
      descricao: "Venda de produto",
      valor: 500,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 6,
      descricao: "Venda de produto",
      valor: 500,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 7,
      descricao: "Venda de produto",
      valor: 500,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 8,
      descricao: "Venda de produto",
      valor: 500,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 9,
      descricao: "Venda de produto",
      valor: 500,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
    {
      id: 10,
      descricao: "Venda de produto",
      valor: 500,
      tipo: "entrada",
      data: format(new Date(), "dd/MM/yyyy HH:mm"),
    },
  ];

  return (
    <DashboardContext.Provider
      value={{ cards, historico, user, signup, login, logout, setUser }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
