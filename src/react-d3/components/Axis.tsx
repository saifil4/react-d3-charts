
type Orientation = "top" | "bottom" | "left" | "right";

type TAxisProps = {
    children?: React.ReactNode,
    height: number,
    width: number,
    orientation: Orientation
}

const useAxis = (orientation: Orientation, height: number, width: number) => {
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



export const Axis: React.FC<TAxisProps> = ({ orientation, height, width, children }) => {

    const { translateX, translateY, path } = useAxis(orientation, height, width);

    return (
        <g name={`${orientation}-axis`} style={{ transform: `translate(${translateX}px, ${translateY}px)` }}>
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
