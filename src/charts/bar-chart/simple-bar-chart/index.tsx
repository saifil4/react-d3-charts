import * as d3 from "d3";
import { motion } from "framer-motion";
import { BarChartData, margin, height, width } from "./config";

export default function SimpleBarChart() {

    const data = BarChartData || []


    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data.map(d => d.Value)) as Iterable<number>;
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);
    const x = d3.scaleBand(data.map(d => d.Country), [0, innerWidth]).padding(0.1);

    const xTicks = x.domain()
    const yTicks = y.ticks(10)

    return (
        <svg width={width} height={height}>
            <g style={{ transform: `translate(${margin.left}px, ${margin.top}px)` }}>
                <g style={{ transform: `translate(0px, ${innerHeight}px)` }}>
                    <AxisPath d={`M0,0L${innerWidth},0`} />
                    <g>
                        {xTicks.map((d) => (<>
                            <Text dy={15} dx={x.bandwidth() / 2} x={x(d)} y={0}> {d} </Text>
                            <Line y1={0} y2={10} x1={x(d)} x2={x(d)} />
                        </>))}
                    </g>
                </g>
                <g>
                    <AxisPath d={`M0,0L0,${innerHeight}`} />
                    <g>
                        {yTicks.map((d) => (<>
                            <Text dx={-25} x={0} y={y(d)}> {d} </Text>
                            <Line y1={y(d)} y2={y(d)} x1={-10} x2={0} />
                        </>))}
                    </g>
                </g>
                {
                    data.map((d) => (
                        <g>
                            <motion.rect
                                initial={{ height: 0, y: innerHeight }}
                                animate={{ height: innerHeight - y(d.Value), y: y(d.Value) }}
                                transition={{ duration: 1 }}
                                x={x(d.Country)}
                                width={x.bandwidth()} fill="#69b3a2" />
                        </g>
                    ))
                }
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