import { Group } from "types/section.type";
import * as TChartRaw from "react-d3/data/type?raw";
import * as AxisRaw from "react-d3/components/Axis?raw";

import LineChart from "react-d3/charts/line-chart/LineChart";
import * as LineChartRaw from "react-d3/charts/line-chart/LineChart?raw";
import * as LineChartDataRaw from "react-d3/data/line-chart-data?raw";

import MultiLineChart from "react-d3/charts/line-chart/multi-line-chart";
import * as MultiLineChartRaw from "react-d3/charts/line-chart/multi-line-chart?raw";
import * as MultiLineChartConfig from "react-d3/charts/line-chart/multi-line-chart/config?raw";


const lineChartGroup: Group = {
    name: "Line Charts",
    sections: [
        {
            heading: "Line Chart",
            component: LineChart,
            files: [
                { code: LineChartRaw.default, name: "LineChart.tsx" },
                { code: AxisRaw.default, name: "Axis.tsx" },
                { code: LineChartDataRaw.default, name: "line-chart-data.ts" },
                { code: TChartRaw.default, name: "type.ts" },
            ],
            status: "available"
        },
        {
            heading: "Multi Line Chart",
            component: MultiLineChart,
            files: [
                { code: MultiLineChartRaw.default, name: "MultiLineChart.tsx" },
                { code: MultiLineChartConfig.default, name: "config.ts" },
            ],
            status: "available"
        },
    ]
}


export { lineChartGroup };