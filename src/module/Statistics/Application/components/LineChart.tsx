import { useEffect, useRef, useState } from "react";
import VerticalLabels from "./VerticalLabels";
import LineIndicator from "./LineIndicator";
import HorizontalLines from "./HorizontalLines";
import HorizontalLabels from "./HorizontalLabels";
import Tooltip from "./Tooltip";
import CirclePoints from "./CirclePoint";

const COLORED = "#FF1A59";

const XstartPoint = 50;
const YstartPoint = 50;
function round(value: number, precision?: number) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

interface Props {
  values: number[];
  labels: string[];
}
export default function LineChart({ labels, values }: Props) {
  const [track, setTrack] = useState({ x: 0, y: 0, isHover: false });
  const [path, setPath] = useState<string>("");
  const [valueHover, setValueHover] = useState<number>(0);
  const [spaceBetweenLine, setSpaceBetweenLine] = useState<number>(0);
  const [widthContainer, setWidthContainer] = useState<number>(0);
  const [heightContainer, setHeightContainer] = useState<number>(0);
  const [highValueLeftLegend, setHighValueLeftLegend] = useState<number>(-1);
  const ref = useRef<any>();

  console.log({ values, valueHover });

  useEffect(() => {
    if (values.length === 1) {
      setSpaceBetweenLine(widthContainer / 2);
    } else {
      setSpaceBetweenLine(widthContainer / (values.length - 1));
    }
  }, [values, widthContainer]);
  useEffect(() => {
    const divContainer = ref.current as HTMLElement;
    const yEndPoint = divContainer.clientHeight - YstartPoint;
    const heightChartContainer = divContainer.clientHeight - YstartPoint * 2;
    setWidthContainer(divContainer.clientWidth - XstartPoint * 2);
    setHeightContainer(heightChartContainer);
    const M = `M ${XstartPoint} ${
      yEndPoint - heightChartContainer * (values[0] / highValueLeftLegend)
    }`;

    let L = "L";
    for (let index = 1; index < values.length; index++) {
      const element = values[index];
      const x = `${spaceBetweenLine * index + XstartPoint}`;
      const y =
        yEndPoint - heightChartContainer * (element / highValueLeftLegend);
      L += `${x},${y},`;
    }
    setPath(M + L);
  }, [values, spaceBetweenLine, highValueLeftLegend]);

  useEffect(() => {
    if (values.length > 1) {
      setValueHover(round(track.x / spaceBetweenLine));
    } else {
      setValueHover(0);
    }
  }, [track, spaceBetweenLine]);

  useEffect(() => {
    function handleResize() {
      const el = ref.current as HTMLElement;
      setWidthContainer(el.clientWidth - XstartPoint * 2);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getXPoint = () => {
    return valueHover * spaceBetweenLine;
  };

  const getYPoint = (v: number) => {
    if (highValueLeftLegend === 0) {
      return heightContainer + YstartPoint;
    }
    return (
      heightContainer +
      YstartPoint -
      heightContainer * (v / highValueLeftLegend)
    );
  };

  const onMouseHoverChart = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    const el = ref.current as HTMLElement;
    const posX = e.clientX - el.getBoundingClientRect().x;
    const posY = e.clientY - el.getBoundingClientRect().y;
    if (
      posX - XstartPoint >= 0 &&
      posX < widthContainer + XstartPoint &&
      posY - YstartPoint >= 0 &&
      posY < heightContainer + YstartPoint
    ) {
      console.log(
        "encontrado",
        e.clientX - el.getBoundingClientRect().x - XstartPoint
      );
      setTrack({
        isHover: true,
        x: e.clientX - el.getBoundingClientRect().x - XstartPoint,
        y: e.clientY - el.getBoundingClientRect().y,
      });
    } else {
      console.log("cambiando");
      setTrack({ ...track, isHover: false });
    }
  };
  return (
    <>
      <div ref={ref} className="container-chart">
        <svg
          onMouseMove={onMouseHoverChart}
          width="100%"
          height="100%"
          aria-labelledby="title desc"
          style={{ cursor: "grab" }}
        >
          <HorizontalLabels
            distanceBetweenLines={spaceBetweenLine}
            heightContainer={heightContainer}
            xStartPoint={
              values.length > 1 ? XstartPoint : widthContainer / 2 + 50
            }
            yStartPoint={YstartPoint}
            numberOfLines={values.length}
            labels={labels}
          />
          <VerticalLabels
            heightContainer={heightContainer}
            lengthVerticalLabels={8}
            values={values}
            xStartPosition={XstartPoint}
            yStartPosition={YstartPoint}
            setHighValueLeftLegend={setHighValueLeftLegend}
          />
          <HorizontalLines
            numberOfLines={8}
            heightContainer={heightContainer}
            x1={XstartPoint}
            y={YstartPoint}
            x2={widthContainer + XstartPoint + 10}
          />
          {values.length > 1 && <path className="line" d={`${path}`} />}

          {track.isHover && (
            <LineIndicator
              x={
                values.length > 1
                  ? getXPoint() + XstartPoint
                  : widthContainer / 2 + XstartPoint
              }
              y1={YstartPoint}
              y2={heightContainer + YstartPoint}
            />
          )}
          <CirclePoints
            borderColor={COLORED}
            spaceBetweenPoints={spaceBetweenLine}
            getYPoint={getYPoint}
            values={values}
            x={
              values.length > 1 ? XstartPoint : widthContainer / 2 + XstartPoint
            }
          />
        </svg>
        <Tooltip
          translateX={
            values.length > 1
              ? valueHover * spaceBetweenLine + XstartPoint - 60
              : widthContainer / 2 + 60
          }
          translateY={getYPoint(values[valueHover]) - 80}
          value={
            values[valueHover] !== undefined
              ? values[valueHover].toString()
              : ""
          }
          isVisible={track.isHover}
        />
      </div>
    </>
  );
}
