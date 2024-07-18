import * as d3 from "d3";
import { motion } from "framer-motion";
import {
  revenueData,
  TRevenuePlot,
} from "react-d3/data/revenue-historic-data";
import { Axis } from "react-d3/components/Axis";
import { Legend } from "react-d3/components/Legends";

const chartData = {
  margin: {
    top: 50,
    right: 60,
    bottom: 70,
    left: 60,
  },
  width: 700,
  height: 250,
  title: "Dummy Revenue Chart",
  data: revenueData,
};

export default function MultiLineChart() {
  const { height, width, data, margin, title } = chartData;
  const outerWidth = width + margin.left + margin.right;
  const outerHeight = height + margin.top + margin.bottom;
  const transform = `translate(${margin.left}px, ${margin.top}px)`;

  const legendPos = margin.top + height + margin.bottom / 2;

  const color = d3.scaleOrdinal().range(["#388BFF", "#8F7EE7", "#DA62AC"]);

  const parseTime = d3.timeParse("%B");
  const dateFormat = d3.timeFormat("%b");

  const yDomain = d3.extent(
    data.map((d) => d.plot).flat(),
    (d) => d.value
  ) as Iterable<number>;
  const xDomain = d3.extent(data.map((d) => d.plot).flat(), (d) =>
    parseTime(d.month)
  ) as Iterable<Date>;

  const xAxisScale = d3.scaleTime(xDomain, [0, width]);
  const yAxisScale = d3.scaleLinear(yDomain, [height, 0]);

  const line = d3
    .line<TRevenuePlot>()
    .x((d) => xAxisScale(parseTime(d.month) as Date))
    .y((d) => yAxisScale(d.value));

  return (
    <>
      <ResponsiveSVG viewBox={`0 0 ${outerWidth} ${outerHeight}`}>
        <g style={{ transform: transform }}>
          <text
            x={width / 2}
            dy={-20}
            y={0}
            textAnchor="middle"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            {title}
          </text>
          <Axis orientation="bottom" width={width} height={height}>
            {xAxisScale.ticks().map((d) => (
              <>
                <Text dy={15} x={xAxisScale(d)} y={0}>
                  {" "}
                  {dateFormat(d)}{" "}
                </Text>
                <Line
                  y1={0}
                  y2={-height}
                  x1={xAxisScale(d)}
                  x2={xAxisScale(d)}
                />
              </>
            ))}
          </Axis>
          <Axis orientation="left" width={width} height={height}>
            {yAxisScale.ticks().map((d) => (
              <>
                <Text dx={-10} x={0} y={yAxisScale(d)} textAnchor="end">
                  {" "}
                  {d}{" "}
                </Text>
                <Line y1={yAxisScale(d)} y2={yAxisScale(d)} x1={width} x2={0} />
              </>
            ))}
          </Axis>
          <g>
            {data.map((d) => (
              <>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                  fill="none"
                  stroke={color(d.name) as string}
                  strokeWidth={2}
                  d={line(d.plot) || undefined}
                />
                {d.plot.map((c, i) => (
                  <motion.circle
                    initial={{ r: 0 }}
                    animate={{ r: 5 }}
                    transition={{ duration: 1, delay: (i * 1) / d.plot.length }}
                    key={i}
                    fill={`${color(d.name)}90`}
                    stroke={color(d.name) as string}
                    cx={xAxisScale(parseTime(c.month) as Date)}
                    cy={yAxisScale(c.value)}
                  />
                ))}
              </>
            ))}
          </g>
        </g>
        <g style={{ transform: `translate(0px, ${legendPos}px)` }}>
          <foreignObject height={20} width={outerWidth}>
            <Legend color={color} legendList={data.map((d) => d.name)} />
          </foreignObject>
        </g>
      </ResponsiveSVG>
    </>
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
