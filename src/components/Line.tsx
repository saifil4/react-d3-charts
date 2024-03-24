import * as d3 from 'd3';
import { motion } from "framer-motion"

type LineProps = {
    data: number[],
    x: d3.ScaleLinear<number, number, never>,
    y: d3.ScaleLinear<number, number, never>,

}

const Line = ({ data, x, y }: LineProps) => {

    const line = d3.line((d, i) => x(i), y);

    return (
        <>
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                d={line(data) || undefined}
            />
            <g fill="white" stroke="currentColor" strokeWidth={1.5}>
                {
                    data.map((d, i) => (
                        <motion.circle
                            initial={{ r: 0 }}
                            animate={{ r: 2.5 }}
                            transition={{ duration: 1, delay: i / 10}}
                            key={i}
                            cx={x(i)}
                            cy={y(d)} />
                    ))
                }
            </g>
        </>
    )
}

export default Line