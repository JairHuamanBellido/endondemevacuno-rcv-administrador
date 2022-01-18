import { IPropsIcon } from "./IPropsIcon";

export default function CheckIcon({ color }: IPropsIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={16}
      height={16}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill={color}
        d="m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
      />
    </svg>
  );
}
