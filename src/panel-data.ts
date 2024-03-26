import { LinePlot } from "./charts/linechart";
import { BarChart } from "./charts/barchart";
import About from "./panels/About";
import GettingStarted from "./panels/GettingStarted";
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
        name: "Charts",
        panels: [
            {
                name: "LinePlot",
                component: LinePlot
            },
            {
                name: "BarChart",
                component: BarChart
            }
        ]
    }
]