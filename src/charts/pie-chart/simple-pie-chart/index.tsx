import React from 'react';
import * as d3 from 'd3';
import { motion } from "framer-motion";

interface Props {

}

const width = 450,
    height = 450,
    margin = 40;

const data = [
    { name: "d", value: 8 },
    { name: "a", value: 9 },
    { name: "e", value: 12 },
    { name: "b", value: 20 },
    { name: "c", value: 30 }
]

const color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

const radius = Math.min(width, height) / 2 - margin;

const PieChart: React.FC<Props> = () => {

    const pie = d3.pie().value((d) => d.value);
    const arcs = pie(data).sort((a, b) => b.value - a.value);

    const animatedArray = (d) => {
        const animatedValues = [];
        const incrementValue = 0.01;
        const iterations = Math.ceil((d.endAngle - d.startAngle) / incrementValue);
        for (let i = 0; i < iterations; i++) {
            let endAngle = d.startAngle + ((i + 1) * incrementValue);
            if (i === iterations - 1) endAngle = d.endAngle;
            const arc = d3.arc().innerRadius(100).outerRadius(radius)({ ...d, endAngle: endAngle });
            animatedValues.push(arc);
        }
        return animatedValues;
    }

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {
                    arcs.map((d, i) => (
                        <motion.path
                            key={i}
                            animate={{ d: animatedArray(d) }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            fill={color(d.value.toString()) as string}
                            stroke="black"
                            strokeWidth={2} />
                    ))
                }
            </g>
        </svg>
    );
};

export default PieChart;
