import About from "./panels/About";
import GettingStarted from "./panels/GettingStarted";
import LineChartPanel from "./panels/LineChartPanel";
import PieChart from "./charts/piechart";
import Axis from "./charts/axis";

type Panel = {
    name: string,
    component: React.FC<any>,
}

type Group = {
    name: string | null,
    panels: Panel[]
}

export const PanelData: Group[] = [
    {
        name: null,
        panels: [
            {
                name: "About",
                component: About
            },
            {
                name: "Getting Started",
                component: GettingStarted
            }
        ]
    },

    {
        name: "Line Charts",
        panels: [
            {
                name: "Simple Line Chart",
                component: LineChartPanel
            }
        ]
    },
    {
        name: "Pie Charts",
        panels: [
            {
                name: "Simple Pie Chart",
                component: PieChart
            }
        ]
    },
    {
        name: "Other Charts",
        panels: [
            {
                name: "Axis",
                component: Axis
            }
        ]
    }
]