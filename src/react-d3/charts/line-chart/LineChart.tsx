
import * as d3 from "d3";
import { motion } from "framer-motion";
import { Axis } from "react-d3/components/Axis";
import { lineChartData, TLineChart } from "react-d3/data/line-chart-data";
import { useDimensions } from "react-d3/hooks/useDimensions";

export default function LineChart() {

    const { height, width, data, title, margin } = lineChartData;
    const { innerHeight, innerWidth, transform } = useDimensions(lineChartData);

    const parseTime = d3.timeParse('%Y');
    const dateFormat = d3.timeFormat("%Y");

    const yDomain = d3.extent(data, d => d.y) as Iterable<number>;
    const xDomain = d3.extent(data, d => parseTime(d.x)) as Iterable<Date>;

    const x = d3.scaleTime(xDomain, [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = x.ticks(10)
    const yTicks = y.ticks(10)

    const line = d3.line<TLineChart>().x(d => x(new Date(d.x))).y(d => y(d.y));

    return (
        <svg width={width} height={height}>
            <g style={{ transform: transform }}>
                <text x={innerWidth / 2} dy={-5} y={height - margin.bottom} textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</text>
                <Axis
                    orientation="bottom"
                    width={innerWidth}
                    height={innerHeight}>
                    {xTicks.map((d) => (<>
                        <Text dy={15} x={x(d)} y={0}> {dateFormat(d)} </Text>
                        <Line y1={0} y2={-innerHeight} x1={x(d)} x2={x(d)} />
                    </>))}
                </Axis>
                <Axis
                    orientation="left"
                    width={innerWidth}
                    height={innerHeight}>
                    {yTicks.map((d) => (<>
                        <Text dx={-10} x={0} y={y(d)}> {d} </Text>
                        <Line y1={y(d)} y2={y(d)} x1={innerWidth} x2={0} />
                    </>))}
                </Axis>
                <g name="line-path">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                        fill="none"
                        stroke="#ff6384"
                        strokeWidth={2}
                        d={line(data) || undefined}
                    />
                    {data.map((c, i) => (
                        <motion.circle
                            key={i}
                            initial={{ r: 0 }}
                            animate={{ r: 5 }}
                            transition={{ duration: 1, delay: i * 1 / data.length }}
                            fill="#ff638490"
                            stroke="#ff6384"
                            cx={x(new Date(c.x))}
                            cy={y(c.y)} />
                    ))}
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

