import { TChart } from "../type"

export type TBubbleChart = {
    x: number,
    y: number,
    size: number
}

export const bubbleChartData: TChart<TBubbleChart> = {
    margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    },
    width: 700,
    height: 300,
    title: "Line Chart",
    data: [
        { x: 500, y: 43, size: 10 },
        { x: 350, y: 15, size: 3 },
        { x: 567, y: 25, size: 4 },
        { x: 786, y: 87, size: 5 },
        { x: 456, y: 78, size: 5 },
        { x: 32, y: 12, size: 4 },
        { x: 345, y: 89, size: 2 },
        { x: 456, y: 35, size: 9.5 },
        { x: 345, y: 45, size: 6.5 },
        { x: 123, y: 67, size: 7 },
        { x: 567, y: 18, size: 9 },
        { x: 120, y: 23, size: 4.5 },
        { x: 50, y: 12, size: 5 },
    ]
}