import React from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion'

import { cars, parameterKeys, width, height, Specs } from './config';

const SimpleSpiderChart: React.FC = () => {

    const carSpecs = cars.map(car => car.specs)


    let parameters = parameterKeys.map((f, i) => {
        let angle = (Math.PI / 2) + (2 * Math.PI * i / parameterKeys.length);
        const parameterData = carSpecs.map(car => car[f as keyof Specs])
        const domain = d3.extent(parameterData) as Iterable<number>;
        const scale = d3.scaleLinear().domain(domain).range([0, 250]);
        return {
            "name": f,
            "angle": angle,
            "scale": scale
        };
    });


    const polygons = carSpecs.map((car, i) => {
        return {
            "name": cars[i].model,
            "coordinates": parameters.map((parameter) => {
                let x = Math.cos(parameter.angle) * parameter.scale(car[parameter.name as keyof Specs]);
                let y = Math.sin(parameter.angle) * parameter.scale(car[parameter.name as keyof Specs]);
                return { parameter: parameter.name, "x": width / 2 + x, "y": height / 2 - y };
            })
        }
    })

    const color = d3.scaleOrdinal(d3.schemeDark2);


    return (
        <svg width={width} height={height}>
            <g>
                {parameters.map((parameter) => (
                    <line
                        key={parameter.name + '-guideline'}
                        x1={width / 2}
                        y1={height / 2}
                        x2={width / 2 + Math.cos(parameter.angle) * 250}
                        y2={height / 2 + Math.sin(parameter.angle) * 250}
                        stroke="gray"
                    />
                ))}
            </g>
            <g>
                {polygons.map(d => (
                    <>
                        {d.coordinates.map(coor => (
                            <circle key={d.name + coor.parameter} cx={coor.x} cy={coor.y} r={5} fill={color(d.name)} />
                        ))}
                        <motion.polygon
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                            key={d.name}
                            fill='none'
                            strokeWidth={2}
                            stroke={color(d.name)}
                            points={d.coordinates.reduce((acc, coor) => `${acc} ${coor.x},${coor.y}`, "")} />
                    </>

                ))}
            </g>
        </svg>
    );
};

export default SimpleSpiderChart;