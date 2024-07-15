import { TChart } from 'react-d3/type';

export type TPlot = { x: string, y: number }

export type TRevenuePlot = {
    month: string, value: number
}

type TRevenue = {
    name: string;
    plot: TRevenuePlot[]
}

export const revenueData: TChart<TRevenue>  = {
    margin: {
        top: 50,
        right: 60,
        bottom: 20,
        left: 60
    },
    width: 700,
    height: 250,
    title: "Dummy Revenue Chart",
    data: [
        {
            "name": "Company A",
            "plot": [
                { "month": "January", "value": 50000 },
                { "month": "February", "value": 55000 },
                { "month": "March", "value": 60000 },
                { "month": "April", "value": 65000 },
                { "month": "May", "value": 70000 },
                { "month": "June", "value": 75000 },
                { "month": "July", "value": 80000 },
                { "month": "August", "value": 85000 },
                { "month": "September", "value": 90000 },
                { "month": "October", "value": 95000 },
                { "month": "November", "value": 100000 },
                { "month": "December", "value": 105000 }
            ]
        },
        {
            "name": "Company B",
            "plot": [
                { "month": "January", "value": 60000 },
                { "month": "February", "value": 63000 },
                { "month": "March", "value": 66000 },
                { "month": "April", "value": 69000 },
                { "month": "May", "value": 72000 },
                { "month": "June", "value": 75000 },
                { "month": "July", "value": 78000 },
                { "month": "August", "value": 81000 },
                { "month": "September", "value": 84000 },
                { "month": "October", "value": 87000 },
                { "month": "November", "value": 90000 },
                { "month": "December", "value": 93000 }
            ]
        },
        {
            "name": "Company C",
            "plot": [
                { "month": "January", "value": 45000 },
                { "month": "February", "value": 48000 },
                { "month": "March", "value": 51000 },
                { "month": "April", "value": 54000 },
                { "month": "May", "value": 57000 },
                { "month": "June", "value": 60000 },
                { "month": "July", "value": 63000 },
                { "month": "August", "value": 66000 },
                { "month": "September", "value": 69000 },
                { "month": "October", "value": 72000 },
                { "month": "November", "value": 75000 },
                { "month": "December", "value": 78000 }
            ]
        }
    ]

}




