export type TChartSection = {
    group: 'line-chart' | 'bar-chart' | 'pie-chart' | 'other-chart'
    heading: string;
    component: React.FC<any>,
    files: { code: string, name: string }[],
    status: "available" | "in-progress"
}
