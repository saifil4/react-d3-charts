import React from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { carData, TCar } from "react-d3/data/car-spec-data";

const chartData = {
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  },
  width: 400,
  height: 400,
  title: "Dummy Stock Chart",
  data: carData,
};

const SpiderChart: React.FC = () => {
  const { data, width, height, margin } = chartData;
  const outerWidth = width + margin.left + margin.right;
  const outerHeight = height + margin.top + margin.bottom;
  const radius = Math.min(width, height) / 2;
  const transform = `translate(${margin.left}px, ${margin.top}px)`;

  const parameterKeys = Object.keys(data[0]).filter((key) => key !== "name");
  const color = d3.scaleOrdinal<string>().range(["#2898BD", "#CD519D", "#B38600"]);


  let parameters = parameterKeys.map((param, i) => {
    return {
      name: param,
      angle: Math.PI / 2 + (2 * Math.PI * i) / parameterKeys.length,
      scale: d3.scaleLinear([0, 100], [0, width / 2]),
    };
  });

  const translateCoordinates = (x: number, y: number) => {
    return {
      x: width / 2 + x,
      y: height / 2 - y,
    };
  };

  const polygons = data.map((car) => {
    return {
      name: car.name,
      coordinates: parameters.map(({ name, angle, scale }) => {
        let x = Math.cos(angle) * scale(car[name as keyof TCar]);
        let y = Math.sin(angle) * scale(car[name as keyof TCar]);
        return translateCoordinates(x, y);
      }),
    };
  });

  const gridLines = [20, 40, 60, 80, 100].map((value) => {
    return {
      name: "grid-" + value,
      coordinates: parameters.map(({ angle, scale }) => {
        let x = Math.cos(angle) * scale(value);
        let y = Math.sin(angle) * scale(value);
        return translateCoordinates(x, y);
      }),
    };
  });

  return (
    <svg width={outerWidth} height={outerHeight}>
      <g style={{ transform: transform }}>
        {parameters.map((parameter) => (
          <motion.line
            key={parameter.name + "-guideline"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
            x1={width / 2}
            y1={height / 2}
            x2={width / 2 + Math.cos(parameter.angle) * radius}
            y2={height / 2 - Math.sin(parameter.angle) * radius}
            stroke="#2C3E5D"
          />
        ))}
        {gridLines.map((gridItem) => (
          <motion.polygon
            key={gridItem.name}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
            fill="none"
            strokeWidth={1}
            stroke="#DCDFE4"
            points={gridItem.coordinates
              .map(({ x, y }) => `${x},${y}`)
              .join(" ")}
          />
        ))}
        {polygons.map((d) => (
          <motion.polygon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={d.name}
            name={d.name}
            fill={`${color(d.name)}50`}
            stroke={color(d.name)}
            strokeWidth={2}
            points={d.coordinates.map(({ x, y }) => `${x},${y}`).join(" ")}
          />
        ))}
      </g>
    </svg>
  );
};

export default SpiderChart;
