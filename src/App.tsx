import { BrowserRouter } from "react-router-dom";
import { Router } from "./Components/Router";
import { DashboardContextProvider } from "./Contexts/DashboardContext";

export function App() {
  return (
    <BrowserRouter>
      <DashboardContextProvider>
        <Router />
      </DashboardContextProvider>
    </BrowserRouter>
  );
}
