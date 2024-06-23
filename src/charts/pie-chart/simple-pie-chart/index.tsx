import React from 'react';
import * as d3 from 'd3';
import { motion } from "framer-motion";
import { EnergySource, width, height, data, margin } from './config';

const color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

const radius = Math.min(width, height) / 2 - margin;

const PieChart: React.FC = () => {

    const pie = d3.pie<EnergySource>().value((d) => d.value);
    const arcs = pie(data).sort((a, b) => b.value - a.value);

    const animateValues = (d: d3.PieArcDatum<EnergySource>) => {
        const animatedValues: (string | null)[] = [];
        const incrementBy = 0.01;
        const iterations = Math.ceil((d.endAngle - d.startAngle) / incrementBy);
        for (let i = 0; i < iterations; i++) {
            let endAngle = i === iterations - 1 ? d.endAngle : d.startAngle + i * incrementBy; // Ensure the last value is the actual end angle
            const arc = d3.arc()({ ...d, endAngle: endAngle, innerRadius: 0, outerRadius: radius });
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
                            animate={{ d: animateValues(d) as string[] }}
                            transition={{ duration: 0.3, delay: i * 0.3, ease: "easeIn" }}
                            fill={color(d.value.toString()) as string} />
                    ))
                }
            </g>
        </svg>
    );
};

export default PieChart;
