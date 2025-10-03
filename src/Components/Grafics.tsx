import { ChartBar, ChartPie } from "phosphor-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const barData = [
  { name: "Jan", entrada: 1200, saida: 800 },
  { name: "Feb", entrada: 1500, saida: 1000 },
  { name: "Mar", entrada: 900, saida: 1200 },
  { name: "Apr", entrada: 1800, saida: 1100 },
];

const pieData = [
  { name: "Alimentação", value: 400 },
  { name: "Transporte", value: 300 },
  { name: "Educação", value: 250 },
  { name: "Lazer", value: 150 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

let cumulative = 0;
const saldoData = barData.map((item) => {
  cumulative += item.entrada - item.saida;
  return { name: item.name, saldo: cumulative };
});

export function Grafics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-90 mt-6">
      <div className="bg-white shadow-md rounded-2xl p-4 w-80">
        <div className="flex items-center gap-2 mb-4">
          <ChartBar size={20} weight="duotone" className="text-gray-500" />
          <h2 className="text-lg font-semibold">Entradas vs Saídas</h2>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="entrada"
                name="Entradas"
                fill="#10b981"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="saida"
                name="Saídas"
                fill="#ef4444"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 w-80">
        <div className="flex items-center gap-2 mb-4">
          <ChartPie size={20} weight="duotone" className="text-gray-500" />
          <h2 className="text-lg font-semibold">Distribuição das Despesas</h2>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 w-80">
        <div className="flex items-center gap-2 mb-4">
          <ChartBar size={20} weight="duotone" className="text-gray-500" />
          <h2 className="text-lg font-semibold">Saldo Acumulado</h2>
        </div>

        <div className="h-64 ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={saldoData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="saldo"
                name="Saldo Acumulado"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
