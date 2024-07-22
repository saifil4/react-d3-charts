import PieChart from "react-d3/charts/pie-chart/PieChart"
import * as PieChartRaw from "react-d3/charts/pie-chart/PieChart?raw"
import * as pieChartDataRaw from "react-d3/data/pie-chart-data?raw"
import { TChartSection } from "types"

const pieChartGroup: TChartSection[] = [
    {
        group: 'pie-chart',
        heading: "Pie Chart",
        component: PieChart,
        files: [
            { code: PieChartRaw.default, name: "PieChart.tsx" },
            { code: pieChartDataRaw.default, name: "pie-chart-data.ts" }
        ],
        status: "available"
    }
]


export {
    pieChartGroup
}