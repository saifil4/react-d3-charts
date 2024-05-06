
import { LineChartWithHover } from "charts/linechart/LineChartWithHover";
import { MultiLineChart } from "charts/linechart/MultiLineChart";
import { BarChart } from "./charts/barchart";

import * as MultiLineChartCode from "charts/linechart/MultiLineChart?raw";
import * as LineChartWithHoverCode from "charts/linechart/LineChartWithHover?raw";
import * as BarChartCode from "charts/barchart?raw";
import AxisDemo from "./charts/Axis";
import SpiderChart from "./charts/spider-chart";


//Line Charts
import { SimpleLineChart } from "charts/linechart/simple-line-chart";
import * as SimpleLineChartCode from "charts/linechart//simple-line-chart?raw";
import * as SimpleLineChartConfig from "charts/linechart/simple-line-chart/config?raw";
import * as AxisCode from "components/Axis?raw";

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
                    { code: SimpleLineChartCode.default, name: "SimpleLineChart.tsx" },
                    { code: AxisCode.default, name: "Axis.tsx" },
                    { code: SimpleLineChartConfig.default, name: "Config.tsx" },
                ],

            },
            {
                heading: "Line Chart with Hover",
                component: LineChartWithHover,
                files: [
                    { code: LineChartWithHoverCode.default, name: "SimpleLineChart.tsx" },
                    { code: LineChartWithHoverCode.default, name: "SimpleLineChart.tsx" },
                ],
            },
            {
                heading: "Multi Line Chart",
                component: MultiLineChart,
                files: [
                    { code: MultiLineChartCode.default, name: "SimpleLineChart.tsx" },
                    { code: MultiLineChartCode.default, name: "SimpleLineChart.tsx" },
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
                    { code: SimpleLineChartCode.default, name: "SimpleLineChart.tsx" },
                    { code: SimpleLineChartCode.default, name: "SimpleLineChart.tsx" },
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
                    { code: SimpleLineChartCode.default, name: "SimpleLineChart.tsx" },
                    { code: SimpleLineChartCode.default, name: "SimpleLineChart.tsx" },
                ],
            }
        ]
    },
]