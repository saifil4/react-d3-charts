import BarChart from 'react-d3/charts/bar-chart/BarChart';
import StackedBarChart from 'react-d3/charts/bar-chart/StackedBarChart';
import GroupedBarChart from 'react-d3/charts/bar-chart/GroupedBarChart';
import * as BarChartRaw from "react-d3/charts/bar-chart/BarChart?raw";
import * as  barChartData from 'react-d3/data/bar-chart-data?raw';
import { TChartSection } from 'types';

const barChartGroup: TChartSection[] = [
    {
        group: 'bar-chart',
        heading: "Bar Chart",
        component: BarChart,
        files: [
            { code: BarChartRaw.default, name: "BarChart.tsx" },
            { code: barChartData.default, name: "config.ts" },
        ],
        status: "available"
    },
    {
        group: 'bar-chart',
        heading: "Stacked Bar Chart",
        component: StackedBarChart,
        files: [
            { code: BarChartRaw.default, name: "StackedBarChart.tsx" },
            { code: barChartData.default, name: "config.ts" },
        ],
        status: "available"
    },
    {
        group: 'bar-chart',
        heading: "Grouped Bar Chart",
        component: GroupedBarChart,
        files: [
            { code: BarChartRaw.default, name: "GroupedBarChart.tsx" },
            { code: barChartData.default, name: "config.ts" },
        ],
        status: "available"
    }
]


export {
    barChartGroup
}