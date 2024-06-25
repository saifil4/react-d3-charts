import SimpleAreaChart from "./simple-area-chart";
import * as SimpleAreaChartRaw from "./simple-area-chart?raw";
import * as SimpleAreaChartConfig from "./simple-area-chart/config?raw";
import { Group } from 'react-d3/types/section.type';


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