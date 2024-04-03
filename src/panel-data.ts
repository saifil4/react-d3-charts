import { SimpleLineChart } from "./charts/linechart/SimpleLineChart";
import { LineChartWithHover } from "./charts/linechart/LineChartWithHover";
import { MultiLineChart } from "./charts/linechart/MultiLineChart";
// import PieChart from "./charts/piechart";
import { BarChart } from "./charts/barchart";

type Panel = {
    heading: string;
    component: React.FC<any>,
    code: string;
}

type Group = {
    name: string | null,
    panels: Panel[]
}

export const PanelData: Group[] = [
    {
        name: "Line Charts",
        panels: [
            {
                heading: "Simple Line Chart",
                component: SimpleLineChart,
                code: `hello`
               
            },
            {
                heading: "Line Chart with Hover",
                component: LineChartWithHover,
                code: `hello`
            },
            {
                heading: "Multi Line Chart",
                component: MultiLineChart,
                code: `hello`
            }
        ]
    },
    {
        name: "Bar Charts",
        panels: [
            {
                heading: "Simple Bar Chart",
                component: BarChart,
                code: `hello`
            }
        ]
    },
    // {
    //     name: "Pie Charts",
    //     panels: [
    //         {
    //             heading: "Simple Pie Chart",
    //             component: PieChart,
    //             code: `hello`
    //         }
    //     ]
    // }
]