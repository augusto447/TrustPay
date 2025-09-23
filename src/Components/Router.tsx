import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { DefaultLayout } from "../DefaultLayout";
import { Histórico } from "./Histórico";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="historico" element={<Histórico />} />
      </Route>
    </Routes>
  );
}
