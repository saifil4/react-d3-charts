import { Group } from "types/section.type";

import LineChart from "react-d3/charts/line-chart/LineChart";
import * as LineChartRaw from "react-d3/charts/line-chart/LineChart?raw";
import * as LineChartDataRaw from "react-d3/data/line-chart-data?raw";

import MultiLineChart from "react-d3/charts/line-chart/multi-line-chart";
import LineChartWithHover from "react-d3/charts/line-chart/line-chart-with-hover";

import * as MultiLineChartRaw from "react-d3/charts/line-chart/multi-line-chart?raw";
import * as LineChartWithHoverRaw from "react-d3/charts/line-chart/line-chart-with-hover?raw";

import * as MultiLineChartConfig from "react-d3/charts/line-chart/multi-line-chart/config?raw";
import * as LineChartWithHoverConfig from "react-d3/charts/line-chart/line-chart-with-hover/config?raw";


const lineChartGroup: Group = {
    name: "Line Charts",
    sections: [
        {
            heading: "Line Chart",
            component: LineChart,
            files: [
                { code: LineChartRaw.default, name: "LineChart.tsx" },
                { code: LineChartDataRaw.default, name: "line-chart-data.ts" },
            ],
        },
        {
            heading: "Line Chart with Hover",
            component: LineChartWithHover,
            files: [
                { code: LineChartWithHoverRaw.default, name: "LineChartWithHover.tsx" },
                { code: LineChartWithHoverConfig.default, name: "config.ts" },
            ],
        },
        {
            heading: "Multi Line Chart",
            component: MultiLineChart,
            files: [
                { code: MultiLineChartRaw.default, name: "MultiLineChart.tsx" },
                { code: MultiLineChartConfig.default, name: "config.ts" },
            ],
        },
    ]
}


export { lineChartGroup };