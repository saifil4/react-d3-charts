import PieChart from "./simple-pie-chart"
import * as PieChartRaw from "./simple-pie-chart?raw"
import { Group } from "types/section.type"

const pieChartGroup: Group =
{
    name: "Pie Charts",
    sections: [
        {
            heading: "Simple Pie Chart",
            component: PieChart,
            files: [
                { code: PieChartRaw.default, name: "SimplePieChart.tsx" }
            ],
        }
    ]
}

export {
    pieChartGroup
}