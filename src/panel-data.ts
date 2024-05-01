import { SimpleLineChart } from "./charts/linechart/SimpleLineChart";
import { LineChartWithHover } from "./charts/linechart/LineChartWithHover";
import { MultiLineChart } from "./charts/linechart/MultiLineChart";
import { BarChart } from "./charts/barchart";
import * as SimpleLineChartCode from "./charts/linechart/SimpleLineChart?raw";
import * as MultiLineChartCode from "./charts/linechart/MultiLineChart?raw";
import * as LineChartWithHoverCode from "./charts/linechart/LineChartWithHover?raw";
import * as BarChartCode from "./charts/barchart?raw";
import AxisDemo from "./charts/Axis";
import SpiderChart from "./charts/spider-chart";

type Panel = {
    heading: string;
    component: React.FC<any>,
    code: string;
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
                code: SimpleLineChartCode.default
               
            },
            {
                heading: "Line Chart with Hover",
                component: LineChartWithHover,
                code: LineChartWithHoverCode.default
            },
            {
                heading: "Multi Line Chart",
                component: MultiLineChart,
                code: MultiLineChartCode.default
            }
        ]
    },
    {
        name: "Bar Charts",
        panels: [
            {
                heading: "Simple Bar Chart",
                component: BarChart,
                code: BarChartCode.default
            }
    ]
    },
    {
        name: "Spider Chart",
        panels: [
            {
                heading: "Simple Spider Chart",
                component: SpiderChart,
                code: ''
            }
        ]
    },
    {
        name: "Axis",
        panels: [
            {
                heading: "Axis Examples",
                component: AxisDemo,
                code: ''
            }
        ]
    },
]