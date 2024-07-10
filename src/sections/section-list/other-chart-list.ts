import SimpleSpiderChart from "react-d3/charts/other-chart/spider-chart";
import * as SimpleSpiderChartRaw from "react-d3/charts/other-chart/spider-chart?raw";
import * as SimpleSpiderChartConfig from "react-d3/charts/other-chart/spider-chart/config?raw";

import BubbleChart from "react-d3/charts/other-chart/BubbleChart";
import { Group } from "types/section.type";

import AreaChart from "react-d3/charts/other-chart/AreaChart";
import * as SimpleAreaChartRaw from "react-d3/charts/area-chart/AreaChart?raw";
import * as AreaChartData from "react-d3/data/area-chart-data?raw";


const otherChartGroup: Group =
{
    name: "Other Charts",
    sections: [
        {
            heading: "Area Chart",
            component: AreaChart,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: AreaChartData.default, name: "area-chart-data.ts" },
            ],
            status: "available"
        },
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
            status: "available"
        },
    ]
}

export {
    otherChartGroup
}