import React from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { pieChartData, TPieChart } from "react-d3/data/pie-chart-data";

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
  width: 350,
  height: 350,
  title: "Dummy Stock Chart",
  data: pieChartData,
};

const PieChart: React.FC = () => {
  const { height, width, data, title, margin } = chartData;
  const outerWidth = width + margin.left + margin.right;
  const outerHeight = height + margin.top + margin.bottom;
  const transform = `translate(${width / 2 + (outerWidth - width) / 2}px, ${
    height / 2 + (outerHeight - height) / 2
  }px)`;

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
    <svg width={outerWidth} height={outerHeight}>
      <g style={{ transform: transform }}>
        {arcs.map((d, i) => (
          <motion.path
            key={i}
            animate={{ d: animateValues(d) as string[] }}
            transition={{ duration: 0.3, delay: i * 0.3, ease: "easeIn" }}
            fill={color(d.value.toString()) as string}
          />
        ))}
      </g>
    </svg>
  );
};

export default PieChart;
