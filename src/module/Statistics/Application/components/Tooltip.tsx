interface IProps {
  isVisible: boolean;
  translateX: number;
  translateY: number;
  value: string;
}
export default function Tooltip(props: IProps) {
  const { isVisible, translateY, translateX, value } = props;

  return (
    <div
      style={{
        visibility: isVisible ? "visible" : "hidden",
        transform: `translate(${translateX}px, ${translateY}px) `,
      }}
      className="tooltip"
    >
      <p className="value">${value}</p>
      <p className="label">Ventas totales</p>
    </div>
  );
}
