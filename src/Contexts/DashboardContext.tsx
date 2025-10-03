// src/Contexts/DashboardContext.tsx
import { createContext, useEffect, useState, type ReactNode } from "react";

interface DasboardContextProviderProps {
  children: ReactNode;
}

interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: "entrada" | "saida";
  data: string;
}

interface Notificacao {
  id: number;
  mensagem: string;
  tipo: "entrada" | "saida";
}

interface DasboardContextTypes {
  user: User | null;
  signup: (nome: string, email: string, password: string) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  setUser: (user: User | null) => void;
  transacoes: Transacao[];
  saldo: number;
  receitas: number;
  despesas: number;
  adicionarTransacao: (transacao: Omit<Transacao, "id" | "data">) => void;
  removerTransacao: (id: number) => void;

  notificacao: string | null; // 👈 nova
  setNotificacao: (msg: string | null) => void;
  notificacoes: Notificacao[];
  adicionarNotificacao: (mensagem: string, tipo: "entrada" | "saida") => void;
  removerNotificacao: (id: number) => void;
}

export const DashboardContext = createContext({} as DasboardContextTypes);

export function DashboardContextProvider({
  children,
}: DasboardContextProviderProps) {
  // Inicializa estados direto do localStorage
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

  function adicionarNotificacao(mensagem: string, tipo: "entrada" | "saida") {
    const novaNotificacao = {
      id: Date.now(),
      mensagem,
      tipo,
    };
    setNotificacoes([novaNotificacao, ...notificacoes]);
  }

  function removerNotificacao(id: number) {
    setNotificacoes(notificacoes.filter((n) => n.id !== id));
  }

  const [transacoes, setTransacoes] = useState<Transacao[]>(() => {
    const savedTransacoes = localStorage.getItem("transacoes");
    return savedTransacoes ? JSON.parse(savedTransacoes) : [];
  });
  const [notificacao, setNotificacao] = useState<string | null>(null); // 👈

  // Sempre que mudar transações, atualiza o localStorage
  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  // Sempre que mudar usuário, atualiza o localStorage
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // Adiciona uma nova transação
  function adicionarTransacao(transacao: Omit<Transacao, "id" | "data">) {
    const novaTransacao: Transacao = {
      ...transacao,
      id: Date.now(),
      data: new Date().toLocaleDateString(), // Apenas dia/mês/ano
    };
    setTransacoes([...transacoes, novaTransacao]);
    adicionarNotificacao("Transação adicionada!", transacao.tipo);
  }

  // Remove uma transação pelo id
  function removerTransacao(id: number) {
    setTransacoes(transacoes.filter((t) => t.id !== id));
  }

  // Calcula receitas, despesas e saldo
  const receitas = transacoes
    .filter((t) => t.tipo === "entrada")
    .reduce((acc, t) => acc + t.valor, 0);

  const despesas = transacoes
    .filter((t) => t.tipo === "saida")
    .reduce((acc, t) => acc + t.valor, 0);

  const saldo = receitas - despesas;

  // Cadastro de usuário
  function signup(name: string, email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u) => u.email === email);
    if (exists) return false;

    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    const newUser: User = {
      name,
      email,
      password,
      avatar: `https://ui-avatars.com/api/?name=${initials}&background=random&rounded=true&size=128`,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setUser(newUser);

    return true;
  }

  // Login de usuário
  function login(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      setUser(validUser);
      return true;
    }
    return false;
  }

  // Logout
  function logout() {
    setUser(null);
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        setUser,
        transacoes,
        saldo,
        receitas,
        despesas,
        adicionarTransacao,
        removerTransacao,
        notificacao,
        notificacoes, // 👈 novo
        setNotificacao,
        adicionarNotificacao,
        removerNotificacao, // 👈 novo
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
