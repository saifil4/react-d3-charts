import * as d3 from "d3";
import { Axis } from "../components/Axis";
import Line from "../components/Line";
import Bar from "../components/Bar";

type margin = {
    top: number,
    right: number,
    bottom: number,
    left: number
}

type LinePlotProps = {
    data?: number[],
    margin: margin,
    height: number,
    width: number
}


//bar chart variations
// line chart variations
// pie chart variations
// axis variations
// scatter plot variations
// area chart variations    

// scales
// 

export function LinePlot({ data, margin, height, width }: LinePlotProps) {

    if (!data) {
        data = [];
    }

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data) as Iterable<number>;
    const x = d3.scaleLinear([0, data.length - 1], [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);



    return (
        <svg width={width} height={height}>
            <g style={{ transform: "translate(20px, 6px)" }}>
            

                <Line data={data} x={x} y={y} />
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