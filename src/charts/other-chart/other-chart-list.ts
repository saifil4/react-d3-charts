import SimpleSpiderChart from "./spider-chart";
import * as SimpleSpiderChartRaw from "./spider-chart?raw";
import * as SimpleSpiderChartConfig from "./spider-chart/config?raw";
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
        },
        {
            heading: "Scatter Plot Chart",
            component: SimpleSpiderChart,
            files: [
                { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
                { code: SimpleSpiderChartConfig.default, name: "config.ts" },
            ],
        },
        {
            heading: "Bubble Chart",
            component: SimpleSpiderChart,
            files: [
                { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
                { code: SimpleSpiderChartConfig.default, name: "config.ts" },
            ],
        },
        {
            heading: "Simple Spider Chart",
            component: SimpleSpiderChart,
            files: [
                { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
                { code: SimpleSpiderChartConfig.default, name: "config.ts" },
            ],
        }
    ]
}

export {
    otherChartGroup
}