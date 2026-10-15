import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { type BlogChartDataPoint } from "./blogData";

interface BlogInteractiveChartProps {
  chartType: "bar" | "line" | "composed" | "area";
  chartConfig: {
    xAxisKey: string;
    yAxisLabel?: string;
    title: string;
    subtitle: string;
    dataKeys: { key: string; name: string; color: string }[];
  };
  chartData: BlogChartDataPoint[];
}

export function BlogInteractiveChart({
  chartType,
  chartConfig,
  chartData,
}: BlogInteractiveChartProps) {
  return (
    <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 shadow-xs">
      <div className="mb-6">
        <h4 className="font-display text-lg font-bold text-[#202124]">
          {chartConfig.title}
        </h4>
        <p className="mt-1 font-sans text-xs text-[#5f6368]">
          {chartConfig.subtitle}
        </p>
      </div>

      <div className="h-72 w-full sm:h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 20, left: -10, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f4" vertical={false} />
              <XAxis
                dataKey={chartConfig.xAxisKey}
                tick={{ fill: "#5f6368", fontSize: 11 }}
                axisLine={{ stroke: "#dadce0" }}
                tickLine={false}
                interval={0}
                angle={-15}
                textAnchor="end"
              />
              <YAxis
                tick={{ fill: "#5f6368", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  borderColor: "#dadce0",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: "12px",
                  color: "#202124",
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                wrapperStyle={{ paddingBottom: "12px", fontSize: "12px" }}
              />
              {chartConfig.dataKeys.map((dk) => (
                <Line
                  key={dk.key}
                  type="monotone"
                  dataKey={dk.key}
                  name={dk.name}
                  stroke={dk.color}
                  strokeWidth={2.5}
                  dot={{ r: 4, strokeWidth: 2, fill: "#ffffff" }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          ) : chartType === "composed" ? (
            <ComposedChart
              data={chartData}
              margin={{ top: 10, right: 20, left: -10, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f4" vertical={false} />
              <XAxis
                dataKey={chartConfig.xAxisKey}
                tick={{ fill: "#5f6368", fontSize: 11 }}
                axisLine={{ stroke: "#dadce0" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#5f6368", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  borderColor: "#dadce0",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: "12px",
                  color: "#202124",
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                wrapperStyle={{ paddingBottom: "12px", fontSize: "12px" }}
              />
              {chartConfig.dataKeys.map((dk, index) =>
                index === chartConfig.dataKeys.length - 1 ? (
                  <Line
                    key={dk.key}
                    type="monotone"
                    dataKey={dk.key}
                    name={dk.name}
                    stroke={dk.color}
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#fff", strokeWidth: 2 }}
                  />
                ) : (
                  <Bar
                    key={dk.key}
                    dataKey={dk.key}
                    name={dk.name}
                    fill={dk.color}
                    radius={[4, 4, 0, 0]}
                  />
                )
              )}
            </ComposedChart>
          ) : (
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 20, left: -10, bottom: 35 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f4" vertical={false} />
              <XAxis
                dataKey={chartConfig.xAxisKey}
                tick={{ fill: "#5f6368", fontSize: 11 }}
                axisLine={{ stroke: "#dadce0" }}
                tickLine={false}
                interval={0}
                angle={-20}
                textAnchor="end"
              />
              <YAxis
                tick={{ fill: "#5f6368", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  borderColor: "#dadce0",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: "12px",
                  color: "#202124",
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                wrapperStyle={{ paddingBottom: "12px", fontSize: "12px" }}
              />
              {chartConfig.dataKeys.map((dk) => (
                <Bar
                  key={dk.key}
                  dataKey={dk.key}
                  name={dk.name}
                  fill={dk.color}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#f1f3f4] pt-3 text-[11px] font-sans text-[#70757a]">
        <span>Empirical data curated from normalized ZannixLabs Lakehouse Parquet marts.</span>
        <span className="font-mono text-[#1a73e8]">Live Interactive Telemetry Visualizer</span>
      </div>
    </div>
  );
}
