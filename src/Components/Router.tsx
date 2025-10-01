import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Dashboard } from "./Dashboard";
import { DefaultLayout } from "../DefaultLayout";
import { Historico } from "./Histórico";
import { Configurations } from "./Configurations";
import { Cadastrar } from "./Cadastrar";
import { Profile } from "./Profile";
import { Notifications } from "./Notifications";
import { Login } from "./Login";
import { Footer } from "./Footer";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="historico" element={<Historico />} />
        <Route path="configuracao" element={<Configurations />} />
        <Route path="registrar-transacao" element={<Cadastrar />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notifications" element={<Notifications />} />

        <Route path="footer" element={<Footer />} />
      </Route>
    </Routes>
  );
}
