import React from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { pieChartData, TPieChart } from "react-d3/data/pie-chart-data";
import { Legend } from "react-d3/components/Legends";

const color = d3
  .scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

const chartData = {
  margin: {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  },
  width: 800,
  height: 350,
  title: "Pie Chart Data",
  data: pieChartData,
};

const PieChart: React.FC = () => {
  const { height, width, data, title, margin } = chartData;
  const outerWidth = width + margin.left + margin.right;
  const outerHeight = height + margin.top + margin.bottom;
  // const transform = `translate(${width / 2 + (outerWidth - width) / 2}px, ${
  //   height / 2 + (outerHeight - height) / 2
  // }px)`;

  const transform = `translate(${outerWidth / 2 }px, ${outerHeight / 2}px)`;

  const radius = Math.min(width, height) / 2;

  const pie = d3.pie<TPieChart>().value((d) => d.value);
  const arcs = pie(data).sort((a, b) => b.value - a.value);

  const animateValues = (d: d3.PieArcDatum<TPieChart>) => {
    const animatedValues: (string | null)[] = [];
    const incrementBy = 0.01;
    const iterations = Math.ceil((d.endAngle - d.startAngle) / incrementBy);
    for (let i = 0; i < iterations; i++) {
      let endAngle =
        i === iterations - 1 ? d.endAngle : d.startAngle + i * incrementBy; // Ensure the last value is the actual end angle
      const arc = d3.arc()({
        ...d,
        endAngle: endAngle,
        innerRadius: 0,
        outerRadius: radius,
      });
      animatedValues.push(arc);
    }
    return animatedValues;
  };

  return (
    <div style={{height: `${outerHeight}px`}}>
      <ResponsiveSVG viewBox={`0 0 ${outerWidth} ${outerHeight}`}>
        <g style={{ transform: transform }}>
          <text
            y={0}
            x={0}
            dy={-radius - 20}
            textAnchor="middle"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            {title}
          </text>
          {arcs.map((d, i) => (
            <motion.path
              key={i}
              animate={{ d: animateValues(d) as string[] }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
              fill={color(d.value.toString()) as string}
            />
          ))}
        </g>
        <g style={{ transform: `translate(0px, ${outerHeight - 30}px)` }}>
          <foreignObject height={20} width={outerWidth}>
            <Legend color={color} legendList={data.map((d) => d.name)} />
          </foreignObject>
        </g>
      </ResponsiveSVG>
    </div>
  );
};

export default PieChart;

const ResponsiveSVG = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox={props.viewBox}
    width="100%"
    height="100%"
    preserveAspectRatio="xMinYMid meet"
    {...props}
  />
);
