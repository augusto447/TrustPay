import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { DefaultLayout } from "../DefaultLayout";
import { Historico } from "./Histórico";
import { Configurations } from "./Configurations";
import { Cadastrar } from "./Cadastrar";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="historico" element={<Historico />} />
        <Route path="configuracao" element={<Configurations />} />
        <Route path="cadastrar" element={<Cadastrar/>} />
      </Route>
    </Routes>
  );
}
