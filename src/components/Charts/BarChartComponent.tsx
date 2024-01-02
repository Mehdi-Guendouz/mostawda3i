import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "P1",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "P2",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "p3",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "P4",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "P5",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "P6",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "P7",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#B0BBD5"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#B0BBD5"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[20, 20, 0, 0]}
          barSize={20}
          color="#064789"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
