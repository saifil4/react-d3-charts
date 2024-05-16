

import { BarChart } from "./charts/bar-chart";
import * as BarChartCode from "charts/bar-chart?raw";
import AxisDemo from "./charts/axis";
import SpiderChart from "./charts/spider-chart";
import * as AxisCode from "charts/axis?raw";

import {
    LineChartWithHover,
    SimpleLineChart,
    MultiLineChart,
    LineChartWithHoverRaw,
    SimpleLineChartRaw,
    MultiLineChartRaw,
    MultiLineChartConfig,
    SimpleLineChartConfig,
    LineChartWithHoverConfig
} from "charts/line-chart";

type Panel = {
    heading: string;
    component: React.FC<any>,
    files: { code: string, name: string }[],
}

type Group = {
    name: string | null,
    panels: Panel[]
}

export const PanelData: Group[] = [
    {
        name: "Line Charts",
        panels: [
            {
                heading: "Simple Line Chart",
                component: SimpleLineChart,
                files: [
                    { code: SimpleLineChartRaw.default, name: "SimpleLineChart.tsx" },
                    { code: AxisCode.default, name: "Axis.tsx" },
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
            }
        ]
    },
    {
        name: "Bar Charts",
        panels: [
            {
                heading: "Simple Bar Chart",
                component: BarChart,
                files: [
                    { code: BarChartCode.default, name: "SimpleLineChart.tsx" },
                    { code: BarChartCode.default, name: "SimpleLineChart.tsx" },
                ],
            }
        ]
    },
    {
        name: "Spider Chart",
        panels: [
            {
                heading: "Simple Spider Chart",
                component: SpiderChart,
                files: [
                    { code: SimpleLineChartRaw.default, name: "SimpleLineChart.tsx" },
                    { code: SimpleLineChartRaw.default, name: "SimpleLineChart.tsx" },
                ],
            }
        ]
    },
    {
        name: "Axis",
        panels: [
            {
                heading: "Axis Examples",
                component: AxisDemo,
                files: [
                    { code: SimpleLineChartRaw.default, name: "SimpleLineChart.tsx" },
                    { code: SimpleLineChartRaw.default, name: "SimpleLineChart.tsx" },
                ],
            }
        ]
    },
]