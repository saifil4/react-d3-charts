import { lineChartGroup } from "charts/line-chart";
import { Group } from "types/section.type";
import { spiderChartGroup } from "charts/spider-chart";
import { areaChartGroup } from "charts/area-chart";

import {
    barChartGroup
} from "charts/bar-chart";


export const sectionList: Group[] = [
    lineChartGroup,
    barChartGroup,
    areaChartGroup,
    spiderChartGroup
]