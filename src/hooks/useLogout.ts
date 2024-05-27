import { useSignOut } from "react-firebase-hooks/auth";
import auth from "src/firebase/firebase-config";
import { setIsLoggedIn } from "src/store/reducers/isLoggedIn";
import { setUserInfo } from "src/store/reducers/user";
import { useAppDispatch } from "src/types/hooks";

const useLogout = () => {
  const [signOut] = useSignOut(auth);
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      dispatch(setIsLoggedIn());
      dispatch(setUserInfo(null));
    } catch (error) {
      console.log(error);
    }
  };

  return { logout };
};

export default useLogout;
