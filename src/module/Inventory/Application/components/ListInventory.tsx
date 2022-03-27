import { Spinner } from "../../../../shared";
import useGetAllInventory from "../hooks/useGetAllInventory";
import InventoryItem from "./InventoryItem";

export default function ListInventory() {
  const { data, isLoading, refetch, isRefetching } = useGetAllInventory();

  if (isLoading || isRefetching) return <Spinner />;
  if (data !== undefined && data.length < 1)
    return (
      <p className="text-slate-700">
        No hay vacunas en su centro de vacunación
      </p>
    );
  return (
    <div>
      {data?.map((inventory) => (
        <InventoryItem
          key={inventory.id}
          refetch={refetch}
          inventory={inventory}
        />
      ))}
    </div>
  );
}
