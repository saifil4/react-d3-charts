import SimpleBarChart from './simple-bar-chart';
import * as SimpleBarChartRaw from "./simple-bar-chart?raw";
import * as SimpleBarChartConfig from "./simple-bar-chart/config?raw";
import { Group } from 'react-d3/types/section.type';


const barChartGroup: Group =
{
    name: "Bar Charts",
    sections: [
        {
            heading: "Simple Bar Chart",
            component: SimpleBarChart,
            files: [
                { code: SimpleBarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: SimpleBarChartConfig.default, name: "config.ts" },
            ],
        },
        {
            heading: "Grouped Bar Chart",
            component: SimpleBarChart,
            files: [
                { code: SimpleBarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: SimpleBarChartConfig.default, name: "config.ts" },
            ],
        },
        {
            heading: "Stacked Bar Chart",
            component: SimpleBarChart,
            files: [
                { code: SimpleBarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: SimpleBarChartConfig.default, name: "config.ts" },
            ],
        }
    ]
}

export {
    barChartGroup
}