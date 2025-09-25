// src/pages/Dashboard.tsx

import { Cards } from "./Cards";
import { Grafics } from "./Grafics";
import { useContext } from "react";
import { DashboardContext } from "../Contexts/DashboardContext";

export function Dashboard() {
  const { cards } = useContext(DashboardContext);

  return (
    <div className="p-6 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow">
      {cards.map((card) => (
        <Cards key={card.id} {...card} />
      ))}
      <Grafics />
    </div>
  );
}
