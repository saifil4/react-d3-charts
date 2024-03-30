
import * as d3 from "d3";
import { motion } from "framer-motion";
import { LineChartData, margin, width, height, MultiLineChartData } from "./data";


export function LineChart() {

    const data = MultiLineChartData || [];

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;



    const yDomain = d3.extent(data.flat()) as Iterable<number>;

    const x = d3.scaleLinear([0, 9], [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = x.ticks(10)
    const yTicks = y.ticks(10)

    const line = d3.line((d, i) => x(i), y).curve(d3.curveMonotoneX);
    const color = "black"

    return (
        <svg width={width} height={height}>
            <g style={{ transform: "translate(20px, 6px)" }}>
                <g style={{ transform: `translate(0px, ${innerHeight}px)` }}>
                    <path stroke={color} strokeWidth={1} opacity="0.4" d={`M0,${0}L${innerWidth},${0}`} />
                    <g>
                        {
                            xTicks.map((d, i) => (
                                <>
                                    {/* <line key={i} y1={0} y2={5} x1={x(d)} x2={x(d)} stroke={color} /> */}
                                    <text style={{ fontSize: "10px" }} key={i} y={0} x={x(d)} dy="20" textAnchor='middle'>  {d} </text>
                                    <line key={i} y1={0} y2={-innerHeight} x1={x(d)} x2={x(d)} stroke={color} opacity="0.2" />
                                </>
                            ))}
                    </g>
                </g>
                <g>
                    <path stroke={color} strokeWidth={1} opacity="0.4" d={`M0,${innerHeight}L${0},${0}`} />
                    <g>
                        {
                            yTicks.map((d, i) => (
                                <>
                                    {/* <line key={i} y1={y(d)} y2={y(d)} x1={-5} x2={0} stroke={color} /> */}
                                    <text style={{ fontSize: "10px" }} key={d} y={y(d)} x={0} dx="-10" textAnchor='middle' alignmentBaseline="middle">  {i} </text>
                                    <line key={i} y1={y(d)} y2={y(d)} x1={innerWidth} x2={0} stroke={color} opacity="0.2" />
                                </>
                            ))}
                    </g>
                </g>
                {
                    data.map((d, i) => (
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                            fill="none"
                            stroke="#ff6384"
                            strokeWidth={2}
                            d={line(d) || undefined}
                        />
                    ))
                }
                <g fill="white" stroke="currentColor" strokeWidth={1.5}>
                    {

                        data.map((d) => (
                            d.map((c, i) => (
                                <motion.circle
                                    initial={{ r: 0 }}
                                    animate={{ r: 5 }}
                                    transition={{ duration: 1, delay: i / 10 }}
                                    key={i}
                                    fill="#ff638490"
                                    stroke="#ff6384"
                                    cx={x(i)}
                                    cy={y(c)} />
                            ))
                        ))
                    }
                </g>
            </g>
        </svg>
    );
}