
import * as d3 from "d3";
import { motion } from "framer-motion";
import { margin, width, height, LineChartData } from "./data";
import { useState } from "react";


export function LineChartWithHover() {

    const [xCood, setXCood] = useState(0);
    const [isXVisible, setIsXVisible] = useState(false);

    const data = LineChartData || [];

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data.flat()) as Iterable<number>;

    const x = d3.scaleLinear([0, 9], [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = x.ticks(10)
    const yTicks = y.ticks(10)

    const line = d3.line((d, i) => x(i), y);
    const color = "black"

    const handleMouseMove = (event: any) => {
        const [x_cord, y_cord] = d3.pointer(event);
        const ratio = x_cord / innerWidth;
        const current_year = 0 + Math.round(ratio * (9 - 0));
        console.log(current_year);
        setXCood(x(current_year));
        // const cnt = data.find(d => d.year === current_year).cnt;
        // mouse_g.attr('transform', `translate(${x(current_year)},${0})`);
        // mouse_g.select('text').text(`year: ${current_year}, ${cnt}/${cnt_sum} papers`)
        //     .attr('text-anchor', current_year < (min_year + max_year) / 2 ? "start" : "end");
        // mouse_g.select('circle').attr('cy', y(cnt));
    }

    return (
        <svg width={width} height={height}>
            <g style={{ transform: "translate(20px, 6px)" }}>
                <g style={{ transform: `translate(0px, ${innerHeight}px)` }}>
                    <path
                        stroke={color}
                        strokeWidth={1}
                        opacity="0.4"
                        d={`M0,${0}L${innerWidth},${0}`} />
                    <g>
                        {xTicks.map((d, i) => (
                            <>
                                <text
                                    key={'text' + i}
                                    style={{ fontSize: "10px" }}
                                    y={0}
                                    x={x(d)}
                                    dy="20"
                                    textAnchor='middle'>
                                    {d}
                                </text>
                                <line
                                    key={'line' + i}
                                    y1={0}
                                    y2={-innerHeight}
                                    x1={x(d)}
                                    x2={x(d)}
                                    stroke={color}
                                    opacity="0.2" />
                            </>
                        ))}
                    </g>
                </g>
                <g>
                    <path
                        stroke={color}
                        strokeWidth={1}
                        opacity="0.4"
                        d={`M0,${innerHeight}L${0},${0}`} />
                    <g>
                        {yTicks.map((d, i) => (
                            <>
                                <text
                                    style={{ fontSize: "10px" }}
                                    key={d} y={y(d)}
                                    x={0}
                                    dx="-10"
                                    textAnchor='middle'
                                    alignmentBaseline="middle">
                                    {i}
                                </text>
                                <line
                                    key={i}
                                    y1={y(d)}
                                    y2={y(d)}
                                    x1={innerWidth}
                                    x2={0}
                                    stroke={color}
                                    opacity="0.2" />
                            </>
                        ))}
                    </g>
                </g>

                {
                    isXVisible &&
                    <motion.line
                        initial={{ x1: 0, x2: 0 }}
                        animate={{ x1: xCood, x2: xCood }}
                        transition={{ duration: 0.3, ease: "easeInOut"}}
                        y1={0} y2={innerHeight} stroke="black" />
                }

                <g
                    onMouseMove={handleMouseMove}
                    onMouseOver={() => setIsXVisible(true)}
                    onMouseOut={() => setIsXVisible(false)}>
                    <rect
                        width={innerWidth}
                        height={innerHeight}
                        style={{ cursor: "pointer" }}
                        fill="transparent"
                    />
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
                </g>
            </g>
        </svg>
    );
}