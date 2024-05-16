import SimpleBarChart from './simple-bar-chart';
import * as SimpleBarChartRaw from "./simple-bar-chart?raw";
import * as SimpleBarChartConfig from "./simple-bar-chart/config?raw";
import { Group } from 'types/section.type';


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
        }
    ]
}

export {
    barChartGroup
}