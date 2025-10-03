// src/pages/Dashboard.tsx
import { Cards } from "../Components/Cards";

import { Grafics } from "./Grafics";

export function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-10">
      {/* Cards dinâmicos */}
      <Cards />
      <div className="w-10 hidden lg:block ">
        <Grafics />
      </div>
    </div>
  );
}
