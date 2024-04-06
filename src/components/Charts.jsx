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
    <div className="w-[40vw] h-[100%] min-w-[300px] min-h-[100px] pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dataChart}>
          <YAxis></YAxis>
          <XAxis dataKey="hour"></XAxis>
          <CartesianGrid strokeDasharray="5 5"></CartesianGrid>
          <Area dataKey="response" stroke="#FFA9E7" fill="#f72585" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Charts;
