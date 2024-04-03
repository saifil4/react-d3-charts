
import * as d3 from "d3";
import { motion } from "framer-motion";
import { useState } from "react";

type margin = {
    top: number,
    right: number,
    bottom: number,
    left: number
}

const width: number = 800, height: number = 400

const margin: margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
}


export function LineChartWithHover() {

    const [xCood, setXCood] = useState(0);
    const [isXVisible, setIsXVisible] = useState(false);

    const data = [1, 2.3, 3.9, 4, 5.1, 2.3, 7, 8, 9, 10];

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data) as Iterable<number>;

    const x = d3.scaleLinear([0, 9], [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = x.ticks(10)
    const yTicks = y.ticks(10)

    const line = d3.line((_, i) => x(i), y);

    const handleMouseMove = (event: any) => {
        // const [x_cord, y_cord] = d3.pointer(event);
        const [x_cord] = d3.pointer(event);
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
            <g style={{ transform: `translate(${margin.left}px, ${margin.top}px)` }}>
                <g style={{ transform: `translate(0px, ${innerHeight}px)` }}>
                    <AxisPath d={`M0,0L${innerWidth},0`} />
                    <g>
                        {xTicks.map((d) => (<>
                            <Text dy={15} x={x(d)} y={0}> {d} </Text>
                            <Line y1={0} y2={-innerHeight} x1={x(d)} x2={x(d)} />
                        </>))}
                    </g>
                </g>
                <g>
                    <AxisPath d={`M0,0L0,${innerHeight}`} />
                    <g>
                        {yTicks.map((d) => (<>
                            <Text dx={-10} x={0} y={y(d)}> {d} </Text>
                            <Line y1={y(d)} y2={y(d)} x1={innerWidth} x2={0} />
                        </>))}
                    </g>
                </g>

                {
                    isXVisible &&
                    <motion.line
                        initial={{ x1: 0, x2: 0 }}
                        animate={{ x1: xCood, x2: xCood }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                        fill="none"
                        stroke="#ff6384"
                        strokeWidth={2}
                        d={line(data) || undefined}
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
