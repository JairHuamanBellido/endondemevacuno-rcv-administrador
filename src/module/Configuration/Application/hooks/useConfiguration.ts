import { useState } from "react";

export default function useConfiguration() {

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onClickEdit = () => {
      setIsEdit(true);
    };
  
    const onClickCancel = () => {
      setIsEdit(false);
    };

    return  {isEdit,onClickCancel,onClickEdit,setIsEdit}
}
