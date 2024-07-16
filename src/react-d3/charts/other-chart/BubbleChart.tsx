import * as d3 from "d3";
import { motion } from "framer-motion";
import { Axis } from "react-d3/components/Axis";
import { taskPriorityData } from "react-d3/data/task-priorty-data";

export default function BubbleChart() {
  const { height, width, data, margin } = taskPriorityData;
  const outerWidth = width + margin.left + margin.right;
  const outerHeight = height + margin.top + margin.bottom;
  const transform = `translate(${margin.left}px, ${margin.top}px)`;

  const priorties = [
    {
      name: "Low",
      min: 0,
      max: 3,
      color: "#ff6384",
    },
    {
      name: "Medium",
      min: 3.1,
      max: 6,
      color: "#36a2eb",
    },
    {
      name: "High",
      min: 6.1,
      max: 9,
      color: "#ffce56",
    },
  ];

  const xAxisScale = d3.scaleLinear([0, 9], [0, width]).nice();
  const yAxisScale = d3.scaleLinear([0, 9], [height, 0]).nice();
  const zAxisScale = d3.scaleLinear([0, 9], [5, 30]);

  return (
    <ResponsiveSVG viewBox={`0 0 ${outerWidth} ${outerHeight}`}>
      <g style={{ transform: transform }}>
        {/* <text x={width / 2} dy={-5} y={height - margin.bottom} textAnchor="middle" style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</text> */}
        <Axis orientation="bottom" width={width} height={height}>
          {priorties.map((d) => (
            <>
              <Text
                x={xAxisScale(d.min + (d.max - d.min) / 2)}
                y={0}
                dy={10}
                textAnchor="middle"
              >
                {d.name}
              </Text>
              <Line
                y1={0}
                y2={-height}
                x1={xAxisScale(d.max)}
                x2={xAxisScale(d.max)}
              />
            </>
          ))}
        </Axis>
        <Axis orientation="left" width={width} height={height}>
          {priorties.map((d) => (
            <>
              <Text
                transform={`translate(0, ${yAxisScale(
                  d.min + (d.max - d.min) / 2
                )}) rotate(-90)`}
                dy={-10} 
              >
                {d.name}
              </Text>
              <Line
                y1={yAxisScale(d.max)}
                y2={yAxisScale(d.max)}
                x1={width}
                x2={0}
              />
            </>
          ))}
        </Axis>
        <g name="line-path">
          {data.map((c, i) => (
            <motion.circle
              key={i}
              initial={{ r: 0 }}
              animate={{ r: zAxisScale(c.time) }}
              transition={{ duration: 0.5, delay: (i * 0.5) / data.length }}
              fill="#ff638490"
              stroke="#ff6384"
              cx={xAxisScale(new Date(c.effort))}
              cy={yAxisScale(c.impact)}
            />
          ))}
        </g>
      </g>
    </ResponsiveSVG>
  );
}

const ResponsiveSVG = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox={props.viewBox}
    width="100%"
    height="100%"
    preserveAspectRatio="xMinYMid meet"
    {...props}
  />
);

const Text = (props: React.SVGAttributes<SVGTextElement>) => (
  <text
    style={{ fontSize: "10px" }}
    alignmentBaseline="middle"
    textAnchor="middle"
    {...props}
  >
    {props.children}
  </text>
);

const Line = (props: React.SVGAttributes<SVGLineElement>) => (
  <line stroke="black" strokeWidth={1} opacity={0.2} {...props} />
);
