
type AxisProps = {
    children?: React.ReactNode,
    height: number,
    width: number,
    orientation: "top" | "bottom" | "left" | "right"
}

const useAxis = (orientation: "top" | "bottom" | "left" | "right", height: number, width: number) => {
    let translateX = 0, translateY = 0, path = ""
    switch (orientation) {
        case "top": path = `M0,0L${width},0`
            break;
        case "bottom": translateY = height, path = `M0,0L${width},0`
            break;
        case "left": path = `M0,0L0,${height}`
            break;
        case "right": translateX = width, path = `M0,0L0,${height}`
            break;
    }
    return { translateX, translateY, path }
}



export const Axis: React.FC<AxisProps> = ({ orientation, height, width, children }) => {

    const { translateX, translateY, path } = useAxis(orientation, height, width);

    return (
        <g style={{ transform: `translate(${translateX}px, ${translateY}px)` }}>
            <AxisPath d={path} />
            <g>{children} </g>
        </g>
    )
}

const AxisPath = (props: React.SVGAttributes<SVGPathElement>) =>
    <path
        stroke="black"
        strokeWidth={1}
        opacity={0.2}
        {...props} />
