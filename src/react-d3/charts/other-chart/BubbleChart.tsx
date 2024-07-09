
import * as d3 from "d3";
import { motion } from "framer-motion";
import { Axis } from "react-d3/components/Axis";
import { bubbleChartData, TBubbleChart } from "react-d3/data/bubble-chart-data";

export default function BubbleChart() {

    const { height, width, data, title, margin } = bubbleChartData;
    const outerWidth = width + margin.left + margin.right;
    const outerHeight = height + margin.top + margin.bottom;
    const transform = `translate(${margin.left}px, ${margin.top}px)`;

    const yDomain = d3.extent(data, d => d.y) as Iterable<number>;
    const xDomain = d3.extent(data, d => d.x) as Iterable<number>;
    const zDomain = d3.extent(data, d => d.size) as Iterable<number>;

    const xAxisScale = d3.scaleLinear(xDomain, [0, width]).nice();
    const yAxisScale = d3.scaleLinear(yDomain, [height, 0]).nice();
    const zAxisScale = d3.scaleLinear(zDomain, [5, 25]);

    return (
        <ResponsiveSVG viewBox={`0 0 ${outerWidth} ${outerHeight}`}>
            <g style={{ transform: transform }}>
                {/* <text x={width / 2} dy={-5} y={height - margin.bottom} textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</text> */}
                <Axis
                    orientation="bottom"
                    width={width}
                    height={height}>
                    {xAxisScale.ticks().map((d) => (<>
                        <Text dy={15} x={xAxisScale(d)} y={0}> {d} </Text>
                        <Line y1={0} y2={-height} x1={xAxisScale(d)} x2={xAxisScale(d)} />
                    </>))}
                </Axis>
                <Axis
                    orientation="left"
                    width={width}
                    height={height}>
                    {yAxisScale.ticks().map((d) => (<>
                        <Text dx={-10} x={0} y={yAxisScale(d)}> {d} </Text>
                        <Line y1={yAxisScale(d)} y2={yAxisScale(d)} x1={width} x2={0} />
                    </>))}
                </Axis>
                <g name="line-path">

                    {data.map((c, i) => (
                        <motion.circle
                            key={i}
                            initial={{ r: 0 }}
                            animate={{ r: zAxisScale(c.size) }}
                            transition={{ duration: 1, delay: i * 1 / data.length }}
                            fill="#ff638490"
                            stroke="#ff6384"
                            cx={xAxisScale(new Date(c.x))}
                            cy={yAxisScale(c.y)} />
                    ))}
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

