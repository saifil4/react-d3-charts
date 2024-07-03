import { TChart } from "./type"

export type TLineChart = {
    x: string,
    y: number
}

type TLineChartData = TChart & {
    data: TLineChart[]
}

export const lineChartData: TLineChartData = {
    margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    },
    width: 700,
    height: 250,
    title: "Line Chart",
    data: [
        { x: '2010', y: 10 },
        { x: "2011", y: 20 },
        { x: "2012", y: 30 },
        { x: "2013", y: 40 },
        { x: "2014", y: 50 },
        { x: "2015", y: 60 },
        { x: "2016", y: 70 },
        { x: "2017", y: 80 },
        { x: "2018", y: 90 },
        { x: "2019", y: 100 },
    ]
}