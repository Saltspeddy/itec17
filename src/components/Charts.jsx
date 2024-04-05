import {
  AreaChart,
  Area,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts";

const dataChart = [
  {
    hour: 12,
    response: 120,
  },
  {
    hour: 14,
    response: 200,
  },
  {
    hour: 16,
    response: 160,
  },
  {
    hour: 18,
    response: 168,
  },
  {
    hour: 20,
    response: 179,
  },
];

function Charts() {
  return (
    <div className="col-span-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={400} height={400} data={dataChart}>
          <YAxis></YAxis>
          <XAxis dataKey="hour"></XAxis>
          <CartesianGrid></CartesianGrid>
          <Area
            type="monotone"
            dataKey="response"
            stroke="#fcbf49"
            fill="#fcbf49"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Charts;
