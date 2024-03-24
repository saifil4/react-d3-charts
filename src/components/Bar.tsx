import * as d3 from 'd3'
import { useEffect, useRef } from 'react';


type attribute = {
    [key: string]: string;
}

type LineProps = {
    data: number[],
    x: d3.ScaleBand<number>,
    y: d3.ScaleLinear<number, number, never>,
    height: number,
    attributes: attribute[]
}

const Bar = ({ data, x, y, height, attributes }: LineProps) => {

    const barRef = useRef<SVGGElement>(null);

    const t = d3.transition()
        .duration(500)
        .delay(function (d, i) { console.log(i); return (i * 100) })

    useEffect(() => {
        if (!barRef.current) return;

        d3.select(barRef.current).selectChildren()
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i) as number)
            .attr("y", d => y(d))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d))
            .call(g => {
                attributes.forEach(attr => {
                    Object.keys(attr).forEach(key => {
                        g.attr(key, attr[key])
                    })
                })
            })

    }, [barRef])

    return <g ref={barRef} />
}

export default Bar