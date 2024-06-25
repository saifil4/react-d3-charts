import { lineChartGroup } from "./line-chart-list";
import { otherChartGroup } from "./other-chart-list";
import { areaChartGroup } from "./area-chart-list";
import { pieChartGroup } from "./pie-chart-list";
import { barChartGroup } from "./bar-chart-list";
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

const sectionList: Group[] = [
    lineChartGroup,
    barChartGroup,
    areaChartGroup,
    pieChartGroup,
    otherChartGroup
]

export default sectionList;

