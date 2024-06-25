import { Group } from "react-d3/types/section.type";

import MultiLineChart from "./multi-line-chart";
import LineChartWithHover from "./line-chart-with-hover";
import SimpleLineChart from "./simple-line-chart";

import * as MultiLineChartRaw from "./multi-line-chart?raw";
import * as LineChartWithHoverRaw from "./line-chart-with-hover?raw";
import * as SimpleLineChartRaw from "./simple-line-chart?raw";

import * as MultiLineChartConfig from "./multi-line-chart/config?raw";
import * as LineChartWithHoverConfig from "./line-chart-with-hover/config?raw";
import * as SimpleLineChartConfig from "./simple-line-chart/config?raw";


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