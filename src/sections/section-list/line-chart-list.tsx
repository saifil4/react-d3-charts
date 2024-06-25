import { Group } from "types/section.type";

import MultiLineChart from "react-d3/charts/line-chart/multi-line-chart";
import LineChartWithHover from "react-d3/charts/line-chart/line-chart-with-hover";
import SimpleLineChart from "react-d3/charts/line-chart/simple-line-chart";

import * as MultiLineChartRaw from "react-d3/charts/line-chart/multi-line-chart?raw";
import * as LineChartWithHoverRaw from "react-d3/charts/line-chart/line-chart-with-hover?raw";
import * as SimpleLineChartRaw from "react-d3/charts/line-chart/simple-line-chart?raw";

import * as MultiLineChartConfig from "react-d3/charts/line-chart/multi-line-chart/config?raw";
import * as LineChartWithHoverConfig from "react-d3/charts/line-chart/line-chart-with-hover/config?raw";
import * as SimpleLineChartConfig from "react-d3/charts/line-chart/simple-line-chart/config?raw";


const lineChartGroup: Group = {
    name: "Line Charts",
    sections: [
        {
            heading: "Simple Line Chart",
            component: SimpleLineChart,
            files: [
                { code: SimpleLineChartRaw.default, name: "SimpleLineChart.tsx" },
                { code: SimpleLineChartConfig.default, name: "config.ts" },
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