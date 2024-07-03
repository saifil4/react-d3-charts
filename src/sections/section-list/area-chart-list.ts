import SimpleAreaChart from "react-d3/charts/area-chart/simple-area-chart";
import AreaChartWithHover from "react-d3/charts/area-chart/area-chart-with-hover";

import * as SimpleAreaChartRaw from "react-d3/charts/area-chart/simple-area-chart?raw";
import * as SimpleAreaChartConfig from "react-d3/charts/area-chart/simple-area-chart/config?raw";
import { Group } from 'types/section.type';


const areaChartGroup: Group =
{
    name: "Area Charts",
    sections: [
        {
            heading: "Simple Area Chart",
            component: SimpleAreaChart,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: SimpleAreaChartConfig.default, name: "config.ts" },
            ],
            status: "available"
        },
        {
            heading: "Area Chart with Hover",
            component: AreaChartWithHover,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: SimpleAreaChartConfig.default, name: "config.ts" },
            ],
            status: "available"
        },
        {
            heading: "Multi Area Chart",
            component: SimpleAreaChart,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: SimpleAreaChartConfig.default, name: "config.ts" },
            ],
            status: "in-progress"
        }
    ]
}

export {
    areaChartGroup
}