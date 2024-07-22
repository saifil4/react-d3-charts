import AreaChart from "react-d3/charts/other-chart/AreaChart";
import * as areaChartRaw from "react-d3/charts/other-chart/AreaChart?raw";
import * as stockDataRaw from "react-d3/data/stock-data?raw";
import * as axisRaw from "react-d3/components/Axis?raw";

import SpiderChart from "react-d3/charts/other-chart/SpiderChart";
import * as spiderChartRaw from "react-d3/charts/other-chart/SpiderChart?raw";
import * as carSpecDataRaw from "react-d3/data/car-spec-data?raw";
import * as legendRaw from "react-d3/components/Legends?raw";

import BubbleChart from "react-d3/charts/other-chart/BubbleChart";
import * as bubbleChartRaw from "react-d3/charts/other-chart/BubbleChart?raw";
import * as  taskPriorityDataRaw from "react-d3/data/task-priorty-data?raw";
import { TChartSection } from "types";

export const otherChartGroup: TChartSection[] = [
    {
        group: 'other-chart',
        heading: "Area Chart",
        component: AreaChart,
        files: [
            { code: areaChartRaw.default, name: "SimpleAreaChart.tsx" },
            { code: axisRaw.default, name: "Axis.tsx" },
            { code: stockDataRaw.default, name: "dummy-stock-data.ts" },
        ],
        status: "available"
    },
    {
        group: 'other-chart',
        heading: "Spider Chart",
        component: SpiderChart,
        files: [
            { code: spiderChartRaw.default, name: "SpiderChart.tsx" },
            { code: legendRaw.default, name: "Legend.tsx" },
            { code: carSpecDataRaw.default, name: "car-spec-data.ts" },
        ],
        status: "available"
    },
    {
        group: 'other-chart',
        heading: "Bubble Chart",
        component: BubbleChart,
        files: [
            { code: bubbleChartRaw.default, name: "BubbleChart.tsx" },
            { code: axisRaw.default, name: "Axis.tsx" },
            { code: taskPriorityDataRaw.default, name: "task-priorty-data.ts" },
        ],
        status: "available"
    }
]
