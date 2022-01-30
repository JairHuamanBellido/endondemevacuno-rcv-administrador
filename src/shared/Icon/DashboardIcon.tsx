import { IPropsIcon } from "./IPropsIcon";

export default function DashboardIcon({ color }: IPropsIcon) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 3v16h16v2H3V3h2Zm15.293 3.293 1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292Z"
        fill={color}
      />
    </svg>
  );
}
