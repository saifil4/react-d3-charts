import PieChart from "react-d3/charts/pie-chart/simple-pie-chart"
import * as PieChartRaw from "react-d3/charts/pie-chart/simple-pie-chart?raw"
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