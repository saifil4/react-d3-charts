import { lineChartGroup } from "react-d3/charts/line-chart/line-chart-list";
import { otherChartGroup } from "react-d3/charts/other-chart/other-chart-list";
import { areaChartGroup } from "react-d3/charts/area-chart/area-chart-list";
import { pieChartGroup } from "react-d3/charts/pie-chart/pie-chart-list";
import { barChartGroup } from "react-d3/charts/bar-chart/bar-chart-list";
import { Group } from "react-d3/types/section.type";


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
    otherChartGroup
]