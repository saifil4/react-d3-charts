import { TChartSection } from "types";
import * as AxisRaw from "react-d3/components/Axis?raw";

import LineChart from "react-d3/charts/line-chart/LineChart";
import * as LineChartRaw from "react-d3/charts/line-chart/LineChart?raw";
import * as StockDataRaw from "react-d3/data/stock-data?raw";

import MultiLineChart from "react-d3/charts/line-chart/MultiLineChart";
import * as MultiLineChartRaw from "react-d3/charts/line-chart/MultiLineChart?raw";
import * as RevenueDataRaw from "react-d3/data/revenue-historic-data?raw";
import * as LegendRaw from "react-d3/components/Legends?raw";

const lineChartGroup: TChartSection[] = [
  {
    group: "line-chart",
    heading: "Line Chart",
    component: LineChart,
    files: [
      { code: LineChartRaw.default, name: "LineChart.tsx" },
      { code: AxisRaw.default, name: "Axis.tsx" },
      { code: StockDataRaw.default, name: "stock-data.ts" },
    ],
    status: "available",
  },
  {
    group: "line-chart",
    heading: "Multi Line Chart",
    component: MultiLineChart,
    files: [
      { code: MultiLineChartRaw.default, name: "MultiLineChart.tsx" },
      { code: AxisRaw.default, name: "Axis.tsx" },
      { code: LegendRaw.default, name: "Legend.tsx" },
      { code: RevenueDataRaw.default, name: "config.ts" },
    ],
    status: "available",
  },
];

export { lineChartGroup };
