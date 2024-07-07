import { TChartAttributes } from "react-d3/type"

export type TStackedBarChart = {
    name: string,
    param1: number,
    param2: number,
    param3: number
}

type TStackedBarChartData = TChartAttributes & {
    data: TStackedBarChart[]
}

export const chartData: TStackedBarChartData = {
    margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    },
    width: 700,
    height: 250,
    title: "Stacked Bar Chart",
    data: [
        {
            name: "Bar 1",
            param1: 10,
            param2: 20,
            param3: 30
        },
        {
            name: "Bar 2",
            param1: 20,
            param2: 30,
            param3: 40
        },
        {
            name: "Bar 3",
            param1: 30,
            param2: 40,
            param3: 50
        },
        {
            name: "Bar 4",
            param1: 40,
            param2: 50,
            param3: 60
        },
        {
            name: "Bar 5",
            param1: 50,
            param2: 60,
            param3: 70
        },
        {
            name: "Bar 6",
            param1: 60,
            param2: 70,
            param3: 80
        },
        {
            name: "Bar 7",
            param1: 70,
            param2: 80,
            param3: 90
        },
        {
            name: "Bar 8",
            param1: 80,
            param2: 90,
            param3: 100
        },
        {
            name: "Bar 9",
            param1: 90,
            param2: 100,
            param3: 110
        },
        {
            name: "Bar 10",
            param1: 100,
            param2: 110,
            param3: 120
        }
    ]
}
