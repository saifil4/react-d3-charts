import { TChart } from "../type"

export type TPieChart = {
    name: string,
    value: number
}

export const pieChartData: TChart<TPieChart> = {
    margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    },
    width: 450,
    height: 450,
    title: "Pie Chart",
    data: [
        { name: "A", value: 10467 },
        { name: "B", value: 6622 },
        { name: "C", value: 788 },
        { name: "D", value: 2685 },
        { name: "E", value: 4211 },
        { name: "F", value: 2304 },
        { name: "G", value: 1629 },
        { name: "H", value: 678 },
    ]
}