
import * as d3 from "d3";
import { useEffect, useState } from "react";

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

export function ExampleLineChartNew() {
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

    const xDomain = d3.extent(data, (d) => { return d.date; }) as Iterable<number>;
    const yDomain = d3.extent(data, (d) => { return +d.value; }) as Iterable<number>;

    const x = d3.scaleTime(xDomain, [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = x.ticks(10), yTicks = y.ticks(10);

    const line = d3.line<DataType>().x((d) => x(d?.date as Date)).y((d) => y(d.value));

    const format = d3.format(",");

    return (
        <svg width={width} height={height}>
            <g style={{ transform: `translate(${margin.left}px, ${margin.top}px)` }}>
                <g style={{ transform: `translate(0px, ${innerHeight}px)` }}>
                    <AxisPath d={`M0,0L${innerWidth},0`} />
                    <g>
                        {xTicks.map((d) => (<>
                            <Text dy={10} x={x(d)} y={0}> {new Date(d).getFullYear()} </Text>
                            <Line y1={5} y2={0} x1={x(d)} x2={x(d)} />
                        </>))}
                    </g>
                </g>
                <g>
                    <AxisPath d={`M0,0L0,${innerHeight}`} />
                    <g>
                        {yTicks.map((d) => (<>
                            <Text textAnchor="end" dx={-10} x={0} y={y(d)}> {format(d)} </Text>
                            <Line y1={y(d)} y2={y(d)} x1={0} x2={-5} />
                        </>))}
                    </g>
                </g>
                <path
                    fill="none"
                    stroke="blue"
                    strokeWidth={1}
                    d={line(data) || undefined}
                />
            </g>
        </svg>
    );
}

const Text = (props: React.SVGAttributes<SVGTextElement>) =>
    <text
        style={{ fontSize: "10px" }}
        alignmentBaseline="middle"
        textAnchor='middle'
        {...props}
    >
        {props.children}
    </text>

const Line = (props: React.SVGAttributes<SVGLineElement>) =>
    <line
        stroke="black"
        strokeWidth={1}
        {...props}
    />

const AxisPath = (props: React.SVGAttributes<SVGPathElement>) =>
    <path
        stroke="black"
        strokeWidth={1}
        {...props} />

