import { doc, getDoc } from "firebase/firestore";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth, { db } from "src/firebase/firebase-config";
import { setIsLoggedIn } from "src/store/reducers/isLoggedIn";
import { setUserInfo } from "src/store/reducers/user";
import { IFormLogin } from "src/types/IFormLogin";
import { useAppDispatch } from "src/types/hooks";

const useLogin = () => {
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = async (values: IFormLogin) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        values.email,
        values.password
      );
      if (userCredential) {
        const docRef = doc(db, "users", userCredential.user.uid);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        dispatch(setIsLoggedIn());
        dispatch(setUserInfo(docSnap.data()));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { login, loading, error };
};

export default useLogin;
