import { useEffect, useState } from "react";

interface IProps {
  distanceBetweenLines: number;
  heightContainer: number;
  xStartPoint: number;
  yStartPoint: number;
  numberOfLines: number;
  labels: string[];
}

export default function VerticaLines(props: IProps) {
  const {
    distanceBetweenLines,
    xStartPoint,
    yStartPoint,
    heightContainer,
    labels,
    numberOfLines,
  } = props;

  const [emptyArr, setEmptyArr] = useState<number[]>([]);

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < numberOfLines; ++i) {
      tempArr.push(i);
    }
    setEmptyArr(tempArr);
  }, [numberOfLines]);
  return (
    <>
      <g className="vertical-lines">
        {labels.map((label, i) => (
          <text
            fontSize={12}
            x={distanceBetweenLines * i + xStartPoint - 12}
            y={heightContainer + yStartPoint + 25}
            key={`label-horizontal-${i}`}
          >
            {label}
          </text>
        ))}
      </g>
    </>
  );
}
