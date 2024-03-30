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
    const arcs = pie(data).sort((a, b) => a.value - b.value);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {
                    arcs.map((d, i) => (
                        <motion.path
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.3, ease: "easeInOut" }}
                            d={d3.arc().innerRadius(0).outerRadius(radius)(d) || undefined}
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
