import * as d3 from "d3";

type TLegendProps = {
    legendList: string[],
    color: d3.ScaleOrdinal<string, unknown, never>
}

export const Legend = ({legendList, color}: TLegendProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {legendList.map((name, i) => (
        <LegendItem key={i} color={color(name) as string} name={name} />
      ))}
    </div>
  );
};

const LegendItem = (props: { color: string; name: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <div
      style={{
        height: 12,
        width: 24,
        backgroundColor: `${props.color}`,
      }}
    ></div>
    <span
      style={{
        marginRight: "20px",
        marginLeft: "5px",
        fontSize: "12px",
      }}
    >
      {props.name}
    </span>
  </div>
);
