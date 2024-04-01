import React from 'react';

interface Props {
    color: string;
    xTicks: number[];
    innerHeight: number;
    innerWidth: number;
    x: any;
}

const Axis: React.FC<Props> = ({ color, xTicks, innerHeight, innerWidth, x }) => {
    // Implement your component logic here

    return (
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
    );
};

export default Axis;
