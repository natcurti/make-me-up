import auth, { db } from "src/firebase/firebase-config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { IUser } from "src/types/IUser";
import { doc, setDoc } from "firebase/firestore";
import { useAppDispatch } from "src/types/hooks";
import { setUserInfo } from "src/store/reducers/user";
import { useNavigate } from "react-router-dom";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUp = async (values: IUser) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          cpf: values.cpf,
          cellphone: values.cellphone,
          password: values.password,
        };
        await setDoc(doc(db, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-make-me-up", JSON.stringify(userDoc));
        dispatch(setUserInfo(userDoc));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { signUp, loading, error };
};

export default useSignUpWithEmailAndPassword;
