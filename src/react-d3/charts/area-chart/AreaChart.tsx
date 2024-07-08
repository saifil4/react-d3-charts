
import * as d3 from "d3";
import { motion } from "framer-motion";
import { chartData, TLineChart } from "react-d3/data/area-chart-data";
import { Axis } from "react-d3/components/Axis";


export default function AreaChart() {

    const { height, width, data, title, margin } = chartData;
    const outerWidth = width + margin.left + margin.right;
    const outerHeight = height + margin.top + margin.bottom;
    const transform = `translate(${margin.left}px, ${margin.top}px)`;


    const parseTime = d3.timeParse('%Y');
    const dateFormat = d3.timeFormat("%Y");

    const yDomain = d3.extent(data, d => d.y) as Iterable<number>;
    const xDomain = d3.extent(data, d => parseTime(d.x)) as Iterable<Date>;

    const xAxisScale = d3.scaleTime(xDomain, [0, width]);
    const yAxisScale = d3.scaleLinear(yDomain, [height, 0]);


    const xTicks = xAxisScale.ticks(10)
    const yTicks = yAxisScale.ticks(10)


    const area = d3.area<TLineChart>()
        .x((d) => xAxisScale(new Date(d.x)))
        .y0(yAxisScale(d3.min(yDomain) as number))
        .y1((d) => yAxisScale(d.y)); 

    return (
        <ResponsiveSVG viewBox={`0 0 ${outerWidth} ${outerHeight}`}>
            <g style={{ transform: transform }}>
                <text x={width / 2} dy={-20} y={0} textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</text>
                <Axis
                    orientation="bottom"
                    width={width}
                    height={height}>
                    {xTicks.map((d) => (<>
                        <Text dy={15} x={xAxisScale(d)} y={0}> {dateFormat(d)} </Text>
                        <Line y1={0} y2={-height} x1={xAxisScale(d)} x2={xAxisScale(d)} />
                    </>))}
                </Axis>
                <Axis
                    orientation="left"
                    width={width}
                    height={height}>
                    {yTicks.map((d) => (<>
                        <Text dx={-10} x={0} y={yAxisScale(d)}> {d} </Text>
                        <Line y1={yAxisScale(d)} y2={yAxisScale(d)} x1={width} x2={0} />
                    </>))}
                </Axis>
                <g>
                    <motion.path
                        initial={{ d: area(data.map(d => ({...d, y: d3.min(yDomain) as number}))) || undefined }}
                        animate={{ d: area(data.map(d => d)) || undefined }}
                        transition={{ duration: 1 }}
                        fill="#ff6384"
                    />
                </g>
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
