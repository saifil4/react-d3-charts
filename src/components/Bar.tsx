import { SVGProps } from 'react'


type BarProps = {
    bar: SVGProps<SVGRectElement>,
    text: SVGProps<SVGTextElement>
}

const Bar = ({ bar, text }: BarProps) => {
    return (
        <g>
            <rect {...bar} />
            <text {...text} />
        </g>
    )
}

export default Bar