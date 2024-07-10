import * as d3 from "d3";
import { motion } from "framer-motion";
import { chartData } from "react-d3/data/bar-chart-data";
import { Axis } from "react-d3/components/Axis";

export default function BarChart() {

    const { height, width, data, title, margin } = chartData;
    const outerWidth = width + margin.left + margin.right;
    const outerHeight = height + margin.top + margin.bottom;
    const transform = `translate(${margin.left}px, ${margin.top}px)`;

    const yDomain = d3.extent(data.map(d => d.y)) as Iterable<number>;
    const yAxisScale = d3.scaleLinear([0, d3.max(yDomain) as number], [height, 0]).nice();
    const xAxisScale = d3.scaleBand(data.map(d => d.x), [0, width]).padding(0.1);

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
                        <g>
                            <motion.rect
                                initial={{ height: 0, y: height }}
                                animate={{ height: height - yAxisScale(d.y), y: yAxisScale(d.y) }}
                                transition={{ duration: 1 }}
                                x={xAxisScale(d.x)}
                                width={xAxisScale.bandwidth()} fill="#69b3a2" />
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
