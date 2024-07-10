import PieChart from "react-d3/charts/pie-chart/simple-pie-chart"
import * as PieChartRaw from "react-d3/charts/pie-chart/simple-pie-chart?raw"
import { TChartSection } from "types"

const pieChartGroup: TChartSection[] = [
    {
        group: 'pie-chart',
        heading: "Simple Pie Chart",
        component: PieChart,
        files: [
            { code: PieChartRaw.default, name: "SimplePieChart.tsx" }
        ],
        status: "available"
    },
    {
        group: 'pie-chart',
        heading: "Donut Chart",
        component: PieChart,
        files: [
            { code: PieChartRaw.default, name: "SimplePieChart.tsx" }
        ],
        status: "in-progress"
    }
]


export {
    pieChartGroup
}