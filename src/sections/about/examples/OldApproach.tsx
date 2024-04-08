import { useEffect, useState } from 'react';
import * as d3 from 'd3';

type margin = {
    top: number,
    right: number,
    bottom: number,
    left: number
}

const width: number = 800, height: number = 400

const margin: margin = {
    top: 10,
    right: 30,
    bottom: 30,
    left: 60
}

type DataType = {
    date: Date | null;
    value: any;
}

const fetchData = async () => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv");
        const data = await response.text();
        const parsedData = d3.csvParse(data);
        return parsedData.map((d: any) => {
            return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
        });
    } catch (error) {
        console.error(error);
    }
}

export function ExampleLineChart() {
    const [data, setData] = useState<DataType[] | undefined>([]);

    useEffect(() => {
        fetchData().then((data) => {
            setData(data);
        })
    }, [])

    if (!data) return (<></>)
    return <Chart data={data} />
}

function Chart({ data }: { data: DataType[] }) {

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const loadGraph = async () => {

        const svg = d3.select("#my_dataviz")
            .attr("width", innerWidth + margin.left + margin.right)
            .attr("height", innerHeight + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const xDomain = d3.extent(data, (d) => { return d.date; }) as Iterable<number>;

        const x = d3.scaleTime()
            .domain(xDomain)
            .range([0, innerWidth]);
        svg.append("g")
            .attr("transform", `translate(0, ${innerHeight})`)
            .call(d3.axisBottom(x));

        const yDomain = d3.extent(data, (d) => { return +d.value; }) as Iterable<number>;

        const y = d3.scaleLinear()
            .domain(yDomain)
            .range([innerHeight, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Add the line
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line<DataType>()
                .x((d) => x(d.date as Date))
                .y((d) => y(d.value))
            )
    }

    useEffect(() => {
        loadGraph()
    }, [data])

    return (
        <svg id="my_dataviz"></svg>
    );
};

export default ExampleLineChart;
