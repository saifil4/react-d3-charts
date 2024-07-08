
import * as d3 from "d3";
import { motion } from "framer-motion";
import { chartData, TPlot } from "react-d3/data/multi-line-chart-data";
import { Axis } from "react-d3/components/Axis";



export default function MultiLineChart() {

    const { height, width, data, margin } = chartData;
    const outerWidth = width + margin.left + margin.right;
    const outerHeight = height + margin.top + margin.bottom;
    const transform = `translate(${margin.left}px, ${margin.top}px)`;

    const color = d3.scaleOrdinal()
        .range(['#e74c3c', '#3498db', '#2ecc71', '#f1c40f']);

    const parseTime = d3.timeParse('%Y');
    const dateFormat = d3.timeFormat("%Y");

    const yDomain = d3.extent(data.map(d => d.plot).flat(), d => d.y) as Iterable<number>;
    const xDomain = d3.extent(data.map(d => d.plot).flat(), d => parseTime(d.x)) as Iterable<Date>;

    const xAxisScale = d3.scaleTime(xDomain, [0, width]);
    const yAxisScale = d3.scaleLinear(yDomain, [height, 0]);

    const xTicks = xAxisScale.ticks(10)
    const yTicks = yAxisScale.ticks(10)

    const line = d3.line<TPlot>().x(d => xAxisScale(new Date(d.x))).y(d => yAxisScale(d.y));

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    data.map((d, i) => (
                        <div style={{ display: 'flex', alignItems: 'center' }} key={i}>
                            <div style={{ height: 12, width: 24, backgroundColor: `${color(d.name)}` }}></div>
                            <span style={{marginRight: '20px', marginLeft: '5px'}}> {d.name} </span>
                        </div>
                    ))
                }
            </div>
            <ResponsiveSVG viewBox={`0 0 ${outerWidth} ${outerHeight}`}>
                <g style={{ transform: transform }}>
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
                        {data.map((d) => (
                            <>
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1 }}
                                    fill="none"
                                    stroke={color(d.name) as string}
                                    strokeWidth={2}
                                    d={line(d.plot) || undefined}
                                />
                                {d.plot.map((c, i) => (
                                    <motion.circle
                                        initial={{ r: 0 }}
                                        animate={{ r: 5 }}
                                        transition={{ duration: 1, delay: i * 1 / d.plot.length }}
                                        key={i}
                                        fill={`${color(d.name)}90`}
                                        stroke={color(d.name) as string}
                                        cx={xAxisScale(new Date(c.x))}
                                        cy={yAxisScale(c.y)} />
                                ))}
                            </>
                        ))}
                    </g>
                </g>
            </ResponsiveSVG>
        </>
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

