import SpiderChart from "react-d3/charts/other-chart/SpiderChart";
import * as SimpleSpiderChartRaw from "react-d3/charts/other-chart/SpiderChart?raw";
// import * as SimpleSpiderChartConfig from "react-d3/charts/other-chart/spider-chart/config?raw";

import BubbleChart from "react-d3/charts/other-chart/BubbleChart";
import { TChartSection } from "types";

import AreaChart from "react-d3/charts/other-chart/AreaChart";

import * as StockDataRaw from "react-d3/data/stock-data?raw";

import * as SimpleAreaChartRaw from "react-d3/charts//other-chart/AreaChart?raw";
import AreaChartWithTooltip from "react-d3/charts/area-chart/AreaChartWithTooltip";

export const otherChartGroup: TChartSection[] = [
    {
        group: 'other-chart',
        heading: "Area Chart",
        component: AreaChart,
        files: [
            { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
            { code: StockDataRaw.default, name: "dummy-stock-data.ts" },
        ],
        status: "available"
    },
    {
        group: 'other-chart',
        heading: "Spider Chart",
        component: SpiderChart,
        files: [
            { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
            { code: 'SimpleSpiderChartConfig.default', name: "config.ts" },
        ],
        status: "available"
    },
    {
        group: 'other-chart',
        heading: "Bubble Chart",
        component: BubbleChart,
        files: [
            { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
            { code: 'SimpleSpiderChartConfig.default', name: "config.ts" },
        ],
        status: "available"
    },
    {
        group: 'other-chart',
        heading: "Area Chart With Tooltip",
        component: AreaChartWithTooltip,
        files: [
            { code: SimpleSpiderChartRaw.default, name: "SimpleSpiderChart.tsx" },
            { code: 'SimpleSpiderChartConfig.default', name: "config.ts" },
        ],
        status: "in-progress"
    },
]
