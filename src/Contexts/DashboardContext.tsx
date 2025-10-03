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

interface DashboardContextTypes {
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

  notificacao: string | null; // aviso temporário
  setNotificacao: (msg: string | null) => void;
  notificacoes: Notificacao[];
  adicionarNotificacao: (mensagem: string, tipo: "entrada" | "saida") => void;
  removerNotificacao: (id: number) => void;
}

export const DashboardContext = createContext({} as DashboardContextTypes);

export function DashboardContextProvider({
  children,
}: DasboardContextProviderProps) {
  // Estado do usuário
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Estado das transações
  const [transacoes, setTransacoes] = useState<Transacao[]>(() => {
    const saved = localStorage.getItem("transacoes");
    return saved ? JSON.parse(saved) : [];
  });

  // Estado das notificações
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>(() => {
    const saved = localStorage.getItem("notificacoes");
    return saved ? JSON.parse(saved) : [];
  });

  // Aviso temporário (topo)
  const [notificacao, setNotificacao] = useState<string | null>(null);

  // Persistir transações
  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  // Persistir notificações
  useEffect(() => {
    localStorage.setItem("notificacoes", JSON.stringify(notificacoes));
  }, [notificacoes]);

  // Persistir usuário
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // Adicionar notificação
  function adicionarNotificacao(mensagem: string, tipo: "entrada" | "saida") {
    const nova: Notificacao = { id: Date.now(), mensagem, tipo };
    setNotificacoes([nova, ...notificacoes]);
  }

  // Remover notificação
  function removerNotificacao(id: number) {
    setNotificacoes(notificacoes.filter((n) => n.id !== id));
  }

  // Adicionar transação
  function adicionarTransacao(transacao: Omit<Transacao, "id" | "data">) {
    const nova: Transacao = {
      ...transacao,
      id: Date.now(),
      data: new Date().toLocaleDateString(),
    };
    setTransacoes([...transacoes, nova]);

    // Notificações
    setNotificacao("Transação adicionada!");
    adicionarNotificacao(
      `Nova ${transacao.tipo}: ${transacao.descricao}`,
      transacao.tipo
    );

    setTimeout(() => setNotificacao(null), 3000); // some depois de 3s
  }

  // Remover transação
  function removerTransacao(id: number) {
    const t = transacoes.find((t) => t.id === id);
    if (!t) return;

    setTransacoes(transacoes.filter((trans) => trans.id !== id));

    // Notificações
    setNotificacao("Transação removida!");
    adicionarNotificacao(`Removida ${t.tipo}: ${t.descricao}`, t.tipo);

    setTimeout(() => setNotificacao(null), 3000);
  }

  // Calcular saldo
  const receitas = transacoes
    .filter((t) => t.tipo === "entrada")
    .reduce((acc, t) => acc + t.valor, 0);

  const despesas = transacoes
    .filter((t) => t.tipo === "saida")
    .reduce((acc, t) => acc + t.valor, 0);

  const saldo = receitas - despesas;

  // Cadastro
  function signup(name: string, email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) return false;

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

  // Login
  function login(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const valid = users.find(
      (u) => u.email === email && u.password === password
    );
    if (valid) setUser(valid);
    return !!valid;
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
        setNotificacao,
        notificacoes,
        adicionarNotificacao,
        removerNotificacao,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
