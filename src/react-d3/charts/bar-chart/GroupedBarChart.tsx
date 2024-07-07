import * as d3 from "d3";
import { motion } from "framer-motion";
import { chartData } from "react-d3/data/grouped-bar-chart-data";
import { Axis } from "react-d3/components/Axis";

export default function GroupedBarChart() {

    const { height, width, data, title, margin } = chartData;
    const outerWidth = width + margin.left + margin.right;
    const outerHeight = height + margin.top + margin.bottom;
    const transform = `translate(${margin.left}px, ${margin.top}px)`;

    const subGroups = ["param1", "param2", "param3"]

    const yStack = data.map((d) => [d.param1, d.param2, d.param3]).flat()
    const xStack = data.map((d) => d.name)

    const yAxisScale = d3.scaleLinear([0, Math.max(...yStack)], [height, 0]);
    const xAxisScale = d3.scaleBand(xStack, [0, width]).padding(0.1);

    var xSubgroup = d3.scaleBand()
        .domain(subGroups)
        .range([0, xAxisScale.bandwidth()])
        .padding(0.05)

    const xTicks = xAxisScale.domain()
    const yTicks = yAxisScale.ticks(10)

    return (
        <ResponsiveSVG viewBox={`0 0 ${outerWidth} ${outerHeight}`}>
            <g style={{ transform: transform }}>
                <text x={width / 2} dy={-20} y={0} textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</text>
                <Axis
                    orientation="bottom"
                    width={width}
                    height={height}>
                    {xTicks.map((d) => (<>
                        <Text dy={15} dx={xAxisScale.bandwidth() / 2} x={xAxisScale(d)} y={0}> {d} </Text>
                        <Line y1={0} y2={10} x1={xAxisScale(d)} x2={xAxisScale(d)} />
                    </>))}
                </Axis>
                <Axis
                    orientation="left"
                    width={width}
                    height={height}>
                    {yTicks.map((d) => (<>
                        <Text dx={-10} x={0} y={yAxisScale(d)}> {d} </Text>
                        <Line y1={yAxisScale(d)} y2={yAxisScale(d)} x1={0} x2={width} />
                    </>))}
                </Axis>
                {
                    data.map((d) => (
                        <g transform={`translate(${xAxisScale(d.name)},0)`}>
                            <motion.rect
                                initial={{ height: 0, y: height,  x: xSubgroup("param1") }}
                                animate={{ height: height - yAxisScale(d.param1), y: yAxisScale(d.param1)}}
                                transition={{ duration: 1 }}
                                width={xSubgroup.bandwidth()} 
                                fill="#69b3a2" />
                            <motion.rect
                                initial={{ height: 0, y: height,  x: xSubgroup("param2") }}
                                animate={{ height: height - yAxisScale(d.param2), y: yAxisScale(d.param2) }}
                                transition={{ duration: 1 }}
                                width={xSubgroup.bandwidth()} 
                                fill="red" />
                            <motion.rect
                                initial={{ height: 0, y: height, x: xSubgroup("param3") }}
                                animate={{ height: height - yAxisScale(d.param3), y: yAxisScale(d.param3) }}
                                transition={{ duration: 1 }}
                                width={xSubgroup.bandwidth()} 
                                fill="blue" />
                        </g>
                    ))
                }
            </g>
        </ResponsiveSVG>
    );
}


const ResponsiveSVG = (props: React.SVGAttributes<SVGSVGElement>) =>
    <svg
        viewBox={props.viewBox}
        width="100%"
        height="100%"
        preserveAspectRatio="xMinYMid meet"
        {...props}
    />

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
