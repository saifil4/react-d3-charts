import { lineChartGroup } from "./line-chart-list";
import { otherChartGroup } from "./other-chart-list";
// import { areaChartGroup } from "./area-chart-list";
import { pieChartGroup } from "./pie-chart-list";
import { barChartGroup } from "./bar-chart-list";
import { TChartSection } from "types";

const sectionList: TChartSection[] = [
    ...lineChartGroup,
    ...barChartGroup,
    ...pieChartGroup,
    ...otherChartGroup
]

export default sectionList;

