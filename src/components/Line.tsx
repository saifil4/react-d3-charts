import * as d3 from 'd3'

type LineProps = {
    data: number[],
    x: d3.ScaleLinear<number, number, never>,
    y: d3.ScaleLinear<number, number, never>,

}

const Line = ({ data, x, y }: LineProps) => {

    const line = d3.line((d, i) => x(i), y);

    return (
        <>
            <path fill="none" stroke="currentColor" strokeWidth={1.5} d={line(data) || undefined} />
            <g fill="white" stroke="currentColor" strokeWidth={1.5}>
                {
                    data.map((d, i) => (
                        <circle key={i} cx={x(i)} cy={y(d)} r={2.5} />
                    ))
                }
            </g>
        </>
    )
}

export default Line