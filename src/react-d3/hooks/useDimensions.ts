import { TChart } from "react-d3/data/type";

export const useDimensions = (chartData: TChart) => {
    const { width, height, margin } = chartData;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const transform = `translate(${margin.left}px, ${margin.top}px)`;
    return { innerWidth, innerHeight, transform }
}