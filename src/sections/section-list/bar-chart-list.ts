import BarChart from 'react-d3/charts/bar-chart/BarChart';
import StackedBarChart from 'react-d3/charts/bar-chart/StackedBarChart';
import GroupedBarChart from 'react-d3/charts/bar-chart/GroupedBarChart';
import * as BarChartRaw from "react-d3/charts/bar-chart/BarChart?raw";
import * as  barChartData from 'react-d3/data/bar-chart-data?raw';
import { Group } from 'types/section.type';


const barChartGroup: Group =
{
    name: "Bar Charts",
    sections: [
        {
            heading: "Bar Chart",
            component: BarChart,
            files: [
                { code: BarChartRaw.default, name: "BarChart.tsx" },
                { code: barChartData.default, name: "config.ts" },
            ],
            status: "available"
        },
        {
            heading: "Stacked Bar Chart",
            component: StackedBarChart,
            files: [
                { code: BarChartRaw.default, name: "StackedBarChart.tsx" },
                { code: barChartData.default, name: "config.ts" },
            ],
            status: "available"
        },
        {
            heading: "Grouped Bar Chart",
            component: GroupedBarChart,
            files: [
                { code: BarChartRaw.default, name: "GroupedBarChart.tsx" },
                { code: barChartData.default, name: "config.ts" },
            ],
            status: "available"
        }
    ]
}

export {
    barChartGroup
}