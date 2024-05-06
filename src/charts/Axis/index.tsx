
import * as d3 from "d3";
import { Axis } from "components/Axis";

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


export default function AxisDemo() {

    const data = [1, 2.3, 3.9, 4, 5.1, 2.3, 7, 8, 9, 10];

    const innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const yDomain = d3.extent(data) as Iterable<number>;

    const x = d3.scaleLinear([0, 9], [0, innerWidth]);
    const y = d3.scaleLinear(yDomain, [innerHeight, 0]);

    const xTicks = x.ticks(10)
    const yTicks = y.ticks(10)

    return (
        <svg width={width} height={height}>
            <g style={{ transform: `translate(${margin.left}px, ${margin.top}px)` }}>
                <Axis
                    orientation="bottom"
                    width={innerWidth}
                    height={innerHeight}>
                    {xTicks.map((d) => (<>
                        <Text dy={15} x={x(d)} y={0}> {d} </Text>
                        <Line y1={0} y2={10} x1={x(d)} x2={x(d)} />
                    </>))}
                </Axis>
                <Axis
                    orientation="top"
                    width={innerWidth}
                    height={innerHeight}>
                    {xTicks.map((d) => (<>
                        <Text dy={-15} x={x(d)} y={0}> {d} </Text>
                        <Line y1={0} y2={-10} x1={x(d)} x2={x(d)} />
                    </>))}
                </Axis>
                <Axis
                    orientation="left"
                    width={innerWidth}
                    height={innerHeight}>
                    {yTicks.map((d) => (<>
                        <Text dx={-15} x={0} y={y(d)}> {d} </Text>
                        <Line y1={y(d)} y2={y(d)} x1={-10} x2={0} />
                    </>))}
                </Axis>
                <Axis
                    orientation="right"
                    width={innerWidth}
                    height={innerHeight}>
                    {yTicks.map((d) => (<>
                        <Text dx={15} x={0} y={y(d)}> {d} </Text>
                        <Line y1={y(d)} y2={y(d)} x1={10} x2={0} />
                    </>))}
                </Axis>
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

