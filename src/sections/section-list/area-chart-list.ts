import SimpleAreaChart from "react-d3/charts/area-chart/simple-area-chart";
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
        },
        {
            heading: "Multi Area Chart",
            component: SimpleAreaChart,
            files: [
                { code: SimpleAreaChartRaw.default, name: "SimpleAreaChart.tsx" },
                { code: SimpleAreaChartConfig.default, name: "config.ts" },
            ],
        }
    ]
}

export {
    areaChartGroup
}