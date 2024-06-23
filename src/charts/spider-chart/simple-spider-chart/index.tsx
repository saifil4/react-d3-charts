import React from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion'

import { cars, parameterKeys, width, height, Specs } from './config';

const SimpleSpiderChart: React.FC = () => {

    const carSpecs = cars.map(car => car.specs)

    let parameters = parameterKeys.map((f, i) => {
        let angle = (Math.PI / 2) + (2 * Math.PI * i / parameterKeys.length);
        const parameterData = carSpecs.map(car => car[f as keyof Specs]);
  
        const domain = d3.extent(parameterData) as Iterable<number>;
        const scale = d3.scaleLinear(domain, [0, 250]);
        return {
            "name": f,
            "angle": angle,
            "scale": scale,
            "maxValue": d3.max(domain) as number,
            "minValue": d3.min(domain) as number
        };
    });

    const polygons = carSpecs.map((car, i) => {
        return {
            "name": cars[i].model,
            "coordinates": parameters.map((parameter) => {
                console.log(parameter)
                let x = Math.cos(parameter.angle) * parameter.scale(car[parameter.name as keyof Specs]);
                let y = Math.sin(parameter.angle) * parameter.scale(car[parameter.name as keyof Specs]);
                return { parameter: parameter.name, "x": width / 2 + x, "y": height / 2 - y };
            })
        }
    })


    const gridLines = [20, 40, 60, 80, 100].map(percent => {
        return {
            "name": "grid-" + percent,
            "coordinates": parameters.map((parameter) => {
                const { maxValue, minValue } = parameter;
                const percentValue = (minValue + (maxValue - minValue) * (percent / 100));
                let x = Math.cos(parameter.angle) * parameter.scale(percentValue);
                let y = Math.sin(parameter.angle) * parameter.scale(percentValue);
                return { parameter: parameter.name, "x": width / 2 + x, "y": height / 2 - y };
            })
        }
    });

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
                {gridLines.map(gridItem => (
                    <motion.polygon
                        key={gridItem.name}
                        fill='none'
                        strokeWidth={1}
                        stroke="#DCDFE4"
                        points={gridItem.coordinates.reduce((acc, coor) => `${acc} ${coor.x},${coor.y}`, "")} />

                ))}
                {polygons.map(d => (
                    <>
                        {/* {d.coordinates.map(coor => (
                            <circle key={d.name + coor.parameter} cx={coor.x} cy={coor.y} r={5} fill={color(d.name)} />
                        ))} */}
                        <motion.polygon
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                            key={d.name}
                            name={
                                d.name
                            }
                            fill="transparent"
                            stroke={color(d.name)}
                            strokeWidth={4}
                            points={d.coordinates.reduce((acc, coor) => `${acc} ${coor.x},${coor.y}`, "")} />
                    </>

                ))}

            </g>
        </svg>
    );
};

export default SimpleSpiderChart;