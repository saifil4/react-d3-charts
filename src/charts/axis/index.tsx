import React from 'react';
import { ticks, margin, width, height } from './data';
import * as d3 from 'd3';

interface AxisProps {
    // Define the props for the Axis component here
}

const Axis: React.FC<AxisProps> = () => {

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const ti = d3.ticks(0, ticks, 4);
    const x = d3.scaleLinear([0, ti.length - 1], [0, innerWidth]);
    const color = "blue"

    return (
        <svg width={width} height={height}>
            <g transform={`translate(10, ${innerHeight})`}>
                <path stroke={color} strokeWidth={1.5} d={`M0,${0}L${innerWidth},${0}`} />
                <g>
                    {
                        ti.map((_, i) => (
                            <>
                                <line key={i} y1={0} y2={5} x1={x(i)} x2={x(i)} stroke={color} />
                                <text style={{ fontSize: "10px" }} key={i} y={0} x={x(i)} dy="20" textAnchor='middle'>  {i} </text>
                            </>
                        ))}
                </g>
            </g>
        </svg>
    );
};

export default Axis;
