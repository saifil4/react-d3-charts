import * as d3 from "d3";
import { motion } from "framer-motion";
import { Axis } from "react-d3/components/Axis";
import { stockData, TStock } from "react-d3/data/stock-data";

const chartData = {
  margin: {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  },
  width: 700,
  height: 250,
  title: "Dummy Stock Chart",
  data: stockData,
};

export default function LineChart() {
  const { height, width, data, title, margin } = chartData;
  const outerWidth = width + margin.left + margin.right;
  const outerHeight = height + margin.top + margin.bottom;
  const transform = `translate(${margin.left}px, ${margin.top}px)`;

  const dateFormat = d3.timeFormat("%d-%b");

  const yDomain = d3.extent(data, (d) => d.value) as Iterable<number>;
  const xDomain = d3.extent(data, (d) => new Date(d.date)) as Iterable<Date>;

  const xAxisScale = d3.scaleTime(xDomain, [0, width]).nice();
  const yAxisScale = d3.scaleLinear(yDomain, [height, 0]).nice();

  const line = d3
    .line<TStock>()
    .x((d) => xAxisScale(new Date(d.date)))
    .y((d) => yAxisScale(d.value));

  return (
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
                {dateFormat(d)}
              </Text>
              <Line y1={0} y2={-height} x1={xAxisScale(d)} x2={xAxisScale(d)} />
            </>
          ))}
        </Axis>
        <Axis orientation="left" width={width} height={height}>
          {yAxisScale.ticks().map((d) => (
            <>
              <Text dx={-10} x={0} y={yAxisScale(d)}>
                {d}
              </Text>
              <Line y1={yAxisScale(d)} y2={yAxisScale(d)} x1={width} x2={0} />
            </>
          ))}
        </Axis>
        <g name="line-path">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
            fill="none"
            stroke="#388BFF"
            strokeWidth={2}
            d={line(data) || undefined}
          />
          {data.map((c, i) => (
            <motion.circle
              key={i}
              initial={{ r: 0 }}
              animate={{ r: 5 }}
              transition={{ duration: 1, delay: (i * 1) / data.length }}
              fill="#388BFF90"
              stroke="#388BFF"
              cx={xAxisScale(new Date(c.date))}
              cy={yAxisScale(c.value)}
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
