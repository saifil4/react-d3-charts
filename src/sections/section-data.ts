import SpiderChart from "charts/spider-chart/simple-spider-chart";
import { lineChartGroup } from "charts/line-chart";
import { Group } from "types/section.type";
import { spiderChartGroup } from "charts/spider-chart";

import {
    barChartGroup
} from "charts/bar-chart";


export const SectionData: Group[] = [

    lineChartGroup,
    barChartGroup,
    spiderChartGroup
]