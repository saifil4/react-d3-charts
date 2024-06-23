import { lineChartGroup } from "charts/line-chart";
import { Group } from "types/section.type";
import { spiderChartGroup } from "charts/spider-chart";
import { areaChartGroup } from "charts/area-chart";
import { pieChartGroup } from "charts/pie-chart";

import {
    barChartGroup
} from "charts/bar-chart";

// grouped Bar Chart
// stacked Bar Chart
// negative Bar Chart
// bubble Chart
// bar line combo chart
// pie chart
// doughnut chart
// multi doughnut chart
// radar chart
// multi area chart



export const sectionList: Group[] = [
    lineChartGroup,
    barChartGroup,
    areaChartGroup,
    pieChartGroup,
    spiderChartGroup
]