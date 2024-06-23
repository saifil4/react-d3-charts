import { lineChartGroup } from "charts/line-chart/line-chart-list";
import { spiderChartGroup } from "charts/spider-chart/spider-chart-list";
import { areaChartGroup } from "charts/area-chart/area-chart-list";
import { pieChartGroup } from "charts/pie-chart/pie-chart-list";
import { barChartGroup } from "charts/bar-chart/bar-chart-list";
import { Group } from "types/section.type";


// grouped Bar Chart
// stacked Bar Chart
// bubble Chart
// scatter Chart
// pie chart
// doughnut chart
// multi doughnut chart
// radar chart
// multi area chart



export const chartList: Group[] = [
    lineChartGroup,
    barChartGroup,
    areaChartGroup,
    pieChartGroup,
    spiderChartGroup
]