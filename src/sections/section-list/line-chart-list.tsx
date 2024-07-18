import { TChartSection } from "types";
import * as TChartAttributes from "react-d3/type?raw";
import * as AxisRaw from "react-d3/components/Axis?raw";

import LineChart from "react-d3/charts/line-chart/LineChart";
import * as LineChartRaw from "react-d3/charts/line-chart/LineChart?raw";
import * as StockDataRaw from "react-d3/data/stock-data?raw";

import MultiLineChart from "react-d3/charts/line-chart/MultiLineChart";
import * as MultiLineChartRaw from "react-d3/charts/line-chart/MultiLineChart?raw";


const lineChartGroup: TChartSection[] = [
    {
        group: 'line-chart',
        heading: "Line Chart",
        component: LineChart,
        files: [
            { code: LineChartRaw.default, name: "LineChart.tsx" },
            { code: AxisRaw.default, name: "Axis.tsx" },
            { code: StockDataRaw.default, name: "line-chart-data.ts" },
            { code: TChartAttributes.default, name: "type.ts" },
        ],
        status: "available"
    },
    {
         group: 'line-chart',
        heading: "Multi Line Chart",
        component: MultiLineChart,
        files: [
            { code: MultiLineChartRaw.default, name: "MultiLineChart.tsx" },
            { code: 'MultiLineChartData.default', name: "config.ts" },
        ],
        status: "available"
    },
]



export { lineChartGroup };