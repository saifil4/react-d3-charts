import { Group } from "types/section.type";
import * as TChartAttributes from "react-d3/type?raw";
import * as AxisRaw from "react-d3/components/Axis?raw";

import LineChart from "react-d3/charts/line-chart/LineChart";
import * as LineChartRaw from "react-d3/charts/line-chart/LineChart?raw";
import * as DummyStockDataRaw from "react-d3/data/dummy-stock-data?raw";

import MultiLineChart from "react-d3/charts/line-chart/MultiLineChart";
import * as MultiLineChartRaw from "react-d3/charts/line-chart/MultiLineChart?raw";
import * as MultiLineChartData from "react-d3/data/multi-line-chart-data?raw";


const lineChartGroup: Group = {
    name: "Line Charts",
    sections: [
        {
            heading: "Line Chart",
            component: LineChart,
            files: [
                { code: LineChartRaw.default, name: "LineChart.tsx" },
                { code: AxisRaw.default, name: "Axis.tsx" },
                { code: DummyStockDataRaw.default, name: "line-chart-data.ts" },
                { code: TChartAttributes.default, name: "type.ts" },
            ],
            status: "available"
        },
        {
            heading: "Multi Line Chart",
            component: MultiLineChart,
            files: [
                { code: MultiLineChartRaw.default, name: "MultiLineChart.tsx" },
                { code: MultiLineChartData.default, name: "config.ts" },
            ],
            status: "available"
        },
    ]
}


export { lineChartGroup };