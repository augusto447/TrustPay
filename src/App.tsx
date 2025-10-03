import { BrowserRouter } from "react-router-dom";
import { Router } from "./Components/Router";
import { DashboardContextProvider } from "./Contexts/DashboardContext";
import { Notifications } from "./Components/Notifications";

export function App() {
  return (
    <BrowserRouter>
      <DashboardContextProvider>
        <Notifications />

        <Router />
      </DashboardContextProvider>
    </BrowserRouter>
  );
}
