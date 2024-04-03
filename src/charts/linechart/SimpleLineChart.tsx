
import * as d3 from "d3";
import { motion } from "framer-motion";

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


export function SimpleLineChart() {

    const data = [1, 2.3, 3.9, 4, 5.1, 2.3, 7, 8, 9, 10];

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data) as Iterable<number>;

    const x = d3.scaleLinear([0, 9], [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = x.ticks(10)
    const yTicks = y.ticks(10)

    const line = d3.line((_, i) => x(i), y).curve(d3.curveMonotoneX);

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
                <g>
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
                            initial={{ r: 0 }}
                            animate={{ r: 5 }}
                            transition={{ duration: 1, delay: i * 1 / data.length }}
                            key={i}
                            fill="#ff638490"
                            stroke="#ff6384"
                            cx={x(i)}
                            cy={y(c)} />
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

const AxisPath = (props: React.SVGAttributes<SVGPathElement>) =>
    <path
        stroke="black"
        strokeWidth={1}
        opacity={0.2}
        {...props} />
