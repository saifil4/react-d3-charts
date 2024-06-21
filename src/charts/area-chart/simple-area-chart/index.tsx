
import * as d3 from "d3";
import { motion } from "framer-motion";
import { height, margin, width, data } from "./config";


export default function SimpleAreaChart() {

    const areaChartData = data

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = Array.from(d3.extent(areaChartData) as Iterable<number>);

    const xScale = d3.scaleLinear([0, 9], [0, innerWidth]);
    const yScale = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = xScale.ticks(10)
    const yTicks = yScale.ticks(10)

    const area = d3.area<[number, number]>()
        .x((_, i) => xScale(i))
        .y0(yScale(yDomain[0]))
        .y1((d: [number, number]) => yScale(d[1]));

    return (
        <svg width={width} height={height}>
            <g style={{ transform: `translate(${margin.left}px, ${margin.top}px)` }}>
                <g style={{ transform: `translate(0px, ${innerHeight}px)` }}>
                    <AxisPath d={`M0,0L${innerWidth},0`} />
                    <g>
                        {xTicks.map((d) => (<>
                            <Text dy={15} x={xScale(d)} y={0}> {d} </Text>
                            <Line y1={0} y2={-innerHeight} x1={xScale(d)} x2={xScale(d)} />
                        </>))}
                    </g>
                </g>
                <g>
                    <AxisPath d={`M0,0L0,${innerHeight}`} />
                    <g>
                        {yTicks.map((d) => (<>
                            <Text dx={-10} x={0} y={yScale(d)}> {d} </Text>
                            <Line y1={yScale(d)} y2={yScale(d)} x1={innerWidth} x2={0} />
                        </>))}
                    </g>
                </g>
                <g>
                    <motion.path
                        initial={{ d: area(areaChartData.map((d, i) => [i, 0])) || undefined }}
                        animate={{ d: area(areaChartData.map((d, i) => [i, d])) || undefined }}
                        transition={{ duration: 1 }}
                        fill="#ff6384"

                    // d={area(areaChartData.map((d, i) => [i,d])) || undefined}
                    />
                </g>
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
        opacity={0.2}
        {...props}
    />

const AxisPath = (props: React.SVGAttributes<SVGPathElement>) =>
    <path
        stroke="black"
        strokeWidth={1}
        opacity={0.2}
        {...props} />
