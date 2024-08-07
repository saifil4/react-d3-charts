import * as d3 from "d3";
import { motion } from "framer-motion";
import { revenueSplitData, TRevenueSplitParameters } from "react-d3/data/revenue-split-data";
import { Axis } from "react-d3/components/Axis";
import { Legend } from "react-d3/components/Legends";

const chartData = {
  margin: {
    top: 50,
    right: 50,
    bottom: 80,
    left: 50,
  },
  width: 700,
  height: 250,
  title: "Comparing revenue sources of 10 companies",
  data: revenueSplitData,
};

export default function StackedBarChart() {
  const { height, width, data, title, margin } = chartData;
  const outerWidth = width + margin.left + margin.right;
  const outerHeight = height + margin.top + margin.bottom;
  const transform = `translate(${margin.left}px, ${margin.top}px)`;
  const legendPos = margin.top + height + margin.bottom / 2;

  const color = d3.scaleOrdinal().range(["#579DFF", "#1D7AFC", "#0055CC"]);

  const yStack = data.map(
    (d) => d.ad_revenue + d.product_sales + d.product_sales
  );
  const xStack = data.map((d) => d.name);

  const subGroups = Object.keys(data[0]).filter((d) => d !== "name");

  const subGroupNames: TRevenueSplitParameters = {
    ad_revenue: "Ad Revenue",
    product_sales: "Product Sales",
    service_revenue: "Service Revenue",
  };

  const yAxisScale = d3
    .scaleLinear([0, Math.max(...yStack)], [height, 0])
    .nice();
  const xAxisScale = d3.scaleBand(xStack, [0, width]).padding(0.1);

  const xTicks = xAxisScale.domain();
  const yTicks = yAxisScale.ticks(10);

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
          {xTicks.map((d) => (
            <>
              <Text
                dy={15}
                dx={xAxisScale.bandwidth() / 2}
                x={xAxisScale(d)}
                y={0}
              >
                {d}
              </Text>
              <Line y1={0} y2={10} x1={xAxisScale(d)} x2={xAxisScale(d)} />
            </>
          ))}
        </Axis>
        <Axis orientation="left" width={width} height={height}>
          {yTicks.map((d) => (
            <>
              <Text dx={-10} x={0} y={yAxisScale(d)}>
                {d}
              </Text>
              <Line y1={yAxisScale(d)} y2={yAxisScale(d)} x1={0} x2={width} />
            </>
          ))}
        </Axis>
        {data.map((d) => (
          <g>
            <motion.rect
              initial={{ height: 0, y: height }}
              animate={{
                height: height - yAxisScale(d.ad_revenue),
                y: yAxisScale(d.ad_revenue),
              }}
              transition={{ duration: 1 }}
              x={xAxisScale(d.name)}
              width={xAxisScale.bandwidth()}
              fill={color(d.name + d.ad_revenue) as string}
            />
            <motion.rect
              initial={{ height: 0, y: height }}
              animate={{
                height: height - yAxisScale(d.product_sales),
                y: yAxisScale(d.product_sales + d.ad_revenue),
              }}
              transition={{ duration: 1 }}
              x={xAxisScale(d.name)}
              width={xAxisScale.bandwidth()}
              fill={color(d.name + d.product_sales) as string}
            />
            <motion.rect
              initial={{ height: 0, y: height }}
              animate={{
                height: height - yAxisScale(d.service_revenue),
                y: yAxisScale(
                  d.service_revenue + d.product_sales + d.ad_revenue
                ),
              }}
              transition={{ duration: 1 }}
              x={xAxisScale(d.name)}
              width={xAxisScale.bandwidth()}
              fill={color(d.name + d.service_revenue) as string}
            />
          </g>
        ))}
      </g>
      <g style={{ transform: `translate(0px, ${legendPos}px)` }}>
        <foreignObject height={20} width={outerWidth}>
        <Legend color={color} legendList={subGroups.map((d) => subGroupNames[d as keyof TRevenueSplitParameters])} />
        </foreignObject>
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
