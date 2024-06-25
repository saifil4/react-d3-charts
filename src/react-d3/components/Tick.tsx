
type TicksProps = {
    textProps?: React.SVGAttributes<SVGTextElement>,
    lineProps?: React.SVGAttributes<SVGLineElement>,
    scale: d3.ScaleLinear<number, number>,
    orientation: "top" | "bottom" | "left" | "right",
    value: number
}

const useTick = (orientation: "top" | "bottom" | "left" | "right", value: number) => {
    let x = 0, y = 0, x1 = 0, x2 = 0, y1 = 0, y2 = 0
    switch (orientation) {
        case "top":
            x = value, y = 0, y1 = 0, y2 = -10, x1 = value, x2 = value
            break;
        case "bottom":
            x = value, y = 0, y1 = 0, y2 = 10, x1 = value, x2 = value
            break;
        case "left":
            x = 0, y = value, y1 = value, y2 = value, x1 = -10, x2 = 0;
            break;
        case "right":
            x = 0, y = value, y1 = value, y2 = value, x1 = 10, x2 = 0
            break;
    }
    return { x, y, x1, x2, y1, y2 }
}

export const Tick: React.FC<TicksProps> = ({ orientation, value, scale, lineProps, textProps }) => {

    const { x, y, x1, x2, y1, y2 } = useTick(orientation, scale(value));

    return (
        <>
            <text
                style={{ fontSize: "10px" }}
                alignmentBaseline="middle"
                textAnchor='middle'
                x={x} y={y}
                {...textProps}
            >
                {value}
            </text>
            <line
                stroke="black"
                strokeWidth={1}
                opacity={0.2}
                y1={y1} y2={y2}
                x1={x1} x2={x2}
                {...lineProps}
            />
        </>
    )
}

