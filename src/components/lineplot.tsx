import * as d3 from "d3";
import { Axis } from "./Axis";
import Line from "./Line";
import Bar from "./Bar";

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

    const xBand = d3.scaleBand(data.map(d => d), [0, innerWidth]).padding(0.1);


    return (
        <svg width={width} height={height}>
            <g style={{transform: "translate(20px, 6px)"}}>
                <Bar
                    data={data}
                    height={innerHeight}
                    x={xBand} y={y}
                    attributes={[
                        { "fill": '#69b3a2' },
                    ]} />
                    
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