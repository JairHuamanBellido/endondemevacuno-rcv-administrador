import {
  Modal as ModalChakra,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import Spinner from "../Spinner/Spinner";
interface IProps {
  isVisible: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  isLoading: boolean;
  action: string;
  title?: string;
  description: string;
}
export default function Modal({
  isVisible,
  onCancel,
  onSubmit,
  isLoading,
  action,
  title = "Confirmación",
  description,
}: IProps) {
  return (
    <>
      <ModalChakra isOpen={isVisible} onClose={onCancel}>
        <ModalOverlay className="bg-[#222749bf]" />
        <ModalContent className="flex items-center justify-center">
          <div className="bg-white rounded px-8 min-w-min py-8">
            <h2 className="text-3xl text-slate-700 font-semibold">{title}</h2>
            <p className="text-sm text-slate-500 mt-1">{description}</p>
            {isLoading && (
              <div className="mt-8 w-full flex items-center justify-center">
                <Spinner />
              </div>
            )}
            {!isLoading && (
              <div className="w-full flex items-center justify-end mt-8">
                <button
                  className="cursor-pointer rounded mr-4 py-2 px-6 text-slate-600 hover:bg-slate-200 transition-all"
                  onClick={onCancel}
                >
                  Cancelar
                </button>
                <button
                  className="cursor-pointer  rounded py-2 px-6 text-white bg-primary "
                  onClick={onSubmit}
                >
                  Sí, {action}
                </button>
              </div>
            )}{" "}
          </div>
        </ModalContent>
      </ModalChakra>
    </>
  );
}
