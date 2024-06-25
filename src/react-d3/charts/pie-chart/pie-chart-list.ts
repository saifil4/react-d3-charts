import PieChart from "./simple-pie-chart"
import * as PieChartRaw from "./simple-pie-chart?raw"
import { Group } from "react-d3/types/section.type"

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
        },
        {
            heading: "Donut Chart",
            component: PieChart,
            files: [
                { code: PieChartRaw.default, name: "SimplePieChart.tsx" }
            ],
        },
        {
            heading: "Multi Donut Chart",
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