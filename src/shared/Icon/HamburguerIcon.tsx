import { IPropsIcon } from "./IPropsIcon";

export default function HamburguerIcon({ color }: IPropsIcon) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path fill={color} d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
    </svg>
  );
}
