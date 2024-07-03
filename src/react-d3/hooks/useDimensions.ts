import { TChart } from "react-d3/data/type";

export const useDimensions = (chartData: TChart) => {
    const { width, height, margin } = chartData;
    const outerWidth = width + margin.left + margin.right;
    const outerHeight = height + margin.top + margin.bottom;
    const transform = `translate(${margin.left}px, ${margin.top}px)`;
    return { outerWidth, outerHeight, transform }
}