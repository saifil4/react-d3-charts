import { TChart } from "react-d3/type"

export type TStock = {
    date: string,
    value: number
}

export const dummyStockData: TChart<TStock> = {
    margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    },
    width: 700,
    height: 250,
    title: "Dummy Stock Chart",
    data: [
        {
            "date": "2023-07-01",
            "value": 104.0
        },
        {
            "date": "2023-07-02",
            "value": 102.0
        },
        {
            "date": "2023-07-03",
            "value": 105.0
        },
        {
            "date": "2023-07-04",
            "value": 108.0
        },
        {
            "date": "2023-07-05",
            "value": 107.0
        },
        {
            "date": "2023-07-06",
            "value": 110.0
        },
        {
            "date": "2023-07-07",
            "value": 109.0
        },
        {
            "date": "2023-07-08",
            "value": 111.0
        },
        {
            "date": "2023-07-09",
            "value": 115.0
        },
        {
            "date": "2023-07-10",
            "value": 112.0
        },
        {
            "date": "2023-07-11",
            "value": 114.0
        },
        {
            "date": "2023-07-12",
            "value": 116.0
        },
        {
            "date": "2023-07-13",
            "value": 113.0
        },
        {
            "date": "2023-07-14",
            "value": 117.0
        },
        {
            "date": "2023-07-15",
            "value": 119.0
        },
        {
            "date": "2023-07-16",
            "value": 118.0
        },
        {
            "date": "2023-07-17",
            "value": 121.0
        },
        {
            "date": "2023-07-18",
            "value": 120.0
        },
        {
            "date": "2023-07-19",
            "value": 122.0
        },
        {
            "date": "2023-07-20",
            "value": 125.0
        },
        {
            "date": "2023-07-21",
            "value": 123.0
        },
        {
            "date": "2023-07-22",
            "value": 126.0
        },
        {
            "date": "2023-07-23",
            "value": 127.0
        },
        {
            "date": "2023-07-24",
            "value": 124.0
        },
        {
            "date": "2023-07-25",
            "value": 128.0
        },
        {
            "date": "2023-07-26",
            "value": 130.0
        },
        {
            "date": "2023-07-27",
            "value": 129.0
        },
        {
            "date": "2023-07-28",
            "value": 131.0
        },
        {
            "date": "2023-07-29",
            "value": 132.0
        },
        {
            "date": "2023-07-30",
            "value": 133.0
        },
        {
            "date": "2023-07-31",
            "value": 134.0
        }
    ]
}

