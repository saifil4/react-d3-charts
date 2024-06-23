export const width = 450,
    height = 450,
    margin = 40;

export type EnergySource = {
    source: string,
    value: number
}

export const data: EnergySource[] = [
    { source: "Coal", value: 10467 },
    { source: "Gas", value: 6622 },
    { source: "Oil", value: 788 },
    { source: "Nuclear", value: 2685 },
    { source: "Hydro Power", value: 4211 },
    { source: "Wind", value: 2304 },
    { source: "Solar", value: 1629 },
    { source: "Bio Energy", value: 678 },
    { source: "Other Renewables", value: 89 }
]