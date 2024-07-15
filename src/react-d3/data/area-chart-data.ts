import { TChart } from "react-d3/type"

export type TLineChart = {
    x: string,
    y: number
}

export const chartData: TChart<TLineChart> = {
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
        { x: "2011", y: 2.4 },
        { x: "2012", y: 14 },
        { x: "2013", y: 40 },
        { x: "2014", y: 24 },
        { x: "2015", y: 60 },
        { x: "2016", y: 55 },
        { x: "2017", y: 57 },
        { x: "2018", y: 42 },
        { x: "2019", y: 60 },
    ]
}