import * as d3 from "d3";
import { useEffect, useRef } from "react";

export function Axis({
    axis,
    axisPos,
    margin,
    height
}:
    {
        axis: d3.Axis<d3.NumberValue>,
        axisPos: 'axisTop' | 'axisRight' | 'axisBottom' | 'axisLeft'
        margin: {
            left: number,
            right: number,
            top: number,
            bottom: number,
        }
        height: number
    }
) {
    const axisRef = useRef<SVGGElement>(null);

    const { left, right, top, bottom } = margin;

    const transformPostions = {
        axisLeft: `translate(0, 0)`,
        axisRight: `translate(${right}, 0)`,
        axisTop: `translate(0, ${height - top})`,
        axisBottom: `translate(0, ${height})`
    }

    const t = d3.transition()
        .duration(750)
        .delay(100)
        .ease(d3.easeExpInOut);

    useEffect(() => {
        if (axisRef.current) {
            d3.select(axisRef.current)
                // .transition(t)
                .attr("transform", transformPostions[axisPos])
                .call(axis)

        }
    }, [axisRef]);

    return <g ref={axisRef} />
}