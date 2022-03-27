import { IPropsIcon } from "./IPropsIcon";

export default function InventoryIcon({ color }: IPropsIcon) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path
        fill={color}
        d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2h-1zM5 13v6h14v-6H5zm1 1h8v3H6v-3zM3 3h18v2H3V3z"
      />
    </svg>
  );
}
