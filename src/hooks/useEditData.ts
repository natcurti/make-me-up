import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "src/firebase/firebase-config";
import { setUserInfo } from "src/store/reducers/user";
import { IUser } from "src/types/IUser";
import { useAppDispatch, useAppSelector } from "src/types/hooks";

interface IStatus {
  type: string;
  message: string;
}

const useEditData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<IStatus | null>(null);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const editProfile = async (values: IUser) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    if (user) {
      const userDocRef = doc(db, "users", `${user.uid}`);
      try {
        const updatedUserData = {
          ...user,
          name: values.name || user.name,
          lastname: values.lastname || user.lastname,
          email: values.email || user.email,
          cpf: values.cpf || user.cpf,
          cellphone: values.cellphone || user.cellphone,
          password: values.password || user.password,
        };

        await updateDoc(userDocRef, updatedUserData);
        setStatus({
          type: "success",
          message: "Dados atualizados com sucesso",
        });
        localStorage.setItem(
          "user-make-me-up",
          JSON.stringify(updatedUserData)
        );
        dispatch(setUserInfo(updatedUserData));
        setIsLoading(false);
      } catch (error) {
        setStatus({ type: "error", message: "Erro ao atualizar dados" });
        setIsLoading(false);
      }
    }
  };

  return { editProfile, status, isLoading };
};

export default useEditData;
