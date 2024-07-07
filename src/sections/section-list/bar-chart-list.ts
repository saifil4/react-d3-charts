import BarChart from 'react-d3/charts/bar-chart/BarChart';
import * as BarChartRaw from "react-d3/charts/bar-chart/BarChart?raw";
import * as  barChartData from 'react-d3/data/bar-chart-data?raw';
import { Group } from 'types/section.type';


const barChartGroup: Group =
{
    name: "Bar Charts",
    sections: [
        {
            heading: "Simple Bar Chart",
            component: BarChart,
            files: [
                { code: BarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: barChartData.default, name: "config.ts" },
            ],
            status: "available"
        },
        {
            heading: "Grouped Bar Chart",
            component: BarChart,
            files: [
                { code: BarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: barChartData.default, name: "config.ts" },
            ],
            status: "in-progress"
        },
        {
            heading: "Stacked Bar Chart",
            component: BarChart,
            files: [
                { code: BarChartRaw.default, name: "SimpleBarChart.tsx" },
                { code: barChartData.default, name: "config.ts" },
            ],
            status: "in-progress"
        }
    ]
}

export {
    barChartGroup
}