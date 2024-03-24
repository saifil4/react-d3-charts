import * as d3 from "d3";
import { Axis } from "../components/Axis";
import { motion } from "framer-motion";

type margin = {
    top: number,
    right: number,
    bottom: number,
    left: number
}

type BarPlotProps = {
    data?: Array<any>,
    margin: margin,
    height: number,
    width: number
}

export function BarChart({ data, margin, height, width }: BarPlotProps) {

    if (!data) {
        data = [];
    }

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data.map(d => d.Value)) as Iterable<number>;
    console.log(yDomain);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);


    const xBand = d3.scaleBand(data.map(d => d.Country), [0, innerWidth]).padding(0.1);

    const axis = d3.scaleLinear(yDomain, [innerHeight, 0]);


    return (
        <svg width={width} height={height}>
            <g style={{ transform: "translate(40px,20px)" }}>
                <g>
                    {
                        data.map((d) => (
                            <g>
                                <motion.rect
                                    initial={{ height: 0, y: innerHeight }}
                                    animate={{ height: innerHeight - y(d.Value), y: y(d.Value) }}
                                    transition={{ duration: 1 }}
                                    x={xBand(d.Country)}
                                    width={xBand.bandwidth()} fill="#69b3a2" />
                                <text x={xBand(d.Country)} y={y(d.Value) - 5}>hello</text>
                            </g>
                        ))
                    }
                </g>
                <Axis
                    axis={d3.axisLeft(y)}
                    axisPos="axisLeft"
                    margin={margin}
                    height={innerHeight} />
                <Axis
                    axis={d3.axisBottom(xBand)}
                    axisPos="axisBottom"
                    margin={margin}
                    height={innerHeight} />
            </g>
        </svg>
    );
}