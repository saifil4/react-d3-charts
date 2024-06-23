import SimpleSpiderChart from "./simple-spider-chart";
import * as SimpleSpiderChartRaw from "./simple-spider-chart?raw";
import * as SimpleSpiderChartConfig from "./simple-spider-chart/config?raw";
import { Group } from "types/section.type";


const spiderChartGroup: Group =
{
    name: "Spider Charts",
    sections: [
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
    spiderChartGroup
}