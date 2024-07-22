import BarChart from 'react-d3/charts/bar-chart/BarChart';
import StackedBarChart from 'react-d3/charts/bar-chart/StackedBarChart';
import GroupedBarChart from 'react-d3/charts/bar-chart/GroupedBarChart';



import * as BarChartRaw from "react-d3/charts/bar-chart/BarChart?raw";
import * as StackedBarChartRaw from 'react-d3/charts/bar-chart/StackedBarChart?raw';
import * as GroupedBarChartRaw from 'react-d3/charts/bar-chart/GroupedBarChart?raw';
import * as  barChartData from 'react-d3/data/bar-chart-data?raw';

import { TChartSection } from 'types';

import * as AxisRaw from 'react-d3/components/Axis?raw';
import * as LegendRaw from "react-d3/components/Legends?raw";

import * as revenueSplitData from 'react-d3/data/revenue-split-data?raw';

const barChartGroup: TChartSection[] = [
    {
        group: 'bar-chart',
        heading: "Bar Chart",
        component: BarChart,
        files: [
            { code: BarChartRaw.default, name: "BarChart.tsx" },
            { code: AxisRaw.default, name: "Axis.tsx" },
            { code: barChartData.default, name: "bar-chart-data.ts" },
        ],
        status: "available"
    },
    {
        group: 'bar-chart',
        heading: "Stacked Bar Chart",
        component: StackedBarChart,
        files: [
            { code: StackedBarChartRaw.default, name: "StackedBarChart.tsx" },
            { code: AxisRaw.default, name: "Axis.tsx" },
            { code: LegendRaw.default, name: "Legend.tsx" },
            { code: revenueSplitData.default, name: "revenue-split-data.ts" },
        ],
        status: "available"
    },
    {
        group: 'bar-chart',
        heading: "Grouped Bar Chart",
        component: GroupedBarChart,
        files: [
            { code: GroupedBarChartRaw.default, name: "GroupedBarChart.tsx" },
            { code: AxisRaw.default, name: "Axis.tsx" },
            { code: LegendRaw.default, name: "Legend.tsx" },
            { code: revenueSplitData.default, name: "revenue-split-data.ts" },
          
        ],
        status: "available"
    }
]


export {
    barChartGroup
}