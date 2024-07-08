import AreaChart from "react-d3/charts/area-chart/AreaChart";
import * as SimpleAreaChartRaw from "react-d3/charts/area-chart/AreaChart?raw";
import * as AreaChartData from "react-d3/data/area-chart-data?raw";

import AreaChartWithHover from "react-d3/charts/area-chart/area-chart-with-hover";


import { Group } from 'types/section.type';


const areaChartGroup: Group =
{
    name: "Area Charts",
    sections: [
        {
            heading: "Area Chart",
            component: AreaChart,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: AreaChartData.default, name: "area-chart-data.ts" },
            ],
            status: "available"
        },
        {
            heading: "Area Chart with Hover",
            component: AreaChartWithHover,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: AreaChartData.default, name: "config.ts" },
            ],
            status: "available"
        },
        {
            heading: "Multi Area Chart",
            component: AreaChart,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: AreaChartData.default, name: "config.ts" },
            ],
            status: "in-progress"
        }
    ]
}

export {
    areaChartGroup
}