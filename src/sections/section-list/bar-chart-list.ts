import SimpleBarChart from 'react-d3/charts/bar-chart/simple-bar-chart';
import * as SimpleBarChartRaw from "react-d3/charts/bar-chart/simple-bar-chart?raw";
import * as SimpleBarChartConfig from "react-d3/charts/bar-chart/simple-bar-chart/config?raw";
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
            status: "available"
        },
        {
            heading: "Grouped Bar Chart",
            component: SimpleBarChart,
            files: [
                { code: SimpleBarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: SimpleBarChartConfig.default, name: "config.ts" },
            ],
            status: "in-progress"
        },
        {
            heading: "Stacked Bar Chart",
            component: SimpleBarChart,
            files: [
                { code: SimpleBarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: SimpleBarChartConfig.default, name: "config.ts" },
            ],
            status: "in-progress"
        }
    ]
}

export {
    barChartGroup
}