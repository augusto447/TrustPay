// src/components/Card.tsx

import type { ReactNode } from "react";

export interface CardsProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  id: number;
}

export function Cards({ title, value, icon }: CardsProps) {
  return (
    <div className=" bg-white shadow  p-6 flex flex-col gap-2 rounded-2xl">
      <div className="flex gap-4 justify-center items-center text-sm">
        <h2 className="text-sm text-gray-500">{title}</h2>
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>
      <p className="text-2xl font-bold text-gray-800 text-center ">{value}</p>
    </div>
    
    
  );
}
 