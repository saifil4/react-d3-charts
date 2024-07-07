import SimpleSpiderChart from "react-d3/charts/other-chart/spider-chart";
import * as SimpleSpiderChartRaw from "react-d3/charts/other-chart/spider-chart?raw";
import * as SimpleSpiderChartConfig from "react-d3/charts/other-chart/spider-chart/config?raw";

import BubbleChart from "react-d3/charts/other-chart/BubbleChart";
import { Group } from "types/section.type";


const otherChartGroup: Group =
{
    name: "Other Charts",
    sections: [
        {
            heading: "Simple Spider Chart",
            component: SimpleSpiderChart,
            files: [
                { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
                { code: SimpleSpiderChartConfig.default, name: "config.ts" },
            ],
            status: "available"
        },
        {
            heading: "Bubble Chart",
            component: BubbleChart,
            files: [
                { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
                { code: SimpleSpiderChartConfig.default, name: "config.ts" },
            ],
            status: "in-progress"
        },
    ]
}

export {
    otherChartGroup
}