import { useState } from "react";
import DeleteIcon from "../../../../shared/Icon/DeleteIcon";
import Modal from "../../../../shared/Modal/Modal";
import { Inventory } from "../../Domain/model/Inventory";
import useRemoveInventory from "../hooks/useRemoveInventory";
import { useToast } from "@chakra-ui/toast";
import Toast from "../../../../shared/Toast/Toast";

interface Props {
  inventory: Inventory;
  refetch: any;
}

export default function InventoryItem({ inventory, refetch }: Props) {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const { mutate } = useRemoveInventory(inventory.id);
  const toast = useToast();
  const onClick = () => {
    setVisibleModal(true);
  };

  const onSubmitRemoveInventory = () => {
    mutate(undefined, {
      onSuccess: () => {
        setVisibleModal(false);
        refetch();
        toast({
          duration: 2500,
          isClosable: true,
          render: () => (
            <Toast
              title="Éxisto"
              description="Se ha removido la vacuna del inventario"
            />
          ),
        });
      },
    });
  };
  const onCloseModal = () => {
    setVisibleModal(false);
  };
  return (
    <>
      <Modal
        action="Eliminar"
        description="¿Desear removar la vacuna de su inventario?"
        isVisible={visibleModal}
        onCancel={onCloseModal}
        onSubmit={onSubmitRemoveInventory}
        isLoading={false}
      />
      <div className="w-full flex items-center justify-between">
        <p className="text-slate-600 text-lg">{inventory.vaccine.name}</p>
        <div
          onClick={onClick}
          className="cursor-pointer w-fit h-fit hover:bg-[#FF1A591d] p-2 rounded"
        >
          <DeleteIcon color="#FF1A59" />
        </div>
      </div>
    </>
  );
}
