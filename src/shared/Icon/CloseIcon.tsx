import { IPropsIcon } from "./IPropsIcon";

export default function CloseIcon({ color }: IPropsIcon) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path
        fill={color}
        d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
      />
    </svg>
  );
}
