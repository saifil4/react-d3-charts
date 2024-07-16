import { TChart } from "../type"

export type TTask = {
    name: string
    time: number,
    effort: number,
    impact: number
}

export const taskPriorityData: TChart<TTask> = {
    margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    },
    width: 700,
    height: 300,
    title: "Task Priortization Chart",
    data: [
        {
            "name": "Task 1",
            "time": 2.87,
            "effort": 2.16,
            "impact": 5.82
        },
        {
            "name": "Task 2",
            "time": 6.22,
            "effort": 0.51,
            "impact": 3.95
        },
        {
            "name": "Task 3",
            "time": 8.33,
            "effort": 6.12,
            "impact": 3.91
        },
        {
            "name": "Task 4",
            "time": 0.29,
            "effort": 3.06,
            "impact": 8.28
        },
        {
            "name": "Task 5",
            "time": 1.09,
            "effort": 6.86,
            "impact": 0.26
        },
        {
            "name": "Task 6",
            "time": 6.78,
            "effort": 1.24,
            "impact": 5.54
        },
        {
            "name": "Task 7",
            "time": 2.8,
            "effort": 1.23,
            "impact": 0.39
        },
        {
            "name": "Task 8",
            "time": 6.22,
            "effort": 8.18,
            "impact": 2.21
        },
        {
            "name": "Task 9",
            "time": 6.64,
            "effort": 1.27,
            "impact": 0.69
        },
        {
            "name": "Task 10",
            "time": 6.76,
            "effort": 7.8,
            "impact": 1.28
        }
    ]
}