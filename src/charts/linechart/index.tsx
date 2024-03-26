import * as d3 from "d3";
import { Axis } from "../../components/Axis";
import { motion } from "framer-motion";
import { LineChartData, margin, width, height } from "./data";


export function LinePlot() {

    const data = LineChartData || [];

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data) as Iterable<number>;
    const x = d3.scaleLinear([0, data.length - 1], [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const line = d3.line((d, i) => x(i), y);

    return (
        <svg width={width} height={height}>
            <g style={{ transform: "translate(20px, 6px)" }}>
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    d={line(data) || undefined}
                />
                <g fill="white" stroke="currentColor" strokeWidth={1.5}>
                    {
                        data.map((d, i) => (
                            <motion.circle
                                initial={{ r: 0 }}
                                animate={{ r: 2.5 }}
                                transition={{ duration: 1, delay: i / 10 }}
                                key={i}
                                cx={x(i)}
                                cy={y(d)} />
                        ))
                    }
                </g>
                <Axis
                    axis={d3.axisLeft(y).ticks(5)}
                    axisPos="axisLeft"
                    margin={margin}
                    height={innerHeight} />
                <Axis
                    axis={d3.axisBottom(x).ticks(5)}
                    axisPos="axisBottom"
                    margin={margin}
                    height={innerHeight} />
            </g>
        </svg>
    );
}