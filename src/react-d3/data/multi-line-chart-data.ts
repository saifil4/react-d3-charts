import { TChart } from 'react-d3/type';

export type TPlot = { x: string, y: number }

export type TLineChart = {
   name: string;
   plot: { x: string, y: number }[]
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
        {
            name: "Line 1",
            plot: [
                { x: "2013", y: 10 },
                { x: "2014", y: 20 },
                { x: "2015", y: 30 },
                { x: "2016", y: 40 },
                { x: "2017", y: 50 },
                { x: "2018", y: 60 },
                { x: "2019", y: 70 },
                { x: "2020", y: 80 },
                { x: "2021", y: 90 }
            ]
        },
        {
            name: "Line 2",
            plot: [
                { x: "2013", y: 20 },
                { x: "2014", y: 30 },
                { x: "2015", y: 40 },
                { x: "2016", y: 50 },
                { x: "2017", y: 60 },
                { x: "2018", y: 70 },
                { x: "2019", y: 80 },
                { x: "2020", y: 90 },
                { x: "2021", y: 100 }
            ]
        },
        {
            name: "Line 3",
            plot: [
                { x: "2013", y: 30 },
                { x: "2014", y: 40 },
                { x: "2015", y: 50 },
                { x: "2016", y: 60 },
                { x: "2017", y: 70 },
                { x: "2018", y: 80 },
                { x: "2019", y: 90 },
                { x: "2020", y: 100 },
                { x: "2021", y: 110 }
            ]
        },
        {   
            name: "Line 4",
            plot: [
                { x: "2013", y: 40 },
                { x: "2014", y: 50 },
                { x: "2015", y: 60 },
                { x: "2016", y: 70 },
                { x: "2017", y: 80 },
                { x: "2018", y: 90 },
                { x: "2019", y: 100 },
                { x: "2020", y: 110 },
                { x: "2021", y: 120 }
            ]
        }
    ]
}